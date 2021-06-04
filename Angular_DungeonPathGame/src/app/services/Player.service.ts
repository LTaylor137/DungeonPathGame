import { Injectable } from '@angular/core';
import { Connection } from '../components/Classes/Connection';
import { RoomEventService } from "../services/RoomEvent.service";
import { Item } from './../components/Classes/Item';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  weapon: Item;
  offhand: Item;
  helm: Item;
  armour: Item;

  playerAttack: number = 1;
  playerHealth: number = 5;
  playerDefence: number = 0;
  playerBlockAmount: number = 0;

  lootList: Item[] = [];

  isBlockActive: boolean = false;

  constructor() { }

  gainHealth(heal: number) {
    console.log("player health a " + this.playerHealth)
    this.playerHealth += heal;
    console.log("player health b " + this.playerHealth)
  }

  takeDamage(dmg: number) {
    if (this.isBlockActive === true) {
      this.playerBlockAmount -= dmg;
      if (this.playerBlockAmount <= 0) {
        if ( (this.playerBlockAmount + this.playerDefence) <= 0 ){
          this.playerHealth += (this.playerBlockAmount + this.playerDefence);
        }
        this.playerBlockAmount = 0;
        this.isBlockActive = false;
      }
    } else if (this.isBlockActive === false) {
      this.playerHealth -= (dmg - this.playerDefence);
    }
  }

  populateLootPool() {

    // weapons
    this.lootList.push(new Item("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Fork", "May be better off using your fists", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Butter Knife", "It's blunt", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Brick", "A brick you found on the floor", 1, 1, 0)),

      // t2
      this.lootList.push(new Item("weapon", "Small Dagger", "weapon", 2, 1, 0)),
      this.lootList.push(new Item("weapon", "Board with a nail in it", "Swing the nail bit at the enemy", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Sword", "A Sword", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Axe", "An Sword", 2, 2, 0)),

      //t3
      this.lootList.push(new Item("weapon", "Sturgeon", "It's very heavy and covered in sharp spikes, who knows how it got in here...", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Great Sword", "A two handed greatsword", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Great Axe", "A two handed greataxe", 3, 4, 0)),

      // armour
      this.lootList.push(new Item("armour", "Potato Sack", "its crap, does not reduce damage at all", 1, 0, 0))
    this.lootList.push(new Item("armour", "Leather", "reduces damage taken by 1", 2, 0, 1))
    this.lootList.push(new Item("armour", "Steel Plate", "its crap", 3, 0, 2))

    // offhands
    this.lootList.push(new Item("offhand", "Wooden Buckler", "small, able to block 1 damage for 1 turn, will stun enemy on successful block", 1, 1, 1))

    // helms
    this.lootList.push(new Item("helm", "Beanie", "keeps you warm, has a pom-pom!", 1, 0, 0))

  }


  assignBasicLoot() {
    this.helm = this.lootList.find(element => element.itemName === "Beanie")
    this.weapon = this.lootList.find(element => element.itemName === "Fist")
    this.armour = this.lootList.find(element => element.itemName === "Potato Sack")
    this.offhand = this.lootList.find(element => element.itemName === "Wooden Buckler")
  }

  takeLoot(itemName) {

    let itemGained: Item = this.lootList.find(obj => {
      return obj.itemName === itemName
    })
    console.log(itemGained);
    if (itemGained.itemType === "weapon") {
      this.weapon = itemGained;
      this.playerAttack = itemGained.itemAttackValue
    }
    if (itemGained.itemType === "offhand") {
      this.offhand = itemGained;
    }
    if (itemGained.itemType === "helm") {
      this.helm = itemGained;
    }
    if (itemGained.itemType === "armour") {
      this.armour = itemGained;
      this.playerDefence = itemGained.itemDefenceValue
    }
  }

  playerBlock() {
    this.isBlockActive = true;
    this.playerBlockAmount += this.offhand.itemDefenceValue;
  }



}
