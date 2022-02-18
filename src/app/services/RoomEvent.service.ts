import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Item } from '../components/Classes/Item';
import { Connection } from '../components/Classes/Connection';
import { DungeonPathService } from "../services/DungeonPath.service";
import { PlayerInventoryService } from "./PlayerInventory.service";
import { OptionsService } from "./Options.service";
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class RoomEventService {

  constructor(public DungeonPathService: DungeonPathService, public PlayerInventoryService: PlayerInventoryService) { }

  // rooom setup
  currentLevel: number | null;
  currentRoom: number | null;
  roomType: string | null;
  roomBackground: string | null;
  roomImage: string | null;
  roomLootList: Item[] = [];

  // combat
  monsterAttackValue: number | null;
  monsterHealthValue: number | null;
  healAmount: number = 0;
  healthChangeValue: number = 0;
  monsterHealthChangeValue: number = 0;

  // triggers
  isLootTaken: boolean = false;
  isPlayerTurn: boolean = false;
  isPlayerAttacking: boolean = false;
  isPlayerBlocking: boolean = false;
  isHandgunInUse: boolean = false;
  isMonsterAttacking: boolean = false;
  isDamageNegated: boolean = false;
  isAttackAvoided: boolean = false;
  isPlayerTakeDamage: boolean = false;
  isMonsterTakeDamage: boolean = false;
  isMonsterStunned: boolean = false;
  isSoundOn: boolean = true;

  playAudio(sound) {
    let audio = new Audio();
    audio.src = "assets/sounds/" + sound + ".wav";
    audio.load();
    audio.play();
  }

  setRoomBackground() {
    let BackgroundImageArray = [
      "assets/images/backgrounds/background1.png",
      "assets/images/backgrounds/background2.png",
      "assets/images/backgrounds/background3.png",
      "assets/images/backgrounds/background4.png",
      "assets/images/backgrounds/background5.png"
    ];
    let random = BackgroundImageArray[Math.floor(Math.random() * BackgroundImageArray.length)];
    return random;
  }

  setRoomImage(roomType: string) {
    switch (roomType) {
      case "monster":
        let x = Math.floor((Math.random() * 6))
        return "assets/images/monsters/monster" + x + ".png";
      case "boss":
        let y = Math.floor((Math.random() * 6))
        return "assets/images/monsters/monster" + y + ".png";
      case "finalboss":
        return "assets/images/monsters/monster6.png";
    }
  }

  setupRoom() {
    this.DungeonPathService.levelList.forEach(level => {
      level.roomList.forEach(room => {
        this.roomBackground = this.setRoomBackground();
        if (room.roomID === this.DungeonPathService.posID) {
          // console.log(room.roomType);
          this.roomType = room.roomType
          this.currentLevel = room.levelNo
          this.currentRoom = room.roomNo
          this.healthChangeValue = 0;
          if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
            this.roomImage = this.setRoomImage(this.roomType);
            this.monsterAttackValue = this.setMonsterAttackValue()
            this.monsterHealthValue = this.setMonsterHealthValue()
            this.isMonsterTakeDamage = false;
            this.isMonsterStunned = false;
            this.isPlayerTurn = false;
            this.AssignRoomLoot();
            if (this.isSoundOn === true && this.PlayerInventoryService.offhand.itemName != 'Handgun') {
              this.playAudio("monster-hiss");
            }
            // use players handgun here
            if (this.PlayerInventoryService.offhand.itemName === 'Handgun') {
              this.playerUsesHandgun()
              setTimeout(() => { this.monsterTurn(); }, 2000);
            } else {
              setTimeout(() => { this.monsterTurn(); }, 1000);
            }
          }
          if (room.roomType === "fire") {
            if (this.isSoundOn === true) {
              this.playAudio("campfire");
            }
            setTimeout(() => { this.getHealthFromFire(); }, 500);
          }
          if (room.roomType === "treasure") {
            this.AssignRoomLoot()
            if (this.isSoundOn === true) {
              this.playAudio("chest-creak");
            }
            setTimeout(() => {
              document.getElementById('treasure').setAttribute('src', "assets/images/misc/ChestOpen.png");
            }, 300);
          }
        }
      });
    });
  }

  setMonsterAttackValue() {
    let currentLevel = this.currentLevel
    switch (this.roomType) {
      case "monster":
        return Math.ceil((currentLevel / 4));
      case "boss":
        return Math.ceil((currentLevel / 2));
      case "finalboss":
        return Math.ceil((currentLevel / 2 - 1));
    }
  }

  setMonsterHealthValue() {
    let currentLevel = this.currentLevel
    switch (this.roomType) {
      case "monster":
        return Math.ceil((currentLevel / 2));
      case "boss":
        return Math.ceil((currentLevel));
      case "finalboss":
        return Math.ceil((currentLevel - 1));
    }
  }

  playerAttack() {
    this.isPlayerBlocking = false;
    this.isPlayerAttacking = true;
    // attack
    setTimeout(() => {
      if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemTier === 1 && this.PlayerInventoryService.weapon.itemName != "Lightsaber") {
        this.playAudio("monster-hit1");
      }
      if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemTier > 1 && this.PlayerInventoryService.weapon.itemName != "Lightsaber") {
        this.playAudio("monster-hit2");
      }
      if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemName === "Lightsaber") {
        this.playAudio("lightsaber-swing");
      }
      // drop monster instantly
      if (this.monsterHealthValue <= this.PlayerInventoryService.weapon.itemAttackValue) {
        this.isMonsterTakeDamage = true;
        this.monsterHealthValue = (this.monsterHealthValue - this.monsterHealthValue)
      } else {
        if (this.PlayerInventoryService.weapon.itemName === "Lightsaber" && Math.random() < 0.25) {
          // console.log("lightsaber perk activated")
          this.isMonsterTakeDamage = true;
          this.monsterHealthChangeValue = this.monsterHealthValue
          this.monsterHealthValue = 0
        } else {
          this.isMonsterTakeDamage = true;
          this.monsterHealthChangeValue = this.PlayerInventoryService.weapon.itemAttackValue
          setTimeout(() => {
            this.monsterHealthValue = (this.monsterHealthValue - this.PlayerInventoryService.weapon.itemAttackValue)
          }, 500);
        }
      }
    }, 250);
    //move back
    setTimeout(() => {
      this.isPlayerAttacking = false;
      // console.log("player hit enemy for " + this.PlayerInventoryService.weapon.itemAttackValue + " damage, taking health down to " + this.monsterHealthValue);
    }, 1000);
    // change to monster turn
    if (this.monsterHealthValue > 0) {
      setTimeout(() => {
        this.isMonsterTakeDamage = false;
        this.monsterHealthChangeValue = 0;
        this.isPlayerTurn = false
        this.monsterTurn()
      }, 1000);
    }
  }

  playerBlock() {
    this.isPlayerBlocking = true;
    this.PlayerInventoryService.playerDefence =
      this.PlayerInventoryService.helm.itemDefenceValue +
      this.PlayerInventoryService.armour.itemDefenceValue +
      this.PlayerInventoryService.offhand.itemDefenceValue;
    if (this.monsterHealthValue > 0) {
      setTimeout(() => {
        this.isPlayerTurn = false
        this.monsterTurn()
      }, 1000);
    }
  }

  playerUsesHandgun() {
    // console.log("handgun used")
    this.isMonsterTakeDamage = false;
    this.isHandgunInUse = true;
    // monster take damage
    setTimeout(() => {
      if (this.isSoundOn === true) {
        this.playAudio("gunshot");
      }
      this.isMonsterTakeDamage = true;
    }, 1000);
    setTimeout(() => {
      this.monsterHealthValue = (this.monsterHealthValue - 1)
    }, 1500);
    //wrapup
    setTimeout(() => {
      this.isHandgunInUse = false;
      this.isMonsterTakeDamage = false;
    }, 2000);
  }

  monsterTurn() {

    // if final boss killed then end game and show win screen.
    if (this.monsterHealthValue <= 0 && this.roomType === "finalboss") {
      setTimeout(() => {
        if (this.isSoundOn === true) {
          this.playAudio("player-win2");
        }
        this.PlayerInventoryService.isPlayerWon = true;
        this.DungeonPathService.showDungeonPath = false;
        this.DungeonPathService.showRoom = false;
      }, 1000);
    }

    if (this.isPlayerTurn === false && this.monsterHealthValue > 0) {
      if (this.isMonsterStunned === true) {
        // // console.log(" monster is stunned");
        setTimeout(() => {
          this.isMonsterStunned = false;
        }, 500);
      } else {
        // monster attacks
        this.isMonsterAttacking = true;
        // calculate if player avoids attack
        let avoidChance = this.PlayerInventoryService.getPlayerAvoidChance();
        // console.log("player avoidchance = " + avoidChance)
        let random = Math.random()
        // console.log("random no = " + random)
        if (avoidChance > random) {
          // monster attack misses
          // console.log("player avoided attack")
          if (this.isSoundOn === true) {
            this.playAudio("attack-miss");
          }
          this.isAttackAvoided = true;
        } else {
          // monster attack hits
          setTimeout(() => {
            //calculate damage done
            let damage = this.monsterAttackValue;
            damage = damage - (this.PlayerInventoryService.playerDefence + this.PlayerInventoryService.playerBlockAmount);
            if (damage <= 0) {
              // // console.log("attack did not break armour")
              if (this.isSoundOn === true) {
                this.playAudio("metal-hit");
              }
              this.isDamageNegated = true;
            } else if (damage > 0) {
              // // console.log("attack did " + damage + " damage.")
              if (this.isSoundOn === true) {
                this.playAudio("player-hit");
              }
              this.isPlayerTakeDamage = true;
              // will this damage kill player?
              if (damage >= this.PlayerInventoryService.playerHealth && this.PlayerInventoryService.isGodmodeOn === false) {
                if (this.isSoundOn === true) {
                  this.playAudio("player-death");
                }
                setTimeout(() => {
                  this.PlayerInventoryService.isPlayerDead = true
                  this.DungeonPathService.showDungeonPath = false;
                  this.DungeonPathService.showRoom = false;
                }, 2000);
              }
              this.healthChangeValue = - damage;
              this.PlayerInventoryService.takeDamage(damage);
            }
            // stun monster if player block active
            if (this.isPlayerBlocking === true) {

              if (this.isSoundOn === true) {
                this.playAudio("shield-block");
              }

              this.isMonsterStunned = true;
              this.isDamageNegated = true;
            }
          }, 500);
        }
      }

      // move monster back
      setTimeout(() => {
        this.isAttackAvoided = false;
        this.isMonsterAttacking = false;
      }, 1000);
      // end monsters turn
      setTimeout(() => {
        this.healthChangeValue = 0;
        this.isDamageNegated = false;
        this.isPlayerTakeDamage = false;
        if (this.PlayerInventoryService.playerHealth > 0 || this.PlayerInventoryService.isGodmodeOn === true) {
          this.isPlayerTurn = true;
        }
        this.isPlayerBlocking = false;
        this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.helm.itemDefenceValue + this.PlayerInventoryService.armour.itemDefenceValue)
      }, 1000);
    }
  }

  getHealthFromFire() {
    this.healAmount = Math.floor(Math.random() * 2) + 2;
    this.PlayerInventoryService.gainHealth(this.healAmount)
    this.healthChangeValue = this.healAmount;
    setTimeout(() => {
      this.DungeonPathService.toggleDungeonPath();
      this.healthChangeValue = 0;
    }, 1500);
  }

  AssignRoomLoot() {
    this.isLootTaken = false;
    this.roomLootList = []
    let templist = [];
    let currentlyEquipped = [this.PlayerInventoryService.helm, this.PlayerInventoryService.armour, this.PlayerInventoryService.offhand, this.PlayerInventoryService.weapon];
    // create a new list based on tier level 
    if (this.roomType === "treasure" || this.roomType === "boss" || this.roomType === "finalboss") {
      this.PlayerInventoryService.lootPool.forEach(element => {
        if (element.itemTier >= 2) {
          templist.push(element);
        }
      }
      );
    } else if (this.roomType === "monster") {
      this.PlayerInventoryService.lootPool.forEach(element => {
        if (element.itemTier <= 2) {
          templist.push(element);
        }
      }
      );
    }
    // select only 3 items from that list.
    while (this.roomLootList.length <= 2) {
      let randomItem = Math.floor(Math.random() * templist.length);
      // console.log("the item chosen is = " + randomItem, templist[randomItem])
      // only add the item if it's not already in the list of items offered.
      if (this.roomLootList.includes(templist[randomItem])) {
        // do not add
      } else if (currentlyEquipped.includes(templist[randomItem]) === true) {
        // do not add
        // console.log(templist[randomItem].itemName + "was found in list of equipped items. And was skipped.")
      } else {
        this.roomLootList.push(templist[randomItem])
      }
    }
  }

  takeLoot(itemName) {
    let itemGained: Item = this.PlayerInventoryService.lootPool.find(obj => {
      return obj.itemName === itemName
    })
    // console.log(itemGained);
    if (itemGained.itemType === "weapon") {
      this.PlayerInventoryService.weapon = itemGained;
      this.PlayerInventoryService.weapon.itemAttackValue = itemGained.itemAttackValue;
    }
    if (itemGained.itemType === "offhand") {
      this.PlayerInventoryService.offhand = itemGained;
      if (itemGained.itemAttackValue > 0) {
        this.PlayerInventoryService.weapon.itemAttackValue = itemGained.itemAttackValue;
      }
    }
    if (itemGained.itemType === "helm") {
      this.PlayerInventoryService.helm = itemGained;
      this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.armour.itemDefenceValue + itemGained.itemDefenceValue);
    }
    if (itemGained.itemType === "armour") {
      this.PlayerInventoryService.armour = itemGained;
      this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.helm.itemDefenceValue + itemGained.itemDefenceValue);
    }
    if (itemGained.itemType === "food") {
      this.PlayerInventoryService.gainHealth(itemGained.itemDefenceValue);
      this.healthChangeValue = itemGained.itemDefenceValue;
    }
    this.isLootTaken = true;
    setTimeout(() => {
      this.isPlayerBlocking = false;
      this.DungeonPathService.toggleDungeonPath();
    }, 1000);
  }

}
