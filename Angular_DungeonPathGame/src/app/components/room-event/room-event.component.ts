import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";


@Component({
  selector: 'app-room-event',
  templateUrl: './room-event.component.html',
  styleUrls: ['./room-event.component.css']
})
export class RoomEventComponent implements OnInit {
 
  // roomType: string | null;
  // LevelNo: number | null;
  // roomNo: number | null;

  // monsterAttack: number | null;

  constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService) { }

  ngOnInit(): void {
    this.RoomEventService.setRoom();
  }



}
