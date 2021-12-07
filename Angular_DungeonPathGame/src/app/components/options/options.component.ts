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

  ShowOptions: boolean = true;
  HideOptions: boolean = false;
  isGodmodeOn: boolean = true;

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

  GodMode() {
    if (this.isGodmodeOn === true) {
      this.isGodmodeOn = false;
    } else if (this.isGodmodeOn === false) {
      this.isGodmodeOn = true;
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

  Generate() {
    this.DungeonPathService.generateMap()
    this.RoomEventService.setRoom()
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
