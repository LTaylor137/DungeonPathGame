import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Connection } from '../components/Classes/Connection';
import { RoomEventService } from "../services/RoomEvent.service";

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
  splitBlock: boolean = false;
  joinBlock: boolean = true;
  crossbackBlock: boolean = false;
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

  getMapSize(x) {
    this.mapSize = x;
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
    // this.Injector.setRoom();
    this.levelList.forEach(level => {
      level.forEach(level.roomList => {
      
      });
      
    });
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
    // console.log("connections")
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
    // console.log(this.connectionsList);
    setTimeout(() => { this.generateLeaderLines(); }, 0);
  }

  getRoomType() {

    // x = this.l

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

    if (Math.random() > 0.85 &&
      lvl !== (this.mapSize / 2 + 1) &&
      lvl !== (this.mapSize - 1) &&
      lvl !== (this.mapSize)) {
      lvl = 20;
    } else if (Math.random() > 0.9 &&
      lvl !== (this.mapSize / 2 + 1) &&
      lvl !== (this.mapSize - 1) &&
      lvl !== (this.mapSize)) {
      lvl = this.mapSize - 1;
    }

    switch (lvl) {
      case 1:
        return "x";
      case 666:
        return "used";
      case 20:
        return "$";
      case (this.mapSize / 2 + 1):
        return "B";
      case this.mapSize:
        return "FB";
      case this.mapSize - 1:
        return "f";
      default:
        return "m";
    }
  }


  // create random connections between standard rooms to promote more path choices.
  randomJoin(lvl: number, rmNo: number, conxRm1: number, maxRm: number) {

    let newconxRm2: number = 0;

    if (lvl === 6) {
      this.rmBlockList = [];
      return newconxRm2;
    }

    if (this.rmBlockList.includes(rmNo)) {
      console.log("skip this connection " + lvl + rmNo)
    } else if (lvl > 3) {
      // TODO //if Rm = 1 then add a +1 join, and then block a join afterwards.
      if (Math.random() > 0.5 && rmNo === 1) {
        newconxRm2 = conxRm1 + 1;  //    +
        this.rmBlockList.push(rmNo);
        this.crossbackBlock = true;
        this.joinBlock = true;
        return newconxRm2;
        // If Rm = Max then add a -1 join, but only if a +1 was not just added.
      } else if (Math.random() > 0.5 && rmNo === maxRm) {
        if (this.crossbackBlock === false) {
          this.rmBlockList.push(rmNo);
          newconxRm2 = conxRm1 - 1   //    -
          return newconxRm2;
        }
        // if rmNo > 1 && < maxRm, then add a +1 or -1 
      } else if (Math.random() > 0.5 && rmNo > 1 && rmNo < maxRm) {
        if (Math.random() > 0.5) {
          this.rmBlockList.push(rmNo);
          newconxRm2 = conxRm1 + 1   //    +
          this.crossbackBlock = true;
          this.joinBlock = true;
          return newconxRm2;
        } else {
          // if block doesnt exist then create link. if block exists then cancel block. 
          if (this.crossbackBlock === false) {
            this.rmBlockList.push(rmNo);
            newconxRm2 = conxRm1 - 1   //    -
          }
          this.crossbackBlock = false
          return newconxRm2;
        }
      }
    }
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

      let thislevel: Level = new Level(this.LevelNo)
      var roomNo: number = 1;
      var ConnectionRoomNo = 1;
      this.maxRmThisLevel = this.maxRmNextLevel;

      // ===================== create rooms =====================
      // ========================= grow =========================
      while (roomNo <= this.maxRmThisLevel && (this.LevelNo <= this.mapSize - 4)) {

        // console.log("grow mode")
        // console.log("grow mode joinBlock 18 = " + this.joinBlock)
        // console.log("LevelNo  " + this.LevelNo)
        // console.log("roomNo  " + roomNo)
        // console.log("maxRmThisLevel  " + this.maxRmThisLevel)
        // console.log("maxRmNextLevel  " + this.maxRmNextLevel)

        // create a gap 
        if (roomNo === 1 && this.showRoomGaps === true) {
          for (let i = ((this.mapSize / 3) - (this.maxRmThisLevel)); i >= 0; i--)
            thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "", ""))
        }

        // if room below lvl 3 increase split rate.
        if (this.LevelNo === 1) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "first", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.splitBlock = true;
        } else if ((Math.random() > 0.3) && this.LevelNo === 2 || this.maxRmThisLevel < (this.mapSize / 5)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "splithi%", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 2;
          this.maxRmNextLevel += 1;
          this.splitBlock = true;
        } else {

          // detect if max - dont split if room number at 50% of map length
          // use this to set map max width
          if (this.maxRmThisLevel >= (this.mapSize / 2)) {
            // join - or stay
            if ((this.LevelNo > this.mapSize / 6) && roomNo !== 1 && Math.random() > 0.8 && this.joinBlock === false) {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "join1", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              this.maxRmNextLevel -= 1;
              this.joinBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo,
                this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "Smax", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;

            }

          } else {
            // split - or stay
            if (Math.random() > 0.8 && this.splitBlock === false) {
              //add gap
              // thislevel.roomList.push(new Room(this.LevelNo, 0, "gap", 0, 0, ""))
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "split", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))

              roomNo += 1;
              ConnectionRoomNo += 2;
              this.maxRmNextLevel += 1;
              this.splitBlock = true;
            } else {
              thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo,
                this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "Sroom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
              roomNo += 1;
              ConnectionRoomNo += 1;
              this.splitBlock = false;
            }
          }
        }

      }

      // ========================= shrink =========================
      while (this.maxRmThisLevel > 0 && (this.LevelNo > this.mapSize - 4)) {

        // console.log("shrink mode")
        // console.log("this.mapSize " + this.mapSize)
        // console.log("LevelNo  " + this.LevelNo)
        // console.log("maxRmThisLevel  " + this.maxRmThisLevel)
        // console.log("maxRmNextLevel  " + this.maxRmNextLevel)

        // join all rooms to final room
        if (this.LevelNo === (this.mapSize - 1)) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, 1, 0, "2ndlast", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;
          this.maxRmNextLevel = 1;

          //join
        } else if (Math.random() > 0.65 && roomNo !== 1 && this.joinBlock === false) {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "join2", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          this.maxRmNextLevel -= 1;
          this.joinBlock = true;
        } else {
          thislevel.roomList.push(new Room(this.LevelNo, roomNo, ConnectionRoomNo, 0, "Jroom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)))
          roomNo += 1;
          ConnectionRoomNo += 1;

          this.joinBlock = false;
        }
        this.maxRmThisLevel -= 1;
      }

      // create a gap 
      if (roomNo - 1 === this.maxRmThisLevel && this.showRoomGaps === true) {
        for (let i = ((this.mapSize / 3) - (this.maxRmThisLevel)); i >= 0; i--)
          thislevel.roomList.push(new Room(this.LevelNo, 0, 0, 0, "gap", "", ""))
      }

      this.LevelNo += 1;

      console.log("================ end of level ================")
      this.levelList.push(thislevel);
      console.log(this.levelList)

    }
    console.log("================ end of map draw ================")
    console.log(this.levelList)

    this.makeConnections();
    this.updateMoveOptions();

  }



}




