import { Injectable } from '@angular/core';

import { Level } from '../components/Level/Level';
import { Room } from '../components/Room/Room';

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

  constructor() { }

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
      var nextLevelRoomNo = 1;
      this.maxThisLevel = this.maxNextLevel;

      // grow
      //-----------------------create rooms------------------------
      while (roomNo <= this.maxThisLevel && (this.currentLevelNo <= this.mapSize / 2)) {

        console.log("grow mode")
        console.log("this.currentLevelNo   = " + this.currentLevelNo)
        console.log("this.mapSize   =  " + this.mapSize)
        console.log("currentLevelNo  " + this.currentLevelNo)
        console.log("maxThisLevel  " + this.maxThisLevel)
        console.log("maxNextLevel  " + this.maxNextLevel)

        // create a gap 
        // if (Math.random() > 0.5) {
        //   thislevel.roomList.push(new Room(this.currentLevelNo, 0, "gap", 0, 0))
        // }
        // this room will create first
        if (roomNo === 1 && this.currentLevelNo === 1) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "first", nextLevelRoomNo, nextLevelRoomNo + 1))
          roomNo += 1;
          nextLevelRoomNo += 1;
          this.maxNextLevel = 2;
          break;
        } else {
          // dont split if nearing max, but allow for splits on last room.
          if ((this.maxThisLevel >= (this.mapSize / 3))) {
            thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "max", nextLevelRoomNo, 0))
            roomNo += 1;
            nextLevelRoomNo += 1;
          } else {
            // split - 
            if (Math.random() > 0.75) {
              thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "split", nextLevelRoomNo, nextLevelRoomNo + 1))
              roomNo += 1;
              nextLevelRoomNo += 2;
              this.maxNextLevel += 1;
            } else {
              thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "room", nextLevelRoomNo, 0))
              roomNo += 1;
              nextLevelRoomNo += 1;
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
        // if (Math.random() > 0.5) {
        //   thislevel.roomList.push(new Room(this.currentLevelNo, 0, "gap", nextLevelRoomNo, 0))
        // }
        console.log("shrink mode")
        console.log("this.mapSize " + this.mapSize / 2)
        console.log("this.currentLevelNo " + this.currentLevelNo)
        console.log("currentLevelNo  " + this.currentLevelNo)
        console.log("maxThisLevel  " + this.maxThisLevel)
        console.log("maxNextLevel  " + this.maxNextLevel)
        

        if (this.currentLevelNo === 6 && roomNo === 1) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "first", nextLevelRoomNo, 0))
          roomNo += 1;
          nextLevelRoomNo += 1;
          this.maxNextLevel += 1;
         }

          //join
        if (Math.random() > 0.50 && roomNo !== 1 && joined === false) {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "join", nextLevelRoomNo - 1, nextLevelRoomNo - 1))
          roomNo += 1;
          // nextLevelRoomNo -= 1;
          this.maxNextLevel -= 1;
          joined = true;
        } else {
          thislevel.roomList.push(new Room(this.currentLevelNo, roomNo, "room", nextLevelRoomNo, 0))
          roomNo += 1;
          nextLevelRoomNo += 1;
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



  //       while (this.maxreached == false) // num levels
  //       {


  //     }

  //         // grow =========================================================
  //         while (maxreached == false) // num levels
  //         {
  //             currentLevelNo++;
  //             Level List = new Level(currentLevelNo);
  //             maxroomscurrentLevelNo = maxroomsofnextlevel;
  //             nextLevelRoomNo = 1;
  //             if (maxreached == true) // break if 5 or 6
  //             {
  //                 System.Console.WriteLine("break");
  //                 break;
  //             }
  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentLevelNo; CurrentRoom++) // num rooms
  //             {
  //                 if (nextLevelRoomNo >= MapSize) // check if 5 or 6
  //                 {
  //                     maxreached = true;
  //                     System.Console.WriteLine("maxreached");
  //                 }
  //                 int thisrandom = GetRandom(currentLevelNo);
  //                 if (thisrandom >= 2 && nextLevelRoomNo < MapSize - 1 && tooclosetoMax == false) // add a room that joins onto 2 of next level. increase next level room count by 1.
  //                 {
  //                     room rm = new room(currentLevelNo, CurrentRoom, nextLevelRoomNo, (nextLevelRoomNo + 1));
  //                     maxroomsofnextlevel++;
  //                     nextLevelRoomNo += 2;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextLevelRoomNo: {nextLevelRoomNo}");
  //                     if (maxroomscurrentLevelNo >= MapSize - 1) {
  //                         tooclosetoMax = true;
  //                         System.Console.WriteLine($"tooclosetoMax {tooclosetoMax}");
  //                     }
  //                 }
  //                 else {
  //                     room rm = new room(currentLevelNo, CurrentRoom, nextLevelRoomNo, (nextLevelRoomNo));
  //                     nextLevelRoomNo += 1;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextLevelRoomNo: {nextLevelRoomNo}");
  //                 }
  //             }
  //             MapList.Add(List);
  //         }

  //         //stay===========================================================
  //         for (int x = 1; x <= 1; x++) // num levels
  //         {
  //             currentLevelNo++;
  //             Level List = new Level(currentLevelNo);
  //             maxroomscurrentLevelNo = maxroomsofnextlevel;
  //             nextLevelRoomNo = 1;

  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentLevelNo; CurrentRoom++) // num rooms
  //             {
  //                 room rm = new room(currentLevelNo, CurrentRoom, nextLevelRoomNo, (nextLevelRoomNo));
  //                 nextLevelRoomNo += 1;
  //                 List.add(rm);
  //             }
  //             MapList.Add(List);
  //         }

  //         //shrink========================================================
  //         while (maxroomscurrentLevelNo > 1) {
  //             currentLevelNo++;
  //             Level List = new Level(currentLevelNo);
  //             maxroomscurrentLevelNo = maxroomsofnextlevel;

  //             System.Console.WriteLine(maxroomscurrentLevelNo);

  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentLevelNo; CurrentRoom++) // num rooms
  //             {
  //                 int thisrandom = GetRandom(currentLevelNo);
  //                 if (thisrandom >= 3 && CurrentRoom > 1) // add a room that joins onto 2 of next level. increase next level room count by 1.
  //                 {
  //                     room rm = new room(currentLevelNo, CurrentRoom, CurrentRoom - 1, (CurrentRoom - 1));
  //                     maxroomsofnextlevel = CurrentRoom - 1;
  //                     List.add(rm);
  //                 }
  //                 else {
  //                     room rm = new room(currentLevelNo, CurrentRoom, CurrentRoom, (CurrentRoom));
  //                     maxroomsofnextlevel = CurrentRoom;
  //                     List.add(rm);
  //                 }
  //             }
  //             MapList.Add(List);
  //         }
  //         System.Console.WriteLine("end");


  //      static int GetRandom(int takecurrentLevelNo) {
  //         Random random = new Random();
  //         int GetRandom = random.Next(0, takecurrentLevelNo);
  //         if (takecurrentLevelNo == 1) {
  //             GetRandom = 2;
  //         }
  //         return GetRandom;
  //     }


  //     // print and end =================================================
  //     PrintTheMap();

  //      void PrintTheMap()
  // {
  //     foreach(var level in MapList)
  //     {
  //         int x = level.RoomList.Count;
  //         int y = level.LevelNo;
  //         TheGapBefore(x, y);

  //         foreach(var room in level.RoomList)
  //         {
  //             if (y >= 10) {
  //                 System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]  ");
  //             }
  //             else {
  //                 System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]   ");
  //             }
  //         }

  //         System.Console.WriteLine();
  //         TheGapBefore(x, 1);

  //         foreach(var room in level.RoomList)
  //         {
  //             System.Console.Write($"[ {room.NextRoomNo}/{room.NextRoomNoExtr} ]   ");
  //         }

  //         System.Console.WriteLine();
  //     }
  // }

  // void TheGapBefore(int x, int y)
  // {
  //     if (y <= 9) {
  //         switch (x) {
  //             case 1:
  //                 System.Console.Write("                    ");
  //                 break;
  //             case 2:
  //                 System.Console.Write("               ");
  //                 break;
  //             case 3:
  //                 System.Console.Write("          ");
  //                 break;
  //             case 4:
  //                 System.Console.Write("     ");
  //                 break;
  //         }
  //     }
  //     else if (y >= 10) {
  //         switch (x) {
  //             case 1:
  //                 System.Console.Write("                    ");
  //                 break;
  //             case 2:
  //                 System.Console.Write("               ");
  //                 break;
  //             case 3:
  //                 System.Console.Write("          ");
  //                 break;
  //             case 4:
  //                 System.Console.Write("     ");
  //                 break;
  //         }
















