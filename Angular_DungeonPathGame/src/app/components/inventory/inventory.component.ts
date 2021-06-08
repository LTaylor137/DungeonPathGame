import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerService } from "../../services/Player.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService, public RoomEventService: RoomEventService) { }

  ngOnInit(): void {
    // this.PlayerService.playerHealth.subscribe(data => { this.health = data; console.log("this.health" + this.health)});
    
  }

  health: number = 0;



  Attack(){
this.RoomEventService.playerAttack();
  }

  Block(){
    this.RoomEventService.playerBlock();
  }
}
