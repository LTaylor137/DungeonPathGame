import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { PlayerService } from "../../services/player.service";


@Component({
  selector: 'app-room-event',
  templateUrl: './room-event.component.html',
  styleUrls: ['./room-event.component.css']
})
export class RoomEventComponent implements OnInit {
 
  roomType: string | null;
  LevelNo: number | null;
  roomNo: number | null;

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService) { }

  ngOnInit(): void {
    // this.roomType = this.DungeonPathService.
  }

}
