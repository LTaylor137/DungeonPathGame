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
  maxRmThisLevel: number | null;
  maxRmNextLevel: number | null;
  splitblock: boolean = false;
  joinBlock: boolean = false;
  crossbackBlock: boolean = false;

  // lvlBlockList: number[] = [];
  levelList: Level[] = [];
  connectionsList: Connection[] = [];
  LeaderLineList: any[] = [];

  showDevInfo: boolean = false;
  showRoomGaps: boolean = false;

  posID: string = "14";
  nextID1: string;
  nextID2: string;


  constructor(@Inject(DOCUMENT) private document) {
  }

  ngOnInit(): void {
  }

  setMapSize() {
    this.mapSize = 12;
  }

  wipeLists() {
    this.levelList.splice(0, this.levelList.length)
    // this.levelList.splice(0, this.lvlBlockList.length)
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
    let x = this.connectionsList.filter(conx => conx.start === this.posID)
    this.nextID1 = x[0].end
    console.log(this.nextID1);
    if (x.length > 1) {
      this.nextID2 = x[1].end
      console.log(this.nextID2);
    }
    console.log(x);
  }

  movePlayer(x) {
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

  // creates a room ID for a room based on level and roomNo.
  createID(LvlNo: number, RmNo: number) {
    let ID: string = ((LvlNo.toString()) + RmNo.toString());
    return ID;
  }

  // this creates a list of all connections between rooms, to be used by leaderline
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
            this.connectionsList.push(X);
            if (Room.nextRoomNoExtr > 0) {
              let Y = new Connection(
                (Room.roomID), ((Room.levelNo + 1).toString()) + (Room.nextRoomNoExtr.toString())
              )
              this.connectionsList.push(Y);
            }
          }
        });
      }
    });
    console.log(this.connectionsList);
    setTimeout(() => { this.generateLeaderLines(); }, 0);
  }

  generateLeaderLines() {
    this.connectionsList.forEach(connex => {
      let line = new LeaderLine(
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.start.toString())),
        LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.end.toString())),
        {
          color: 'black', size: 15, path: "straight",
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

  // this creates random connections between standard rooms to promote more path choices.
  randomJoin(rmNo: number, lvl: number, conxRm1: number, maxRm: number, type: string) {

    let conxRm2 = 0;
    console.log("crossbackBlock = " + this.crossbackBlock);

    switch (type) {

      // case "Smax":
      //   if (Math.random() > 0.8) {
      //     if (this.crossbackBlock === false && rmNo === 1)
      //       conxRm2 = conxRm1 + 1
      //     this.crossbackBlock === true
      //     this.joinBlock === true
      //     return conxRm2;
      //   } else if (this.crossbackBlock === false && rmNo === maxRm) {
      //     conxRm2 = conxRm1 - 1
      //     return conxRm2;
      //   } else if (Math.random() > 0.5) {
      //     if (this.crossbackBlock === false) {
      //       conxRm2 = conxRm1 - 1
      //       this.crossbackBlock === false
      //       return conxRm2;
      //     } else {
      //       this.crossbackBlock === true
      //       this.joinBlock === true
      //       conxRm2 = conxRm1 + 1
      //       return conxRm2;
      //     }
      //   } else {
      //     conxRm2 = 0
      //     return conxRm2;
      //   }

      // case "join":
      //   if (rmNo !== maxRm) {
      //     conxRm2 = rmNo;
      //     this.crossbackBlock = true;
      //     return conxRm2;
      //   } else {
      //     conxRm2 = 0
      //     return conxRm2;
      //   }

      // case "Sroom":
      //   if (Math.random() > 0.8 && rmNo <= (maxRm / 2) && this.crossbackBlock === false) {
      //     conxRm2 = conxRm1 + 1
      //     this.crossbackBlock = true
      //     return conxRm2;
      //   } else if (Math.random() > 0.8 && rmNo > (maxRm / 2) && this.crossbackBlock === false) {
      //     conxRm2 = conxRm1 - 1
      //     this.crossbackBlock = true
      //     return conxRm2;
      //   } else {
      //     conxRm2 = 0
      //     this.crossbackBlock = false
      //     return conxRm2;
      //   }

      default: {
        console.log("default")
        conxRm2 = 0
        return conxRm2;
      }
    }

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

      let thislevel: Level = new Level(this.LevelNo)
      var roomNo: number = 1;
      var ConnectionRoomNo = 1;
      this.maxRmThisLevel = this.maxRmNextLevel;

      // ===================== create rooms =====================
      // ========================= grow =========================
      while (roomNo <= this.maxRmThisLevel && (this.LevelNo <= this.mapSize - 3)) {

        console.log("grow mode")
        console.log("LevelNo  " + this.LevelNo)
        console.log("roomNo  " + roomNo)
        console.log("maxRmThisLevel  " + this.maxRmThisLevel)
        console.log("maxRmNextLevel  " + this.maxRmNextLevel)

        // create a gap 
        if (Math.random() > 0.8 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", 0, 0, ""))
        }

        // if room below lvl 3 increase split rate.
        // if (Math.random() > 0.2 && this.LevelNo <= 2) {
        if (this.LevelNo === 1) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "first",
            ConnectionRoomNo, ConnectionRoomNo + 1, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.splitblock = true;
        } else if ((Math.random() > 0.2) && this.maxRmThisLevel < (this.mapSize / 5)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "splithi%",
            ConnectionRoomNo, ConnectionRoomNo + 1, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.splitblock = true;
        } else {
          // detect if max - dont split if room number at 50% of map length
          // use this to set map max width
          if ((this.maxRmThisLevel >= (this.mapSize / 2))) {
            // join - or stay
            if ((this.LevelNo > this.mapSize / 6) && roomNo !== 1 && Math.random() > 0.8 && this.joinBlock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "join", ConnectionRoomNo - 1,
                this.randomJoin(roomNo, this.LevelNo, ConnectionRoomNo, this.maxRmThisLevel, "join1"), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              this.maxRmNextLevel -= 1;
              this.joinBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Smax", ConnectionRoomNo,
                this.randomJoin(roomNo, this.LevelNo, ConnectionRoomNo, this.maxRmThisLevel, "Smax"), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.joinBlock = false;
            }

          } else {
            // split - or stay
            if (Math.random() > 0.8 && this.splitblock === false) {
              //add gap
              // thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", 0, 0, ""))
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "split",
                ConnectionRoomNo, ConnectionRoomNo + 1, this.createID(this.LevelNo, roomNo)))
                
              roomNo += 1;
              ConnectionRoomNo += 2;
              this.maxRmNextLevel += 1;
              this.splitblock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Sroom", ConnectionRoomNo,
                this.randomJoin(roomNo, this.LevelNo, ConnectionRoomNo, this.maxRmThisLevel, "Sroom"), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.splitblock = false;
            }
          }
        }

      }

      // ========================= shrink =========================
      while (this.maxRmThisLevel > 0 && (this.LevelNo > this.mapSize - 3)) {

        // create a gap
        if (Math.random() > 0.3 && this.showRoomGaps === true) {
          thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", ConnectionRoomNo, 0, ""))
        }

        // console.log("shrink mode")
        // console.log("this.mapSize " + this.mapSize)
        // console.log("LevelNo  " + this.LevelNo)
        // console.log("maxRmThisLevel  " + this.maxRmThisLevel)
        // console.log("maxRmNextLevel  " + this.maxRmNextLevel)

        // join all rooms to final room
        if (this.LevelNo === (this.mapSize - 1)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "2ndlast", 1, 0, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxRmNextLevel = 1;

          //join
        } else if (Math.random() > 0.65 && roomNo !== 1 && this.joinBlock === false) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "join", ConnectionRoomNo - 1,
            this.randomJoin(roomNo, this.LevelNo, ConnectionRoomNo, this.maxRmThisLevel, "join2"), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          this.maxRmNextLevel -= 1;
          this.joinBlock = true;
        } else {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, "Jroom", ConnectionRoomNo, 0, this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.joinBlock = false;
        }
        this.maxRmThisLevel -= 1;


        // this.reduceBlocks(this.LevelNo);

      }

      // ================ end of level ================
      this.levelList.push(thislevel);
      this.LevelNo += 1;

      console.log("================ end of level ================")
      // console.log(this.lvlBlockList)


      console.log("================ end of map draw ================")
      console.log(this.levelList)

    }
    this.makeConnections();
    this.updateMoveOptions();

  }



}




