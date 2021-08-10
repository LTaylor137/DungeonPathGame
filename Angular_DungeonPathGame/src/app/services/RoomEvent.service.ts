import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Item } from '../components/Classes/Item';
import { Connection } from '../components/Classes/Connection';
import { DungeonPathService } from "../services/DungeonPath.service";
import { PlayerService } from "../services/Player.service";
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class RoomEventService {

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService) { }

  roomType: string | null;
  currentLevel: number | null;
  currentRoom: number | null;

  monsterAttackValue: number | null;
  monsterHealthValue: number | null;
  roomImage: string | null;

  roomLootList: Item[] = [];

  healAmount: number = 0;

  isMonsterStunned: boolean = false;
  isPlayerTurn: boolean = false;

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
        console.log("this index of the image x = " + x)
        return "assets/images/monsters/monster" + x + ".png";
      case "boss":
        let y = Math.floor((Math.random() * 7))
        console.log("this index of the image x = " + y)
        return "assets/images/monsters/monster" + y + ".png";
      case "finalboss":
        let z = Math.floor((Math.random() * 7))
        console.log("this index of the image x = " + z)
        return "assets/images/monsters/monster" + z + ".png";
    }
  }

  setRoom() {
    this.DungeonPathService.levelList.forEach(level => {
      level.roomList.forEach(room => {
        if (room.roomID === this.DungeonPathService.posID) {
          console.log(room.roomType);
          this.roomType = room.roomType
          this.currentLevel = room.levelNo
          this.currentRoom = room.roomNo

          if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
            this.monsterAttackValue = this.setMonsterAttackValue()
            this.monsterHealthValue = this.setMonsterHealthValue()
            this.isMonsterStunned = false;
            this.isPlayerTurn = false;
            this.roomImage = this.setImage(this.roomType);
            this.PlayerService.healthChange = 0;
            this.AsignRoomLoot();

            setTimeout(() => {
              this.monsterAttack();
              console.log("enter room aattack")
            }, 1000);

          }

          if (room.roomType === "fire") {
            this.getHealthFromFire()
          }

          if (room.roomType === "treasure") {
            this.AsignRoomLoot()
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
        return Math.ceil((currentLevel / 2));
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
        return Math.ceil((currentLevel));
    }
  }

  playerAttack() {
    this.monsterHealthValue = (this.monsterHealthValue - this.PlayerService.playerAttack)
    console.log("player hit enemy for " + this.PlayerService.playerAttack + " damage, taking health down to " + this.monsterHealthValue)

    if (this.monsterHealthValue > 0) {
      setTimeout(() => {
        this.isPlayerTurn = false
        this.monsterAttack()
      }, 1000);
    }

  }

  playerBlock() {
    this.PlayerService.isBlockActive = true;
    this.PlayerService.playerBlockAmount += this.PlayerService.offhand.itemDefenceValue;

    if (this.monsterHealthValue > 0) {
      setTimeout(() => {
        this.isPlayerTurn = false
        this.monsterAttack()
      }, 1000);
    }

  }

  monsterAttack() {
    if (this.isPlayerTurn === false && this.monsterHealthValue > 0) {

      if (this.isMonsterStunned === true) {
        console.log(" monster is stunned");
        setTimeout(() => {
          this.isMonsterStunned = false;
        }, 1000);

      } else {
        // attack
        setTimeout(() => {
          console.log("monster attack 1")
          let div = document.getElementById('monsterDiv');
          div.style.position = "relative";
          div.style.right = 15 + 'vw';
          let dmg = this.monsterAttackValue;
          this.PlayerService.takeDamage(dmg);
        }, 1000);

        // stun monster if block active
        if (this.PlayerService.isBlockActive === true) {
          setTimeout(() => {
            console.log("monster stunned")
            this.isMonsterStunned = true;
          }, 1000);
        }
        //move back
        setTimeout(() => {
          let div = document.getElementById('monsterDiv');
          div.style.position = "relative";
          div.style.right = 0 + 'px';
        }, 1200);
        setTimeout(() => {
          this.PlayerService.healthChange = 0;
        }, 1600);

        // clearTimeout();
      }
      setTimeout(() => {
        this.isPlayerTurn = true
      }, 2600);
    }
  }

  getHealthFromFire() {
    this.healAmount = Math.floor(Math.random() * 3) + 1;
    this.PlayerService.gainHealth(this.healAmount)
  }

  AsignRoomLoot() {

    this.PlayerService.isLootTaken = false;

    this.roomLootList = []
    let templist = [];

    // create a new list based on tier level 
    if (this.roomType === "treasure" || this.roomType === "boss") {
      this.PlayerService.lootList.forEach(element => {
        if (element.itemTier >= 2) {
          templist.push(element);
        }
      }
      );
    } else if (this.roomType === "monster" || this.roomType === "finalboss") {
      this.PlayerService.lootList.forEach(element => {
        if (element.itemTier <= 2) {
          templist.push(element);
        }
      }
      );
    }

    // select only 3 items from that list.
    while (this.roomLootList.length <= 2) {
      let randomItem = Math.floor(Math.random() * templist.length);
      console.log("the item chosen is  = =  " + randomItem, templist[randomItem])
      // only add the item if it's not already in the list of items offered.
      if (this.roomLootList.includes(templist[randomItem])) {
        // do nothihg
      } else {
        this.roomLootList.push(templist[randomItem])
      }
      console.log("the item list =  " + this.roomLootList)
    }

  }

}
