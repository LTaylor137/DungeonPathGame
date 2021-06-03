import { Injectable } from '@angular/core';
import { Connection } from '../components/Classes/Connection';
import { RoomEventService } from "../services/RoomEvent.service";
import { Item } from './../components/Classes/Item';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerAttack: number = 1;
  playerHealth: number = 5;

  weapon: Item;
  offhand: Item;
  helm: Item;
  armour: Item;

  lootList: Item[] = [];

  constructor() { }

  gainHealth(heal: number) {
    console.log("player health a " + this.playerHealth)
    this.playerHealth += heal;
    console.log("player health b " + this.playerHealth)
  }

  loseHealth(dmg: number) {
    console.log("player health c " + this.playerHealth)
    this.playerHealth -= dmg;
    console.log("player health d " + this.playerHealth)
  }

  populateLootPool() {

    // weapons
    this.lootList.push(new Item("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Fork", "May be better off using your fists", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Butter Knife", "It's quite blunt", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Brick", "A brick you found on the floor", 1, 1, 0)),

      // t2
            this.lootList.push(new Item("weapon", "Small Dagger", "weapon", 2, 1, 0)),
      this.lootList.push(new Item("weapon", "Sturgeon", "It's very heavy and covered in sharp spikes, who knows how it got in here...", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Board with a nail in it", "Swing the nail bit at the enemy", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Sword", "A Sword", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Axe", "An Sword", 2, 2, 0)),

      //t3
      this.lootList.push(new Item("weapon", "Great Sword", "A two handed greatsword", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Great Axe", "A two handed greataxe", 3, 4, 0)),

      // armour
      this.lootList.push(new Item("armour", "Poncho", "its crap", 1, 0, 0))

    // offhands
    this.lootList.push(new Item("offhand", "Wooden Buckler", "small, able to block 1 damage, will stun enemy on successful block", 1, 0, 1))

    // helms
    this.lootList.push(new Item("helm", "Beanie", "keeps you warm, has a pom-pom!", 1, 0, 0))


  }


  assignBasicLoot() {
    this.helm = this.lootList.find(element => element.itemName === "Beanie")
    this.weapon = this.lootList.find(element => element.itemName === "Fist")
    this.armour = this.lootList.find(element => element.itemName === "Poncho")
    this.offhand = this.lootList.find(element => element.itemName === "Wooden Buckler")

  }

}
