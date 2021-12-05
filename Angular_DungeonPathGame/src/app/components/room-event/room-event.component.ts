import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerInventoryService } from "../../services/PlayerInventory.service";


@Component({
  selector: 'app-room-event',
  templateUrl: './room-event.component.html',
  styleUrls: ['./room-event.component.css']
})
export class RoomEventComponent implements OnInit {
 
  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService, public PlayerInventoryService: PlayerInventoryService) { }

  ngOnInit(): void {
    console.log("set room room-event.component.ts")
    this.RoomEventService.setRoom();
  }

  takeLoot(itemName)
  {
    this.RoomEventService.takeLoot(itemName)
  }

  Attack() {
    this.RoomEventService.playerAttack();
  }

  Block() {
    this.RoomEventService.playerBlock();
  }
  
}
