import { Component, OnInit, Input } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { Level } from '../Level/Level';
import { Room } from '../Room/Room';
import { LeaderLineComponent } from "../leaderline/leaderline.component"

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService) { }

  // this was
  @Input() Room: Room;

  ngOnInit(): void {
  }

}
