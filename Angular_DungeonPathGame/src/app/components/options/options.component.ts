import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerInventoryService } from "../../services/PlayerInventory.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService, public PlayerInventoryService: PlayerInventoryService) { }

  ngOnInit(): void {
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

  Generate() {
    this.DungeonPathService.generateMap()
    this.RoomEventService.setRoom()
  }

  redrawLines() {
    this.DungeonPathService.generateLeaderLines();
  }

  resetPlayerPos() {
    this.DungeonPathService.resetPlayer()
    this.RoomEventService.setRoom()
  }

  Reset() {
    this.RoomEventService.isPlayerBlocking = false;
    this.PlayerInventoryService.assignBasicLoot();
    this.PlayerInventoryService.playerAttack = 1;
    this.PlayerInventoryService.playerDefence = 0;
    this.PlayerInventoryService.playerBlockAmount = 0;
    this.PlayerInventoryService.playerHealth = 5;
    this.RoomEventService.roomLootList = []
    this.DungeonPathService.showDungeonPath = true;
    this.DungeonPathService.generateMap()
    this.resetPlayerPos()
  }

}
