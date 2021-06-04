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

  roomLootList: Item[] = [];

  healAmount: number = 0;

  setRoom() {
    this.DungeonPathService.levelList.forEach(level => {
      level.roomList.forEach(room => {
        if (room.roomID === this.DungeonPathService.posID) {
          console.log(room.roomType);
          this.roomType = room.roomType
          this.currentLevel = room.levelNo
          this.currentRoom = room.roomNo

          if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
            this.monsterAttackValue = this.setMonsterAttack()
            this.monsterHealthValue = this.setMonsterHealth()
            this.searchForLoot()
          }

          if (room.roomType === "fire") {
            this.getHealthFromFire()
          }

          if (room.roomType === "treasure") {
            this.searchForLoot()
          }

        }
      });
    });
  }

  setMonsterAttack() {
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

  setMonsterHealth() {
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
  }

  monsterAttack() {
    let dmg = this.monsterAttackValue
    this.PlayerService.takeDamage(dmg)
  }

  getHealthFromFire() {
    this.healAmount = Math.floor(Math.random() * 3) + 1;
    this.PlayerService.gainHealth(this.healAmount)
  }

  searchForLoot() {

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
      console.log(templist);
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
