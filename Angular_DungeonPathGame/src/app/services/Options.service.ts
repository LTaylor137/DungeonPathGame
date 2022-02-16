import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../services/DungeonPath.service";
import { RoomEventService } from "../services/RoomEvent.service";
import { PlayerInventoryService } from "../services/PlayerInventory.service";

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService, public PlayerInventoryService: PlayerInventoryService) { }

  ngOnInit(): void {
  }

  ShowOptions: boolean = false;
  HideOptions: boolean = false;
 
  toggleOptions() {
    if (this.ShowOptions === true) {
      this.HideOptions = true;
      this.ShowOptions = false;
     setTimeout(() => {
      this.HideOptions = false;}, 500)
    } else if (this.ShowOptions === false) {
      this.ShowOptions = true;
    }
  }

  godMode() {
    if (this.PlayerInventoryService.isGodmodeOn === true) {
      this.PlayerInventoryService.isGodmodeOn = false;
    } else if (this.PlayerInventoryService.isGodmodeOn === false) {
      this.PlayerInventoryService.isGodmodeOn = true;
    }
  }

  toggleDevInfo() {
    this.DungeonPathService.toggleDevInfo()
  }

  toggleRoomGaps() {
    this.DungeonPathService.toggleRoomGaps()
  }

  toggleDungeonPath() {
    this.DungeonPathService.toggleDungeonPath()
  }

  generate() {
    this.DungeonPathService.generateMap()
    this.RoomEventService.setupRoom()
  }

  redrawLines() {
    this.DungeonPathService.deleteLeaderLines();
    setTimeout(() => {
      this.DungeonPathService.makeConnections();
      this.DungeonPathService.generateLeaderLines();
    }, 0);
  }

  resetPlayerPos() {
    this.DungeonPathService.resetPlayer()
    this.RoomEventService.setupRoom()
  }

  resetAll() {
    this.RoomEventService.isPlayerBlocking = false;
    this.PlayerInventoryService.assignBasicLoot();
    this.PlayerInventoryService.playerDefence = 0;
    this.PlayerInventoryService.playerBlockAmount = 0;
    this.PlayerInventoryService.playerHealth = 1;
    this.RoomEventService.roomLootList = []
    this.DungeonPathService.showDungeonPath = true;
    this.DungeonPathService.showRoom = false;
    this.PlayerInventoryService.isPlayerDead = false;
    this.PlayerInventoryService.isPlayerWon = false;
    this.DungeonPathService.generateMap()
    this.DungeonPathService.resetPlayer()
    this.RoomEventService.setupRoom()
  }

}

