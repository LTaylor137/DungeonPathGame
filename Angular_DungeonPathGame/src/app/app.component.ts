import { Component } from '@angular/core';
import { DungeonPathService } from "./services/DungeonPath.service";
import { PlayerInventoryService } from "./services/PlayerInventory.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DungeonPathGame';

  constructor(public DungeonPathService: DungeonPathService, public PlayerInventoryService: PlayerInventoryService) { }

  ngOnInit(): void {
    this.DungeonPathService.generateMap();
    this.PlayerInventoryService.populateLootPool();
    this.PlayerInventoryService.assignBasicLoot()
  }

}
