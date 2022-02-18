import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerInventoryService } from "../../services/PlayerInventory.service";
import { OptionsService } from "../../services/options.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public OptionsService: OptionsService, public RoomEventService: RoomEventService, public DungeonPathService: DungeonPathService, public PlayerInventoryService: PlayerInventoryService) { }

  ngOnInit(): void {
  }

  toggleOptions() {
    this.OptionsService.toggleOptions()
  }

  toggleSound() {
    this.OptionsService.toggleSound()
  }

  godMode() {
    this.OptionsService.godMode()
  }

  toggleDevInfo() {
    this.OptionsService.toggleDevInfo()
  }

  toggleRoomGaps() {
    this.OptionsService.toggleRoomGaps()
  }

  toggleDungeonPath() {
    this.OptionsService.toggleDungeonPath()
  }

  generate() {
    this.OptionsService.generate()
  }

  redrawLines() {
    this.OptionsService.redrawLines()
  }

  resetPlayerPos() {
    this.OptionsService.resetPlayerPos()
  }

  resetAll() {
    this.OptionsService.resetAll()
  }

}
