


export class Room {
     levelNo: number;
     roomNo: number;
     roomType: string;
     nextRoomNo: number;
     nextRoomNoExtr: number;

     constructor(_LevelNo: number, _RoomNo: number, _RoomType: string, _NextRoomNo: number, _NextRoomNoExtr: number) 
          
          {
          this.levelNo = _LevelNo;
          this.roomNo = _RoomNo;
          this.roomType = _RoomType;
          this.nextRoomNo = _NextRoomNo;
          this.nextRoomNoExtr = _NextRoomNoExtr;
          }

}

