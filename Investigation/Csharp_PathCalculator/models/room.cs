using System;
using System.Collections.Generic;

namespace PathCalculator
{
    public class room
    {

        // attributes
        public int LevelNo;
        public int RoomNo;
        public int NextRoomNo;
        public int NextRoomNoExtr;


        // default constructor
        public room()
        {
            this.LevelNo = 1;
            this.RoomNo = 1;
            this.NextRoomNo = 1;
            this.NextRoomNoExtr = 1;
        }

        // custom constructor
        public room(int _LevelNo, int _RoomNo, int _NextRoomNo, int _NextRoomNoExtr)
        {
            this.LevelNo = _LevelNo;
            this.RoomNo = _RoomNo;
            this.NextRoomNo = _NextRoomNo;
            this.NextRoomNoExtr = _NextRoomNoExtr;
        }

        public void printroom()
        {
            System.Console.Write($"L{this.LevelNo}/R{this.RoomNo}  ");
        }

        public string returnroom()
        {
            string combine = ($"{this.LevelNo} {this.RoomNo}");
            return combine;
        }





    }
}