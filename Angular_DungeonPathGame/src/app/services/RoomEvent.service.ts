import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Connection } from '../components/Classes/Connection';
import { DungeonPathService } from "../services/DungeonPath.service";
import { PlayerService } from "../services/player.service";

@Injectable({
  providedIn: 'root'
})

export class RoomEventService {

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService) { }

  roomType: string | null;
  currentLevel: number | null;
  currentRoom: number | null;

  monsterAttack: number | null;
  monsterHealth: number | null;

  healAmount: number | null;

  setRoom() {
    this.DungeonPathService.levelList.forEach(level => {
      level.roomList.forEach(room => {
        if (room.roomID === this.DungeonPathService.posID) {
          console.log(room.roomType);
          this.roomType = room.roomType
          this.currentLevel = room.levelNo
          this.currentRoom = room.roomNo
          if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
            this.monsterAttack = this.setMonsterAttack()
            this.monsterHealth = this.setMonsterHealth()
          }
          if (room.roomType === "fire") {
            this.healAmount = 2;
            this.getHealthFromFire()
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
    this.monsterHealth = (this.monsterHealth - this.PlayerService.playerAttack)
    console.log("player hit enemy for " + this.PlayerService.playerAttack + " damage, taking health down to " + this.monsterHealth)
  }

  getHealthFromFire()
  {
this.healAmount = Math.floor(Math.random() * 3) + 1;
 this.PlayerService.gainHealth(this.healAmount)
  }

}
