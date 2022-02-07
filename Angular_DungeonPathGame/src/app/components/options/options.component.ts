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
