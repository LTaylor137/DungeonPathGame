import { Component, OnInit, Input } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";
import { Level } from '../Level/Level';
import { Room } from '../Room/Room';

@Component({
    selector: 'app-dungeon-path',
    templateUrl: './dungeon-path.component.html',
    styleUrls: ['./dungeon-path.component.css']
})
export class DungeonPathComponent implements OnInit {

    constructor(public DungeonPathService: DungeonPathService) { }

    ngOnInit(): void {
    }

    Generate() {
        console.log("clickgenerate");
        this.DungeonPathService.generateMap()
    }

    randomMath() {
        return Math.random();
    }

    toggleDevInfo() {
        this.DungeonPathService.toggleDevInfo()
    }

}
