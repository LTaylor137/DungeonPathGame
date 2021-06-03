import { Component, OnInit, Input } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { RoomEventService } from "../../services/RoomEvent.service";
import { PlayerService } from "../../services/Player.service";

@Component({
    selector: 'app-dungeon-path',
    templateUrl: './dungeon-path.component.html',
    styleUrls: ['./dungeon-path.component.css']
})

export class DungeonPathComponent implements OnInit {

    constructor(public DungeonPathService: DungeonPathService, public RoomEventService: RoomEventService) { }

    ngOnInit(): void {
    }

    movePlayer(x){
        this.DungeonPathService.movePlayer(x)
        this.RoomEventService.setRoom()
    }
    
 
}
