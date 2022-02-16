using System;
using System.Collections.Generic;

namespace PathCalculator
{

    public class Level
    {

        // attributes
        public int LevelNo;
        public List<room> RoomList;
        public List<string> newList = new List<string>();

        // default constructor
        public Level()
        {
            this.LevelNo = 1;
            // int = 1;
            this.RoomList = new List<room>();
        }

        // custom constructor
        public Level(int _levelNo)
        {
            this.LevelNo = _levelNo;
            // int = _int;
            this.RoomList = new List<room>();
        }

        public List<string> printList()
        {
            foreach (room item in RoomList)
            {
                string x = ($"{item.LevelNo} {item.RoomNo}");
                newList.Add(x);
            }
            return newList;
        }


        //methods
        public void add(room newroom)
        {
            this.RoomList.Add(newroom);
        }

    }
}