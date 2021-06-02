import { Injectable } from '@angular/core';
// import { DungeonPathService } from "../services/DungeonPath.service";


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerAttack: number = 1;
  playerHealth: number = 5;

  weapon: string = "fist";
  offhand: string = "wooden buckler";
  helm: string = "none";
  armour: string = "none";

  constructor() { }

  gainHealth(heal: number) {
    console.log("player health a " + this.playerHealth)
    this.playerHealth = (this.playerHealth + heal)
    console.log("player health b " + this.playerHealth)
  }


  get getHealth() {
    return this.playerHealth;
  }


}
