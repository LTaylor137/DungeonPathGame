import { Component } from '@angular/core';
import { DungeonPathService } from "./services/DungeonPath.service";
import { PlayerService } from "./services/Player.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DungeonPathGame';

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService) { }

  ngOnInit(): void {
    this.DungeonPathService.generateMap();
    this.PlayerService.populateLootPool();
    this.PlayerService.assignBasicLoot()
  }

}
