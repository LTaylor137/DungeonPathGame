import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Item } from '../components/Classes/Item';
import { Connection } from '../components/Classes/Connection';
import { DungeonPathService } from "../services/DungeonPath.service";
import { PlayerInventoryService } from "./PlayerInventory.service";
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class RoomEventService {

  constructor(public DungeonPathService: DungeonPathService, public PlayerInventoryService: PlayerInventoryService) { }

  currentLevel: number | null;
  currentRoom: number | null;
  roomType: string | null;
  roomBackground: string | null;
  roomImage: string | null;

  roomLootList: Item[] = [];
  isLootTaken: boolean = false;

  monsterTurnValue: number | null;
  monsterHealthValue: number | null;

  healAmount: number = 0;
  healthChangeValue: number = 0;

  isMonsterStunned: boolean = false;
  isPlayerTurn: boolean = false;
  isPlayerAttacking: boolean = false;
  isPlayerBlocking: boolean = false;
  isDamageNegated: boolean = false;
  isMonsterAttacking: boolean = false;
  isMonsterTakeDamage: boolean = false;
  // isMonsterDead: boolean = false;
  // isPlayerDead: boolean = false;

  // this assigns room background 
  setRoomBackground() {
    let BackgroundImageArray = [
      "../../assets/images/backgrounds/background1.png",
      "../../assets/images/backgrounds/background2.png",
      "../../assets/images/backgrounds/background3.png",
      "../../assets/images/backgrounds/background4.png",
      "../../assets/images/backgrounds/background5.png"
    ];
    let random = BackgroundImageArray[Math.floor(Math.random() * BackgroundImageArray.length)];
    return random;
  }

  // this assigns room images 
  setImage(roomType: string) {
    switch (roomType) {
      case "start":
        return "assets/images/monsters/monster1.png";
      case "treasure":
        return "assets/images/monsters/monster1.png";
      case "fire":
        return "assets/images/monsters/monster1.png";
      case "monster":
        let x = Math.floor((Math.random() * 7))
        return "assets/images/monsters/monster" + x + ".png";
      case "boss":
        let y = Math.floor((Math.random() * 7))
        return "assets/images/monsters/monster" + y + ".png";
      case "finalboss":
        let z = Math.floor((Math.random() * 7))
        return "assets/images/monsters/monster" + z + ".png";
    }
  }

  setRoom() {
    this.DungeonPathService.levelList.forEach(level => {
      level.roomList.forEach(room => {
        this.roomBackground = this.setRoomBackground();
        if (room.roomID === this.DungeonPathService.posID) {
          console.log(room.roomType);
          this.roomType = room.roomType
          this.currentLevel = room.levelNo
          this.currentRoom = room.roomNo
          this.healthChangeValue = 0;
          if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
            this.roomImage = this.setImage(this.roomType);
            this.monsterTurnValue = this.setMonsterAttackValue()
            this.monsterHealthValue = this.setMonsterHealthValue()
            this.isMonsterStunned = false;
            this.isPlayerTurn = false;
            this.AssignRoomLoot();
            setTimeout(() => { this.monsterTurn(); }, 1000);
          }
          if (room.roomType === "fire") {
            setTimeout(() => { this.getHealthFromFire(); }, 500);
          }
          if (room.roomType === "treasure") {
            this.AssignRoomLoot()
            setTimeout(() => {
              document.getElementById('treasure').setAttribute('src', "../../assets/images/misc/ChestOpen.png");
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
    this.isPlayerAttacking = true;
    // attack
    setTimeout(() => {
      this.isMonsterTakeDamage = true;
      if (this.monsterHealthValue <= this.PlayerInventoryService.playerAttack) {
        // drop monster instantly
        this.monsterHealthValue = (this.monsterHealthValue - this.PlayerInventoryService.playerAttack)
      } else {
        // reduce health after delay
        setTimeout(() => {
          this.monsterHealthValue = (this.monsterHealthValue - this.PlayerInventoryService.playerAttack)
        }, 500);
      }
    }, 250);
    //move back
    setTimeout(() => {
      this.isPlayerAttacking = false;
    }, 1000);
    console.log("player hit enemy for " + this.PlayerInventoryService.playerAttack + " damage, taking health down to " + this.monsterHealthValue);
    // change to monster turn
    if (this.monsterHealthValue > 0) {
      setTimeout(() => {
        this.healthChangeValue = 0;
        this.isPlayerTurn = false
        this.isMonsterTakeDamage = false;
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

  monsterTurn() {
    if (this.isPlayerTurn === false && this.monsterHealthValue > 0) {
      if (this.isMonsterStunned === true) {
        console.log(" monster is stunned");
        setTimeout(() => {
          this.isMonsterStunned = false;
        }, 500);
      } else {
        this.isMonsterAttacking = true;
        // monster attacks
        setTimeout(() => {
          //calculate damage done
          let damage = this.monsterTurnValue;
          damage = damage - (this.PlayerInventoryService.playerDefence + this.PlayerInventoryService.playerBlockAmount);
          if (damage <= 0) {
            console.log("attack did not break armour")
            this.isDamageNegated = true;
          } else if (damage > 0) {
            console.log("attack did " + damage + " damage.")
            this.healthChangeValue = - damage;
            this.PlayerInventoryService.takeDamage(damage);
          }
          this.isPlayerBlocking = false;
        }, 500);
        // stun monster if player block active
        if (this.isPlayerBlocking === true) {
          setTimeout(() => {
            console.log("monster stunned")
            this.isMonsterStunned = true;
            this.isDamageNegated = true;
            this.PlayerInventoryService.playerDefence -= this.PlayerInventoryService.offhand.itemDefenceValue;
          }, 500);
        }
        // move back
        setTimeout(() => {
          this.isMonsterAttacking = false;
        }, 1000);
      }
      // end turn
      setTimeout(() => {
        this.healthChangeValue = 0;
        this.isDamageNegated = false;
        this.isPlayerTurn = true;
      }, 2000);
    }
  }

  getHealthFromFire() {
    this.healAmount = Math.floor(Math.random() * 3) + 1;
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
      console.log("the item chosen is = " + randomItem, templist[randomItem])
      // only add the item if it's not already in the list of items offered.
      if (this.roomLootList.includes(templist[randomItem])) {
        // do not add
      } else if (currentlyEquipped.includes(templist[randomItem]) === true) {
        // do not add
        console.log(templist[randomItem].itemName + "was found in list of equipped items. And was skipped.")
      } else {
        this.roomLootList.push(templist[randomItem])
      }
    }
  }

  takeLoot(itemName) {
    let itemGained: Item = this.PlayerInventoryService.lootPool.find(obj => {
      return obj.itemName === itemName
    })
    console.log(itemGained);
    if (itemGained.itemType === "weapon") {
      this.PlayerInventoryService.weapon = itemGained;
      this.PlayerInventoryService.playerAttack = itemGained.itemAttackValue;
    }
    if (itemGained.itemType === "offhand") {
      this.PlayerInventoryService.offhand = itemGained;
      if (itemGained.itemAttackValue > 0) {
        this.PlayerInventoryService.playerAttack = itemGained.itemAttackValue;
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
