import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Level/Level';
import { Room } from '../components/Room/Room';
import { Connection } from '../components/leaderline/Connection';
import { PlayerService } from '../services/player.service';
import { LeaderLineComponent } from '../components/leaderline/leaderline.component';
// import { resourceLimits } from 'node:worker_threads';

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
  maxThisLevel: number | null;
  maxNextLevel: number | null;
  splitblock: boolean = false;
  joinBlock: boolean = false;

  lvlBlockList: number[] = [];
  levelList: Level[] = [];
  ConnectionsList: Connection[] = [];
  LeaderLineList: any[] = [];

  showDevInfo: boolean = false;
  showRoomGaps: boolean = false;

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
    this.levelList.splice(0, this.lvlBlockList.length)
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

  updateMoveOptions() {
    let x = this.ConnectionsList.filter(conx => conx.start === this.posID)
    this.nextID1 = x[0].end
    console.log(this.nextID1);
    if (x.length > 1) {
      this.nextID2 = x[1].end
      console.log(this.nextID2);
    }
    console.log(x);
  }

  movehere(x) {
    this.posID = x;
    this.nextID1 = "00";
    this.nextID2 = "00";
    this.updateMoveOptions();
  }

  resetPlayer() {
    this.posID = '11';
    this.nextID1 = "21";
    this.nextID2 = "22";
  }

  generateLeaderLines() {
    this.ConnectionsList.forEach(connex => {
      let line = new LeaderLine(
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.start.toString())),
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.end.toString())),
        {
          color: 'black', size: 15, path: "straight",
          startPlug: "behind",
          endPlug: "disc"
          // startSocketGravity: 35,
          // endSocketGravity: 35
          // startSocket: "right", 
          // endSocket: "left",
        }
      );
      this.LeaderLineList.push(line);
    });
  }

  deleteLeaderLines() {
    this.LeaderLineList.forEach(line => {
      line.remove();
      this.LeaderLineList = [];
      this.ConnectionsList = [];
    });
  }

  makeConnections() {
    console.log("connections")
    this.levelList.forEach(element => {
      if (element.levelNo === (this.levelList.length)) {
        // do nothing
      } else {
        element.roomList.forEach(Room => {
          if (Room.roomType !== "gap") {
            let X = new Connection(
              (Room.roomID), ((Room.levelNo + 1).toString()) + (Room.nextRoomNo.toString())
            )
            this.ConnectionsList.push(X);
            if (Room.nextRoomNoExtr > 0) {
              let Y = new Connection(
                (Room.roomID), ((Room.levelNo + 1).toString()) + (Room.nextRoomNoExtr.toString())
              )
              this.ConnectionsList.push(Y);
            }
          }
        });
      }
    });
    console.log(this.ConnectionsList);
    setTimeout(() => { this.generateLeaderLines(); }, 0);
  }

  createID(LvlNo: number, RmNo: number) {
    let ID: string = ((LvlNo.toString()) + RmNo.toString());
    return ID;
  }

  getRandom(rmNo: number, lvl: number, maxRm: number, type: string) {

    let result = 0;
    let amount = 3;
    let exists: boolean = this.lvlBlockList.includes(lvl);
    console.log("this level: " + lvl + " exists in blocklist.")

    // switch(type){
    // case "Smax":

    // break;
    //   //     case "Sroom":
    // take next room1 and add +1

    //   //       // this room can only = its same number, to simulate a left path.
    //   //       if (rmNo === 1 && this.splitblock === false && exists === false) {
    //   //         break;

    //   // case "JRoom":
    //  // this room can only = its same number, to simulate a right path after.
    //   //       if (rmNo === 1 && this.splitblock === false && exists === false) {
    //   //         break;

    //   // case "Smax":
    
    //  // this room can only = its same number, to simulate a right path after.
    //   //       if (rmNo === 1 && this.splitblock === false && exists === false) {
    //   //         break;


    // default:
    // }

    if (rmNo === 1 && this.splitblock === false && exists === false) {
      console.log("this level " + lvl + " allowed and rmno 1 =" + rmNo + " + 1");
      if (Math.random() > .7) {
        result = rmNo + 1;
        for (let i = 1; i < amount; i++) {
          this.lvlBlockList.push(lvl);
        }
      }
    } else if (this.splitblock === true && exists === false) {
      console.log("this level " + lvl + " allowed splitblockwastrue" + rmNo + " - 0");
      if (Math.random() > .6) {
        result = rmNo;
        for (let i = 1; i < amount; i++) {
          this.lvlBlockList.push(lvl);
        }
      }
    } else if (this.splitblock === false && exists === false) {
      console.log("this level " + lvl + " allowed splitblockwastrue" + rmNo + " - 0");
      if (Math.random() > .6) {
        result = rmNo;
        for (let i = 1; i < amount; i++) {
          this.lvlBlockList.push(lvl);
        }
      }
    } else if (rmNo === maxRm && this.splitblock === false && exists === false) {
      console.log("this level " + lvl + " allowed. max room = " + rmNo + " - 1");
      if (Math.random() > .2) {
        result = rmNo - 1;
        for (let i = 1; i < amount; i++) {
          this.lvlBlockList.push(lvl);
        }
      }
    } else if (rmNo >= 2 && rmNo !== maxRm && this.splitblock === false && exists === false) {
      console.log("this level " + lvl + " allowed. middle room = " + rmNo + " - 1");
      if (Math.random() > .1) {
        result = rmNo + 1;
        console.log("middle room = " + rmNo + " + 1");
      } else {
        result = rmNo - 1;
        console.log("middle room = " + rmNo + " - 1");
      }
      for (let i = 1; i < amount; i++) {
        this.lvlBlockList.push(lvl);
      }
    }
    return result;
  }

  // reduceBlocks(lvlNo) {
  //   for (let i = 0; i <= 3; i++) {
  //     this.lvlBlockList.push(3);
  //   }
  //   let found: number = null;

  //   for (let i = 1; i <= this.mapSize; i++) {

  //     if (this.lvlBlockList.find(element => element === lvlNo)){
  //     console.log("i: " + i);
  //     console.log("p: " + this.lvlBlockList.find(p => p === lvlNo));
  //     console.log("found: " + found);
  //   }

  //       console.log("removed index: " + found + " list = " + this.lvlBlockList)
  //       this.lvlBlockList.splice(found, 1);
  //       console.log("after: " + this.lvlBlockList)

  //   }
  // }



  generateMap() {

    this.deleteLeaderLines();
    this.wipeLists();
    this.setMapSize();
    this.LevelNo = 1;
    this.maxThisLevel = 1;
    this.maxNextLevel = 1;

    // ========================= create levels =========================
    while (this.LevelNo <= this.mapSize) {

      let thislevel: Level = new Level(this.LevelNo)
      var roomNo: number = 1;
      var ConnectionRoomNo = 1;
      this.maxThisLevel = this.maxNextLevel;

      // ===================== create rooms =====================
      // ========================= grow =========================
      while (roomNo <= this.maxThisLevel && (this.LevelNo <= this.mapSize - 3)) {

        console.log("grow mode")
        console.log("LevelNo  " + this.LevelNo)
        console.log("roomNo  " + roomNo)
        console.log("maxThisLevel  " + this.maxThisLevel)
        console.log("maxNextLevel  " + this.maxNextLevel)

        // create a gap 
        if (Math.random() > 0.7 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", 0, 0, ""))
        }

        // this room will create first
        if (roomNo === 1 && this.LevelNo === 1) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "first", ConnectionRoomNo,
            ConnectionRoomNo + 1, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxNextLevel = 2;
          break;
        } else {

          // detect if max - dont split if room number at 50% of map length
          if ((this.maxThisLevel >= (this.mapSize / 2))) {
            // join --
            if (roomNo !== 1 && Math.random() > 0.4 && this.joinBlock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "join", ConnectionRoomNo - 1, 0, this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              this.maxNextLevel -= 1;
              this.joinBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Smax",
                ConnectionRoomNo, this.getRandom(roomNo, this.LevelNo, this.maxThisLevel, "Smax"), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.joinBlock = false;
            }
          } else {

            // split - 
            if (Math.random() > 0.2 && this.splitblock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "split",
                ConnectionRoomNo, ConnectionRoomNo + 1, this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 2;
              this.maxNextLevel += 1;
              for (let i = 1; i < 3; i++) {
                this.lvlBlockList.push(this.LevelNo);
              }
              this.splitblock = true;

            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Sroom",
                ConnectionRoomNo, this.getRandom(roomNo, this.LevelNo, this.maxThisLevel, "Sroom"), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.splitblock = false;
            }
          }
        }

        // this.reduceBlocks(this.LevelNo);

      }

      // ========================= shrink =========================
      while (this.maxThisLevel > 0 && (this.LevelNo >= this.mapSize - 2)) {

        // create a gap
        if (Math.random() > 0.7 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", ConnectionRoomNo, 0, ""))
        }

        // console.log("shrink mode")
        // console.log("this.mapSize " + this.mapSize)
        // console.log("LevelNo  " + this.LevelNo)
        // console.log("maxThisLevel  " + this.maxThisLevel)
        // console.log("maxNextLevel  " + this.maxNextLevel)

        // join all rooms to final room
        if (this.LevelNo === (this.mapSize - 1)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "2ndlast", 1, 0, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxNextLevel = 1;

          //join
        } else if (Math.random() > 0.10 && roomNo !== 1 && this.joinBlock === false) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "join", ConnectionRoomNo - 1, 0, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          this.maxNextLevel -= 1;
          this.joinBlock = true;
        } else {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Jroom", ConnectionRoomNo, 0, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.joinBlock = false;
        }
        this.maxThisLevel -= 1;


        // this.reduceBlocks(this.LevelNo);

      }

      // ================ end of level ================
      this.levelList.push(thislevel);
      this.LevelNo += 1;

      console.log("================ end of level ================")
      console.log(this.lvlBlockList)


      console.log("================ end of map draw ================")
      console.log(this.levelList)

    }
    this.makeConnections();
    this.updateMoveOptions();

  }



}




