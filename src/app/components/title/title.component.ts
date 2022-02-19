import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerInventoryService } from "../../services/PlayerInventory.service";
import { OptionsService } from "../../services/options.service";


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService, 
    public RoomEventService: RoomEventService, 
    public PlayerInventoryService: PlayerInventoryService,
    public OptionsService: OptionsService) { }

  ngOnInit(): void {
  }

  isTitleDismissed: boolean = true;

  resetAll() {
    this.OptionsService.resetAll()
  }

  dismissTitle(){
    this.isTitleDismissed = true;
  }

  startGame() {
    console.log("start clicked.")
    this.DungeonPathService.generateMap();
    this.PlayerInventoryService.populateLootPool();
    this.PlayerInventoryService.assignBasicLoot();
    this.DungeonPathService.showTitleScreen = false;
    this.DungeonPathService.showDungeonPath = true;
  }

}
