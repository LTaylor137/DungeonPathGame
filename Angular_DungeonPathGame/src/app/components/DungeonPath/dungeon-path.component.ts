import { Component, OnInit, Input } from '@angular/core';
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

    Generate() {
        this.DungeonPathService.generateMap()
    }

    makeConnections() {
        this.DungeonPathService.makeConnections()
    }

    generateLeaderLines() {
        this.DungeonPathService.generateLeaderLines()
    }

    resetPlayer() {
        this.DungeonPathService.resetPlayer()
    }

    movePlayer(x){
        this.DungeonPathService.movePlayer(x)
    }
    
    randomMath() {
        return Math.random();
    }

    toggleDevInfo() {
        this.DungeonPathService.toggleDevInfo()
    }

    toggleRoomGaps() {
        this.DungeonPathService.toggleRoomGaps()
    }

    reduceBlocks(){
        console.log("reduceBlocks vlicked")
        // this.DungeonPathService.reduceBlocks()
    }

    getMapSize (){
        var x = document.getElementById("mapLengthInput");
        this.DungeonPathService.getMapSize(x);
    }

}
