import { Room } from './Room';

export class Level {
    levelNo: number;
    level: Room[];

    
    constructor(_levelNo: number, _level: Room[]) 
        
        {
        this.levelNo = _levelNo;
        }

}

