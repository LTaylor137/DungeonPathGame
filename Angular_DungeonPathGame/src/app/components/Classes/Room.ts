
export class Room {
     levelNo: number;
     roomNo: number;
     conxRm1: number;
     conxRm2: number;
     conxType: string;
     roomType: string;
     roomID: string;

     constructor(_levelNo: number, _roomNo: number, _conxRm1: number, _conxRm2: number, _conxType: string, _roomType:string, _roomID: string) 
          
          {
          this.levelNo = _levelNo;
          this.roomNo = _roomNo;
          this.conxRm1 = _conxRm1;
          this.conxRm2 = _conxRm2;
          this.conxType = _conxType;
          this.roomType = _roomType;
          this.roomID = _roomID;
          }

}

