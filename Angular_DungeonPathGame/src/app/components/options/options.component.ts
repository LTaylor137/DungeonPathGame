import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerService } from "../../services/Player.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService, public PlayerService: PlayerService) { }

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
    this.PlayerService.isBlockActive = false;
    this.PlayerService.assignBasicLoot();
    this.PlayerService.playerAttack = 1;
    // this.PlayerService.playerDefence = 0;
    this.PlayerService.playerBlockAmount = 0;
    this.PlayerService.playerHealth = 5;
    this.RoomEventService.roomLootList = []
    this.DungeonPathService.generateMap()
    this.DungeonPathService.resetPlayer()
    this.RoomEventService.setRoom()
  }





}
