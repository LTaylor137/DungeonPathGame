using System;
using System.Collections.Generic;

namespace PathCalculator
{
    class Program
    {
        static void Main(string[] args)
        {

            // RoomsAsLists();
            OrganicMethod();

            static void OrganicMethod()

            {
                int MapSize = 3;
                int maxroomscurrentlevel = 1;
                int maxroomsofnextlevel = 1;
                int CurrentLevel = 0;
                int nextlevelroom = 1;
                bool maxreached = false;
                bool tooclosetoMax = false;
                List<Level> MapList = new List<Level>();

                // grow =========================================================
                while (maxreached == false) // num levels
                {
                    CurrentLevel++;
                    Level List = new Level(CurrentLevel);
                    maxroomscurrentlevel = maxroomsofnextlevel;
                    nextlevelroom = 1;
                    if (maxreached == true) // break if 5 or 6
                    {
                        System.Console.WriteLine("break");
                        break;
                    }
                    for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
                    {
                        if (nextlevelroom >= MapSize) // check if 5 or 6
                        {
                            maxreached = true;
                            System.Console.WriteLine("maxreached");
                        }
                        int thisrandom = GetRandom(CurrentLevel);
                        if (thisrandom >= 2 && nextlevelroom < MapSize - 1 && tooclosetoMax == false) // add a room that joins onto 2 of next level. increase next level room count by 1.
                        {
                            room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom + 1));
                            maxroomsofnextlevel++;
                            nextlevelroom = nextlevelroom + 2;
                            List.add(rm);
                            System.Console.WriteLine($"nextlevelroom: {nextlevelroom}");
                            if (maxroomscurrentlevel >= MapSize - 1)
                            {
                                tooclosetoMax = true;
                                System.Console.WriteLine($"tooclosetoMax {tooclosetoMax}");
                            }
                        }
                        else
                        {
                            room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom));
                            nextlevelroom = nextlevelroom + 1;
                            List.add(rm);
                            System.Console.WriteLine($"nextlevelroom: {nextlevelroom}");
                        }
                    }
                    MapList.Add(List);
                }

                //stay===========================================================
                for (int x = 1; x <= 1; x++) // num levels
                {
                    CurrentLevel++;
                    Level List = new Level(CurrentLevel);
                    maxroomscurrentlevel = maxroomsofnextlevel;
                    nextlevelroom = 1;

                    for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
                    {
                        room rm = new room(CurrentLevel, CurrentRoom, nextlevelroom, (nextlevelroom));
                        nextlevelroom = nextlevelroom + 1;
                        List.add(rm);
                    }
                    MapList.Add(List);
                }

                //shrink========================================================
                while (maxroomscurrentlevel > 1)
                {
                    CurrentLevel++;
                    Level List = new Level(CurrentLevel);
                    maxroomscurrentlevel = maxroomsofnextlevel;

                    System.Console.WriteLine(maxroomscurrentlevel);

                    for (int CurrentRoom = 1; CurrentRoom <= maxroomscurrentlevel; CurrentRoom++) // num rooms
                    {
                        int thisrandom = GetRandom(CurrentLevel);
                        if (thisrandom >= 3 && CurrentRoom > 1) // add a room that joins onto 2 of next level. increase next level room count by 1.
                        {
                            room rm = new room(CurrentLevel, CurrentRoom, CurrentRoom - 1, (CurrentRoom - 1));
                            maxroomsofnextlevel = CurrentRoom - 1;
                            List.add(rm);
                        }
                        else
                        {
                            room rm = new room(CurrentLevel, CurrentRoom, CurrentRoom, (CurrentRoom));
                            maxroomsofnextlevel = CurrentRoom;
                            List.add(rm);
                        }
                    }
                    MapList.Add(List);
                }
                System.Console.WriteLine("end");


                static int GetRandom(int takeCurrentLevel)
                {
                    Random random = new Random();
                    int GetRandom = random.Next(0, takeCurrentLevel);
                    if (takeCurrentLevel == 1)
                    {
                        GetRandom = 2;
                    }
                    return GetRandom;
                }


                // print and end =================================================
                PrintTheMap();

                void PrintTheMap()
                {
                    foreach (var level in MapList)
                    {
                        int x = level.RoomList.Count;
                        int y = level.LevelNo;
                        TheGapBefore(x, y);

                        foreach (var room in level.RoomList)
                        {
                            if (y >= 10)
                            {
                                System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]  ");
                            }
                            else
                            {
                                System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]   ");
                            }
                        }

                        System.Console.WriteLine();
                        TheGapBefore(x, 1);

                        foreach (var room in level.RoomList)
                        {
                            System.Console.Write($"[ {room.NextRoomNo}/{room.NextRoomNoExtr} ]   ");
                        }

                        System.Console.WriteLine();
                    }
                }

                void TheGapBefore(int x, int y)
                {
                    if (y <= 9)
                    {
                        switch (x)
                        {
                            case 1:
                                System.Console.Write("                    ");
                                break;
                            case 2:
                                System.Console.Write("               ");
                                break;
                            case 3:
                                System.Console.Write("          ");
                                break;
                            case 4:
                                System.Console.Write("     ");
                                break;
                        }
                    }
                    else if (y >= 10)
                    {
                        switch (x)
                        {
                            case 1:
                                System.Console.Write("                    ");
                                break;
                            case 2:
                                System.Console.Write("               ");
                                break;
                            case 3:
                                System.Console.Write("          ");
                                break;
                            case 4:
                                System.Console.Write("     ");
                                break;
                        }

                    }
                }



            }


            //     static void RoomsAsLists()

            //     {
            //         int MapSize = 5;
            //         int LevelNoCount = 0;
            //         int RoomNoCount;
            //         int shrink = MapSize;
            //         // Map Map = new Map(List);sa);
            //         List<Level> MapList = new List<Level>();

            //         int NextRoomNoExtr(int passedRmNo)
            //         {
            //             int CurRmNo = passedRmNo;
            //             Random random = new Random();
            //             int[] range = { -1, 0, 0, 0, 1 };
            //             int NextRoomNoExtr = range[random.Next(0, range.Length)] + CurRmNo;
            //             if (NextRoomNoExtr <= 0 || NextRoomNoExtr == CurRmNo || NextRoomNoExtr >= 5)
            //             {
            //                 NextRoomNoExtr = 0;
            //             }
            //             return NextRoomNoExtr;
            //         }

            //         int NextRoomMinus(int passedRmNo)
            //         {
            //             int CurRmNo = passedRmNo;
            //             Random random = new Random();
            //             int[] range = { -1, 0, 0, 0 };
            //             int NextRoomNoExtr = range[random.Next(0, range.Length)] + CurRmNo;
            //             if (NextRoomNoExtr <= 0 || NextRoomNoExtr == CurRmNo || NextRoomNoExtr >= 5)
            //             {
            //                 NextRoomNoExtr = 0;
            //             }
            //             return NextRoomNoExtr;
            //         }

            //         //grow from 1 to 5
            //         for (int a = 1; a <= MapSize - 1; a++) // num levels
            //         {
            //             RoomNoCount = 0;
            //             LevelNoCount++;
            //             Level List = new Level(LevelNoCount);
            //             Random random = new Random();
            //             int SplitStartOrEnd = random.Next(1, 3);

            //             for (int room = 1; room <= LevelNoCount; room++) // num rooms
            //             {
            //                 RoomNoCount++;

            //                 if (SplitStartOrEnd == 1)
            //                 {
            //                     if (room == 1)
            //                     {
            //                         room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, (RoomNoCount + 1));
            //                         List.add(rm);

            //                     }
            //                     else
            //                     {
            //                         room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount + 1, 0);
            //                         List.add(rm);

            //                     }
            //                 }
            //                 else if (SplitStartOrEnd == 2)
            //                 {
            //                     if (RoomNoCount == LevelNoCount)
            //                     {
            //                         room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, (RoomNoCount + 1));
            //                         List.add(rm);
            //                     }
            //                     else
            //                     {
            //                         room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, 0);
            //                         List.add(rm);
            //                     }
            //                 }
            //             }
            //             MapList.Add(List);
            //         }

            //         //stay at 5
            //         for (int a = 1; a <= MapSize - 1; a++) // num levels
            //         {
            //             RoomNoCount = 0;
            //             LevelNoCount++;

            //             Level List = new Level(LevelNoCount);


            //             for (int b = 1; b <= MapSize; b++) // num rooms
            //             {
            //                 RoomNoCount++;
            //                 room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, (NextRoomNoExtr(RoomNoCount)));

            //                 List.add(rm);
            //             }
            //             MapList.Add(List);
            //         }

            //         //shrink to 1
            //         for (int a = 1; a <= MapSize; a++) // num levels
            //         {
            //             shrink--;
            //             RoomNoCount = 0;
            //             LevelNoCount++;
            //             Level List = new Level(LevelNoCount);

            //             for (int room = shrink; room >= 0; room--) // num rooms
            //             {
            //                 RoomNoCount++;
            //                 if (RoomNoCount == 1)
            //                 {
            //                     room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, 0);
            //                     List.add(rm);
            //                 }
            //                 else if (RoomNoCount == shrink + 1)
            //                 {
            //                     room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount - 1, 0);
            //                     List.add(rm);
            //                 }
            //                 else
            //                 {
            //                     room rm = new room(LevelNoCount, RoomNoCount, RoomNoCount, (NextRoomMinus(RoomNoCount)));
            //                     List.add(rm);
            //                 }
            //             }
            //             MapList.Add(List);
            //         }

            //         PrintTheMap();

            //         void PrintTheMap()
            //         {
            //             foreach (var level in MapList)
            //             {
            //                 int x = level.RoomList.Count;
            //                 int y = level.LevelNo;
            //                 TheGapBefore(x, y);

            //                 foreach (var room in level.RoomList)
            //                 {
            //                     if (y >= 10)
            //                     {
            //                         System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]  ");
            //                     }
            //                     else
            //                     {
            //                         System.Console.Write($"[L{room.LevelNo}/R{room.RoomNo}]   ");
            //                     }
            //                 }

            //                 System.Console.WriteLine();
            //                 TheGapBefore(x, 1);

            //                 foreach (var room in level.RoomList)
            //                 {
            //                     System.Console.Write($"[ {room.NextRoomNo}/{room.NextRoomNoExtr} ]   ");
            //                 }

            //                 System.Console.WriteLine();
            //             }
            //         }

            //         void TheGapBefore(int x, int y)
            //         {
            //             if (y <= 9)
            //             {
            //                 switch (x)
            //                 {
            //                     case 1:
            //                         System.Console.Write("                    ");
            //                         break;
            //                     case 2:
            //                         System.Console.Write("               ");
            //                         break;
            //                     case 3:
            //                         System.Console.Write("          ");
            //                         break;
            //                     case 4:
            //                         System.Console.Write("     ");
            //                         break;
            //                 }
            //             }
            //             else if (y >= 10)
            //             {
            //                 switch (x)
            //                 {
            //                     case 1:
            //                         System.Console.Write("                    ");
            //                         break;
            //                     case 2:
            //                         System.Console.Write("               ");
            //                         break;
            //                     case 3:
            //                         System.Console.Write("          ");
            //                         break;
            //                     case 4:
            //                         System.Console.Write("     ");
            //                         break;
            //                 }

            //             }
            //         }

            //     }

            //     // end
            // }
        }
    }
}
