import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService) { }

  ngOnInit(): void {
  }

  toggleDevInfo() {
    this.DungeonPathService.toggleDevInfo()
  }

  toggleRoomGaps() {
    this.DungeonPathService.toggleRoomGaps()
  }

  Generate() {
    this.DungeonPathService.generateMap()
    this.RoomEventService.setRoom()
}

resetPlayer() {
    this.DungeonPathService.resetPlayer()
    this.RoomEventService.setRoom()
}







}
