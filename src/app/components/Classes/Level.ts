import { Room } from './Room';

export class Level {
    levelNo: number;
    public roomList: Room[] = [];
    
    constructor(_levelNo: number)
        {
        this.levelNo = _levelNo;
        }
}

