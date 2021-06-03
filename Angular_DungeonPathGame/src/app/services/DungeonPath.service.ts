import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Connection } from '../components/Classes/Connection';
import { RoomEventService } from "../services/RoomEvent.service";
import { PlayerService } from "../services/Player.service";

declare let LeaderLine: any;

@Component({
  selector: 'app-leaderline',
  templateUrl: '../components/leaderline/leaderline.component.html',
  styleUrls: ['../components/leaderline/leaderline.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DungeonPathService {

  mapSize: number | null;
  LevelNo: number | null;

  maxRmThisLevel: number | null;
  maxRmNextLevel: number | null;
  isSplitBlock: boolean = false;
  isJoinBlock: boolean = true;
  isCrossbackBlock: boolean = false;
  rmBlockList: number[] = [];

  levelList: Level[] = [];
  connectionsList: Connection[] = [];
  LeaderLineList: any[] = [];

  showDevInfo: boolean = false;
  showRoomGaps: boolean = true;

  posID: string = "11";
  nextID1: string;
  nextID2: string;

  constructor(@Inject(DOCUMENT) private document) {
  }

  ngOnInit(): void {
  }

  setMapSize() {
    this.mapSize = 10;
  }

  wipeLists() {
    this.levelList.splice(0, this.levelList.length)
    this.rmBlockList.splice(0, this.rmBlockList.length)
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

  movePlayer(x) {
    // change a room to used when leaving.
    this.levelList.forEach(level => {
      level.roomList.forEach(room => {
        if (room.roomID === this.posID) {
          room.used = true;
        }
      });
    });
    //then move the player icon.
    this.posID = x;
    this.nextID1 = "00";
    this.nextID2 = "00";

    this.updateMoveOptions();
  }

  updateMoveOptions() {
    if (this.posID !== "101") {
      console.log("posid78341798431 = " + this.posID)
      let x = this.connectionsList.filter(conx => conx.start === this.posID)
      this.nextID1 = x[0].end
      console.log(this.nextID1);
      if (x.length > 1) {
        this.nextID2 = x[1].end
        console.log(this.nextID2);
      }
      console.log(x);
    } else {
      console.log("final room reached.")
    }
  }

  resetPlayer() {
    this.posID = '11';
    this.nextID1 = "21";
    this.nextID2 = "22";
  }

  // creates a room ID for a room based on level and roomNo.
  createID(LvlNo: number, RmNo: number) {
    let ID: string = ((LvlNo.toString()) + RmNo.toString());
    return ID;
  }

  // this creates a list of all connections between rooms, to be used by leaderline
  makeConnections() {
    this.levelList.forEach(element => {
      if (element.levelNo === (this.levelList.length)) {
        // do nothing
      } else {
        element.roomList.forEach(Room => {
          if (Room.conxType !== "gap") {
            let X = new Connection(
              (Room.roomID), ((Room.levelNo + 1).toString()) + (Room.conxRm1.toString())
            )
            this.connectionsList.push(X);
            if (Room.conxRm2 > 0) {
              let Y = new Connection(
                (Room.roomID), ((Room.levelNo + 1).toString()) + (Room.conxRm2.toString())
              )
              this.connectionsList.push(Y);
            }
          }
        });
      }
    });
    setTimeout(() => { this.generateLeaderLines(); }, 0);
  }

  generateLeaderLines() {
    this.connectionsList.forEach(connex => {
      let line = new LeaderLine(
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.start.toString())),
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.end.toString())),
        {
          color: 'black',
          size: 15,
          path: "straight",
          startPlug: "behind",
          endPlug: "disc"
        }
      );
      this.LeaderLineList.push(line);
    });
  }

  deleteLeaderLines() {
    this.LeaderLineList.forEach(line => {
      line.remove();
      this.LeaderLineList = [];
      this.connectionsList = [];
    });
  }

  // this assigns room types 
  setRoomType(lvl: number, rmNo: number) {

    if (lvl === 1) {
      lvl = 1;
    } else if (Math.random() > 0.85 &&
      lvl !== (this.mapSize / 2 + 1) &&
      lvl !== (this.mapSize - 1) &&
      lvl !== (this.mapSize)) {
      lvl = 20;
    } else if (Math.random() > 0.8 &&
      lvl !== (this.mapSize / 2 + 1) &&
      lvl !== (this.mapSize - 1) &&
      lvl >= (this.mapSize / 2 - 1) &&
      lvl !== (this.mapSize)
    ) {
      lvl = this.mapSize - 1;
    }

    switch (lvl) {
      case 1:
        return "start";
      case 20:
        return "treasure";
      case (this.mapSize / 2 + 1):
        return "boss";
      case this.mapSize:
        return "finalboss";
      case this.mapSize - 1:
        return "fire";
      default:
        return "monster";
    }
  }

  // create random connections between standard rooms to promote more path choices.
  randomJoin(lvl: number, rmNo: number, conxRm1: number, maxRm: number) {

    let newconxRm2: number = 0;

    // // wipe the blocklist of all entries at level 6
    // if (lvl === this.mapSize) {
    //   this.rmBlockList = [];
    //   return newconxRm2;
    // }

    // // skip if room included in block list.
    // if (this.rmBlockList.includes(rmNo)) {

    // } else if (lvl > 3) {

    //   // if Rm = 1 then add a +1 join, and then block a join afterwards.
    //   if (Math.random() > 0.3 && rmNo === 1) {
    //     newconxRm2 = conxRm1 + 1;  //    +
    //     this.rmBlockList.push(rmNo);
    //     this.isCrossbackBlock = true;
    //     this.isJoinBlock = true;
    //     return newconxRm2;
    //     // If Rm = Max then add a -1 join, but only if a +1 was not just added.
    //   } else if (Math.random() > 0.3 && rmNo === maxRm) {
    //     if (this.isCrossbackBlock === false) {
    //       this.rmBlockList.push(rmNo);
    //       newconxRm2 = conxRm1 - 1   //    -
    //       return newconxRm2;
    //     }
    //     // if rmNo > 1 && < maxRm, then add a +1 or -1 
    //   } else if (Math.random() > 0.3 && rmNo > 1 && rmNo < maxRm) {
    //     if (Math.random() > 0.5) {
    //       this.rmBlockList.push(rmNo);
    //       newconxRm2 = conxRm1 + 1   //    +
    //       this.isCrossbackBlock = true;
    //       this.isJoinBlock = true;
    //       return newconxRm2;
    //     } else {
    //       // if block doesnt exist then create link. if block exists then cancel block. 
    //       if (this.isCrossbackBlock === false) {
    //         this.rmBlockList.push(rmNo);
    //         newconxRm2 = conxRm1 - 1   //    -
    //       }
    //       this.isCrossbackBlock = false
    //       return newconxRm2;
    //     }
    //   }
    // }
    return newconxRm2;
  }

  generateMap() {

    this.deleteLeaderLines();
    this.wipeLists();
    this.setMapSize();
    this.LevelNo = 1;
    this.maxRmThisLevel = 1;
    this.maxRmNextLevel = 1;

    // ========================= create levels =========================
    while (this.LevelNo <= this.mapSize) {

      console.log(" ******** The start of level number " + this.LevelNo)

      let thislevel: Level = new Level(this.LevelNo)
      var roomNo: number = 1;
      var ConnectionRoomNo = 1;
      this.maxRmThisLevel = this.maxRmNextLevel;

      // ===================== create rooms =====================

      // ========================= grow =========================
      while (roomNo <= this.maxRmThisLevel && (this.LevelNo <= this.mapSize - 4)) {

        console.log("grow mode")
        console.log("LevelNo  " + this.LevelNo + " RoomNo = " + roomNo)
        console.log("this.maxRmThisLevel " + this.maxRmThisLevel)
     
        // create a gap 
        if (roomNo === 1 && this.LevelNo <= this.mapSize / 2.5 && this.showRoomGaps === true) {
          for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--)
            thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "GAP1", ""))
        }
       
        // if room below lvl 3 increase split rate.
        if (this.LevelNo === 1) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "first", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.isSplitBlock = true;
        } else if ((Math.random() > 0.5) && this.LevelNo === 2 || this.maxRmThisLevel < (this.mapSize / 5)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "splithi%", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.isSplitBlock = false;
        } else {

          // detect if max - dont split if room number at 50% of map length  ---  use this to set map max width
          if (this.maxRmThisLevel >= (this.mapSize / 2)) {
            // join - or stay
            if (roomNo >= 3 && Math.random() > 0.5 && this.isJoinBlock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "GrJoin", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              this.maxRmNextLevel -= 1;
              this.isJoinBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo,
                this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "GrMax", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.isJoinBlock = false;
            }

          } else {
            // split - or stay
            if (Math.random() > 0.1 && this.isSplitBlock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "GrSplit", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 2;
              this.maxRmNextLevel += 1;
              this.isSplitBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo,
                this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "GrRoom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.isSplitBlock = false;
            }
          }
        }

        // create a gap last rooms of level 1-3
        if (roomNo - 1 === this.maxRmThisLevel && this.LevelNo <= this.mapSize / 3 && this.showRoomGaps === true) {
          for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--)
            thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "GAP2", ""))
        }
      }

      // ========================= shrink =========================
      while (this.maxRmThisLevel > 0 && (this.LevelNo > this.mapSize - 4)) {

        console.log("shrink mode")
        console.log("LevelNo  " + this.LevelNo + " RoomNo = " + roomNo)
        console.log("this.maxRmThisLevel " + this.maxRmThisLevel)

        let NumGapsAfterL: number = 0;

        // create a gap before first room levels -3 - max level
        if (roomNo === 1 && this.showRoomGaps === true) {
          for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--) {
            thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "GAP3", ""));
            NumGapsAfterL = NumGapsAfterL + 1;
          }
        }

        // join all rooms to final room
        if (this.LevelNo === (this.mapSize - 1)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, 1, 0, "2ndlast", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxRmNextLevel = 1;
          // join
        } else if (Math.random() > 0.6 && roomNo !== 1 && this.isJoinBlock === false) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "ShJoin", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          this.maxRmNextLevel -= 1;
          this.isJoinBlock = true;
        } else {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, 0, "ShRoom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.isJoinBlock = false;
        }

        // create a gap after last rooms of final levels.
        if (this.maxRmThisLevel === 1 && this.LevelNo >= this.mapSize / 2 && this.showRoomGaps === true) {
          for (let i = ((this.mapSize / 4) - roomNo+1); i >= 0; i--){
          console.log("i1 =  "  + i);
            thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "GAP4", ""));
          }
        }

        this.maxRmThisLevel -= 1;

      }
  
      console.log(" ******** the end of level number " + this.LevelNo)
      console.log(this.levelList)
      console.log("this.maxRmThisLevel " + this.maxRmThisLevel)
      console.log("this.roomNo " + roomNo)

      this.LevelNo += 1;
      this.levelList.push(thislevel);



      // for(let i = 0; i <= 5; i++){
      //   console.log("this index =      " + i)
      //         let x = this.rmBlockList.find(number => number === i)
      //         console.log("x =      " + x)
      //         this.rmBlockList.splice(x);
      //         console.log(this.rmBlockList)
      //       }



    }

    console.log("================ end of map draw ================")
    console.log(this.levelList)
    this.makeConnections();
    this.updateMoveOptions();



  }

}
