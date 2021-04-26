import { Injectable } from '@angular/core';

import { Level } from '../models/Level';

@Injectable({
  providedIn: 'root'
})

export class DungeonPathService {

  mapSize: number | null;
  maxroomscurrentlevel: number | null;
  maxroomsofnextlevel: number | null;
  currentLevel: number | null;
  nextlevelroom: number | null;
  maxreached: boolean | false;
  tooclosetoMax: boolean | false;
  mapList: Level[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setMapSize() {
    this.mapSize = 5;
  }

  generateMap() {

    while (this.currentLevel != this.mapSize) {
      alert(this.currentLevel);
      this.currentLevel = 1;
    }

  }

  //   PrintTheMap();

  //      void PrintTheMap()
  // {
  //     foreach(var level in this.mapList)
  //     {
  //         int x = level.RoomList.Count;
  //         int y = level.LevelNo;
  //         TheGapBefore(x, y);

  //     }
  //   }

  //     // RoomsAsLists();
  //     OrganicMethod() {


  //       while (this.maxreached == false) // num levels
  //       {


  //     }

  //         // grow =========================================================
  //         while (maxreached == false) // num levels
  //         {
  //             CurrentLevel++;
  //             Level List = new Level(CurrentLevel);
  //             maxroomscurrentlevel = maxroomsofnextlevel;
  //             nextlevelroom = 1;
  //             if (maxreached == true) // break if 5 or 6
  //             {
  //                 System.Console.WriteLine("break");
  //                 break;
  //             }
  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
  //             {
  //                 if (nextlevelroom >= MapSize) // check if 5 or 6
  //                 {
  //                     maxreached = true;
  //                     System.Console.WriteLine("maxreached");
  //                 }
  //                 int thisrandom = GetRandom(CurrentLevel);
  //                 if (thisrandom >= 2 && nextlevelroom < MapSize - 1 && tooclosetoMax == false) // add a room that joins onto 2 of next level. increase next level room count by 1.
  //                 {
  //                     room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom + 1));
  //                     maxroomsofnextlevel++;
  //                     nextlevelroom = nextlevelroom + 2;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextlevelroom: {nextlevelroom}");
  //                     if (maxroomscurrentlevel >= MapSize - 1) {
  //                         tooclosetoMax = true;
  //                         System.Console.WriteLine($"tooclosetoMax {tooclosetoMax}");
  //                     }
  //                 }
  //                 else {
  //                     room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom));
  //                     nextlevelroom = nextlevelroom + 1;
  //                     List.add(rm);
  //                     System.Console.WriteLine($"nextlevelroom: {nextlevelroom}");
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
  //             nextlevelroom = 1;

  //             for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
  //             {
  //                 room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom));
  //                 nextlevelroom = nextlevelroom + 1;
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

}














