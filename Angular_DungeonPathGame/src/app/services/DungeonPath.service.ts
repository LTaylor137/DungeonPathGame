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
  currentLevel: number | null;

  maxreached: boolean = false;
  tooclosetoMax: boolean = false;
  showDevInfo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setMapSize() {
    this.mapSize = 12;
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
    this.currentLevel = 1;
    this.maxThisLevel = 1;
    this.maxNextLevel = 1;


    //-----------------------create level------------------------
    // grow
    while (this.currentLevel <= this.mapSize / 2) {
      let thislevel: Level = new Level(this.currentLevel)
      var roomNo: number = 1;
      var nextLevelRoom = 1;
      this.maxThisLevel = this.maxNextLevel;

      //-----------------------create rooms------------------------
      while (roomNo <= this.maxThisLevel) {
        // create a gap 
        if (Math.random() > 0.5) {
          thislevel.roomList.push(new Room(this.currentLevel, 0, "gap", nextLevelRoom, 0))
        }
        // this room will create first
        if (roomNo === 1 && this.currentLevel === 1) {
          thislevel.roomList.push(new Room(this.currentLevel, roomNo, "first", nextLevelRoom, nextLevelRoom + 1))
          roomNo += 1;
          nextLevelRoom += 1;
          this.maxNextLevel = 2;
          break;
        } else {
          // dont split if nearing max, but allow for splits on last room.
          if ((this.maxThisLevel >= (this.mapSize / 2))) {
            thislevel.roomList.push(new Room(this.currentLevel, roomNo, "max", nextLevelRoom, 0))
            roomNo += 1;
            nextLevelRoom += 1;
          } else {
            // split - 
            if (Math.random() > 0.75) {
              thislevel.roomList.push(new Room(this.currentLevel, roomNo, "split", nextLevelRoom, nextLevelRoom + 1))
              roomNo += 1;
              nextLevelRoom += 2;
              this.maxNextLevel = this.maxNextLevel + 1;
            } else {
              thislevel.roomList.push(new Room(this.currentLevel, roomNo, "room", nextLevelRoom, 0))
              roomNo += 1;
              nextLevelRoom += 1;
            }
          }
        }
      }
      this.levelList.push(thislevel);
      console.log(this.levelList)
      this.currentLevel += 1;
    }


    // shrink
    if (this.currentLevel > this.mapSize / 2) {
      //   let thislevel: Level = new Level(this.currentLevel)
      //   var roomNo: number = 1;
      //   var nextLevelRoom = 1;
      //   this.maxThisLevel = this.maxNextLevel;

      //-----------------------create rooms------------------------
      // while (roomNo <= this.maxThisLevel) {

      // // create a gap 
      // if (Math.random() > 0.5) {
      //   thislevel.roomList.push(new Room(this.currentLevel, 0, "gap", nextLevelRoom, 0))
      // }
      // // create rooms
      // // this room will create first
      // if (roomNo === 1 && this.currentLevel === 1) {
      //   thislevel.roomList.push(new Room(this.currentLevel, roomNo, "first", nextLevelRoom, nextLevelRoom + 1))
      //   roomNo += 1;
      //   nextLevelRoom += 1;
      //   this.maxNextLevel = 2;
      //   break;
      // } else {
      //   // dont split if nearing max, but allow for splits on last room.
      //   if ((this.maxThisLevel >= (this.mapSize / 2))) {
      //     thislevel.roomList.push(new Room(this.currentLevel, roomNo, "max", nextLevelRoom, 0))
      //     roomNo += 1;
      //     nextLevelRoom += 1;
      //   } else {
      //     // split - 
      //     if (Math.random() > 0.75) {
      //       thislevel.roomList.push(new Room(this.currentLevel, roomNo, "split", nextLevelRoom, nextLevelRoom + 1))
      //       roomNo += 1;
      //       nextLevelRoom += 2;
      //       this.maxNextLevel = this.maxNextLevel + 1;
      //     } else {
      //       thislevel.roomList.push(new Room(this.currentLevel, roomNo, "room", nextLevelRoom, 0))
      // roomNo += 1;
      //       nextLevelRoom += 1;
      //     }
      //   }
      // }




      // this.levelList.push(thislevel);
      console.log(this.levelList)

      //   // this.maxNextLevel = this.maxNextLevel + 1;
      //   this.currentLevel = this.currentLevel + 1;

    }


  }











}



  //       while (this.maxreached == false) // num levels
  //       {


  //     }

  //         // grow =========================================================
  //         while (maxreached == false) // num levels
  //         {
  //             CurrentLevel++;
  //             Level List = new Level(CurrentLevel);
  //             maxroomscurrentlevel = maxroomsofnextlevel;
  //             nextLevelRoom = 1;
  //             if (maxreached == true) // break if 5 or 6
  //             {
  //                 System.Console.WriteLine("break");
  //                 break;
  //             }
  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
  //             {
  //                 if (nextLevelRoom >= MapSize) // check if 5 or 6
  //                 {
  //                     maxreached = true;
  //                     System.Console.WriteLine("maxreached");
  //                 }
  //                 int thisrandom = GetRandom(CurrentLevel);
  //                 if (thisrandom >= 2 && nextLevelRoom < MapSize - 1 && tooclosetoMax == false) // add a room that joins onto 2 of next level. increase next level room count by 1.
  //                 {
  //                     room rm = new room(CurrentLevel, CurrentRoom, nextLevelRoom, (nextLevelRoom + 1));
  //                     maxroomsofnextlevel++;
  //                     nextLevelRoom += 2;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextLevelRoom: {nextLevelRoom}");
  //                     if (maxroomscurrentlevel >= MapSize - 1) {
  //                         tooclosetoMax = true;
  //                         System.Console.WriteLine($"tooclosetoMax {tooclosetoMax}");
  //                     }
  //                 }
  //                 else {
  //                     room rm = new room(CurrentLevel, CurrentRoom, nextLevelRoom, (nextLevelRoom));
  //                     nextLevelRoom += 1;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextLevelRoom: {nextLevelRoom}");
  //                 }
  //             }
  //             MapList.Add(List);
  //         }

  //         //stay===========================================================
  //         for (int x = 1; x <= 1; x++) // num levels
  //         {
  //             CurrentLevel++;
  //             Level List = new Level(CurrentLevel);
  //             maxroomscurrentlevel = maxroomsofnextlevel;
  //             nextLevelRoom = 1;

  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
  //             {
  //                 room rm = new room(CurrentLevel, CurrentRoom, nextLevelRoom, (nextLevelRoom));
  //                 nextLevelRoom += 1;
  //                 List.add(rm);
  //             }
  //             MapList.Add(List);
  //         }

  //         //shrink========================================================
  //         while (maxroomscurrentlevel > 1) {
  //             CurrentLevel++;
  //             Level List = new Level(CurrentLevel);
  //             maxroomscurrentlevel = maxroomsofnextlevel;

  //             System.Console.WriteLine(maxroomscurrentlevel);

  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
  //             {
  //                 int thisrandom = GetRandom(CurrentLevel);
  //                 if (thisrandom >= 3 && CurrentRoom > 1) // add a room that joins onto 2 of next level. increase next level room count by 1.
  //                 {
  //                     room rm = new room(CurrentLevel, CurrentRoom, CurrentRoom - 1, (CurrentRoom - 1));
  //                     maxroomsofnextlevel = CurrentRoom - 1;
  //                     List.add(rm);
  //                 }
  //                 else {
  //                     room rm = new room(CurrentLevel, CurrentRoom, CurrentRoom, (CurrentRoom));
  //                     maxroomsofnextlevel = CurrentRoom;
  //                     List.add(rm);
  //                 }
  //             }
  //             MapList.Add(List);
  //         }
  //         System.Console.WriteLine("end");


  //      static int GetRandom(int takeCurrentLevel) {
  //         Random random = new Random();
  //         int GetRandom = random.Next(0, takeCurrentLevel);
  //         if (takeCurrentLevel == 1) {
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
















