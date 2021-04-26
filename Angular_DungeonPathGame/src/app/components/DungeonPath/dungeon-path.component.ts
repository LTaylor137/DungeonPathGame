import { Component, OnInit } from '@angular/core';
import { DungeonPathService } from "../../services/DungeonPath.service";

@Component({
    selector: 'app-dungeon-path',
    templateUrl: './dungeon-path.component.html',
    styleUrls: ['./dungeon-path.component.css']
})
export class DungeonPathComponent implements OnInit {

    constructor(public DungeonPathService: DungeonPathService) { }

    ngOnInit(): void {
    }



 }
