import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Level/Level';
import { Room } from '../components/Room/Room';
import { LeaderLineComponent } from "../components/leaderline/leaderline.component"
import { Element } from '@angular/compiler';

declare let LeaderLine: any;

@Component({
  selector: 'app-leaderline',
  templateUrl: '../components/leaderline/leaderline.component.html',
  // template: '<div id="d1">div 1</div><div style="height:500px"><!-- JUST SOME SPACE --></div><div id="d2"> Connect me</div>',
  styleUrls: ['../components/leaderline/leaderline.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DungeonPathService {

  mapSize: number | null;
  levelList: Level[] = [];

  maxThisLevel: number | null;
  maxNextLevel: number | null;
  currentLevelNo: number | null;

  maxreached: boolean = false;
  tooclosetoMax: boolean = false;
  showDevInfo: boolean = true;
  showRoomGaps: boolean = true;
  line1;
  ConnectionsList: string[] = [];

  constructor(@Inject(DOCUMENT) private document) {
  }

  ngOnInit(): void {
  }

  setMapSize() {
    this.mapSize = 10;
  }

  wipeList() {
    this.levelList.splice(0, this.levelList.length)
  }

  toggleDevInfo() {
    if (this.showDevInfo === false) {
      this.showDevInfo = true;
    } else {
      this.showDevInfo = false;
    }
  }

  toggleRoomGaps() {
    if (this.showRoomGaps === false) {
      this.showRoomGaps = true;
    } else {
      this.showRoomGaps = false;
    }
  }

  generateLeaderLines() {
    // let k = 'line';
    // let i = 1;

    // //   for(i = 1; i < 5; i++) {
    // //     this.leaderLineList.push(eval('var ' + k + i + '= ' + i + ';'));
    // // }
    // this.ConnectionsList.push("")

    // var [h] = new LeaderLine(
    //   this.document.getElementById('Location' + '011'),
    //   this.document.getElementById('Location' + '101')
    // );

    // this.ConnectionsList.forEach(element => console.log(element));
    this.makeConnections();
  }

  deleteLeaderLines() {
    this.line1.remove()
  }

  makeConnections() {

    console.log("connections")
    this.levelList.forEach(element => {
      // console.log(Object.entries(element.roomList));
      element.roomList.forEach(Room => {
        var X = (Room.levelNo.toString())+(Room.roomNo.toString())+
        (Room.nextRoomNo.toString())+(Room.nextRoomNoExtr.toString());
        if (X.length === 4){
          X = "0" + X;
        }
        this.ConnectionsList.push(X);
      }); 
    });
    console.log(this.ConnectionsList)
  }


  createID(LvlNo: number, RmNo: number) {
    let ID: string = ((LvlNo.toString()) + RmNo.toString());
    if (ID.length <3){
      ID = ("0" + ID);
    }
    return ID;
  }

  generateMap() {
    this.wipeList();
    this.setMapSize();
    this.currentLevelNo = 1;
    this.maxThisLevel = 1;
    this.maxNextLevel = 1;

    //-----------------------create levels------------------------
    while (this.currentLevelNo <= this.mapSize) {

      let thislevel: Level = new Level(this.currentLevelNo)
      var roomNo: number = 1;
      var ConnectionRoomNo = 1;
      this.maxThisLevel = this.maxNextLevel;

      // grow
      //-----------------------create rooms------------------------
      while (roomNo <= this.maxThisLevel && (this.currentLevelNo <= this.mapSize / 2)) {

        console.log("grow mode")
        console.log("this.mapSize   =  " + this.mapSize)
        console.log("currentLevelNo  " + this.currentLevelNo)
        console.log("maxThisLevel  " + this.maxThisLevel)
        console.log("maxNextLevel  " + this.maxNextLevel)

        // create a gap 
        if (Math.random() > 0.5 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.currentLevelNo, 0, "gap", 0, 0, ""))
        }

        // this room will create first
        if (roomNo === 1 && this.currentLevelNo === 1) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "first", ConnectionRoomNo,
            ConnectionRoomNo + 1, this.createID(this.currentLevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxNextLevel = 2;
          break;
        } else {
          // dont split if nearing max, but allow for splits on last room. 
          // set map width / num rooms per level here.
          if ((this.maxThisLevel >= (this.mapSize / 4))) {
            thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "max",
              ConnectionRoomNo, 0, this.createID(this.currentLevelNo, roomNo)))
            roomNo += 1;
            ConnectionRoomNo += 1;
          } else {
            // split - 
            if (Math.random() > 0.5) {
              thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "split",
                ConnectionRoomNo, ConnectionRoomNo + 1, this.createID(this.currentLevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 2;
              this.maxNextLevel += 1;
            } else {
              thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "room",
                ConnectionRoomNo, 0, this.createID(this.currentLevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
            }
          }
        }
      }

      console.log("=============== end of first loop ")

      // console.log("currentLevelNo  " + this.currentLevelNo)
      // console.log("maxThisLevel  " + this.maxThisLevel)
      // console.log("maxNextLevel  " + this.maxNextLevel)
      let joined: boolean = false;
      // shrink
      //-----------------------create rooms------------------------
      while (this.maxThisLevel > 1 && (this.currentLevelNo > this.mapSize / 2)) {

        // create a gap
        if (Math.random() > 0.5 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.currentLevelNo, 0, "gap", ConnectionRoomNo, 0, ""))
        }

        console.log("shrink mode")
        console.log("this.mapSize " + this.mapSize / 2)
        console.log("currentLevelNo  " + this.currentLevelNo)
        console.log("maxThisLevel  " + this.maxThisLevel)
        console.log("maxNextLevel  " + this.maxNextLevel)

        // add 1 room on first level >50% of map. I don't know why this is needed but it is.
        if (this.currentLevelNo === 6 && roomNo === 1) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "first", ConnectionRoomNo, 0, this.createID(this.currentLevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxNextLevel += 1;
        }

        //join
        if ((this.currentLevelNo >= (this.mapSize - 2) && roomNo == 2) ||
          (this.currentLevelNo >= (this.mapSize - 2) && roomNo == 4) ||
          (Math.random() > 0.70 && roomNo !== 1 && joined === false)) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "join", ConnectionRoomNo - 1, ConnectionRoomNo - 1, this.createID(this.currentLevelNo, roomNo)))
          roomNo += 1;
          this.maxNextLevel -= 1;
          joined = true;
        } else {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "room", ConnectionRoomNo, 0, this.createID(this.currentLevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          joined = false;
        }
        this.maxThisLevel -= 1;
      }

      this.levelList.push(thislevel);
      this.currentLevelNo += 1;

      console.log("end of level: ")
      console.log(this.levelList)

    }

  }

}




