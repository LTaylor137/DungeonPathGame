import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerService } from "../../services/Player.service";


@Component({
  selector: 'app-room-event',
  templateUrl: './room-event.component.html',
  styleUrls: ['./room-event.component.css']
})
export class RoomEventComponent implements OnInit {
 
  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService, public PlayerService: PlayerService) { }

  ngOnInit(): void {
    console.log("set room room-event.component.ts")
    this.RoomEventService.setRoom();
  }

  takeLoot(itemName)
  {
    this.PlayerService.takeLoot(itemName)
    setTimeout(() => { this.DungeonPathService.toggleDungeonPath(); }, 1000);
  }

}
