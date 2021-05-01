import { Component, OnInit, Input } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { Level } from '../Level/Level';
import { Room } from '../Room/Room';
import { LeaderLineComponent } from "../leaderline/leaderline.component"

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService) { }

  ngOnInit(): void {
  }

}

