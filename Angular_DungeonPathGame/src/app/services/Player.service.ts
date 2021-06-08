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
  // playerDefence: number = 0;
  playerBlockAmount: number = 0;

  lootList: Item[] = [];

  isBlockActive: boolean = false;
  isLootTaken: boolean = false;

  healthChange: number;

  constructor() { }

  gainHealth(heal: number) {
    setTimeout(() => {
      let div = document.getElementById('monsterDiv');
      this.playerHealth += heal;
      this.healthChange = heal
    }, 500);
    setTimeout(() => {
      this.healthChange = 0;
    }, 1000);
  }

  takeDamage(dmg: number) {
    let result = dmg;
    // remove block amount
    if (this.isBlockActive === true) {
      result = result - this.playerBlockAmount;
    }
    // remove defence amount
    if (result <= 0) {
      console.log("attack did not break block")
    } else if (result > 0) {
      result = result - this.getDefenceValue();
    }
    // if any damage remaining, deduct from player health.
    if (result <= 0) {
      console.log("attack did not break armour")
    } else if (result > 0) {
      this.playerHealth = this.playerHealth - result;
      console.log("attack did " + result + " damage.")
      this.healthChange = - result;
    }
    this.playerBlockAmount = 0;
    this.isBlockActive = false;
  }

  populateLootPool() {

    //foods
    this.lootList.push(new Item("food", "Painkillers", "You're in a computer game, Max... Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Heart Container", "Hey, Listen! Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Mushroom", "Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Phoenix Down", "Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Rations", "“Do you think love can bloom, even on a battlefield?” Heals for 1 health", 0, 0, 1)),

      // weapons
      this.lootList.push(new Item("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Splade", "Is it splade, or spork?", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Rock", "A rock you found on the floor", 1, 1, 0)),

      // t2
      this.lootList.push(new Item("weapon", "Board with a nail in it", "Swing the nail bit at the enemy", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Meat Cleaver", "A Sword", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Axe", "An Sword", 2, 2, 0)),

      //t3
      this.lootList.push(new Item("weapon", "Sturgeon", "It's very heavy and covered in sharp spikes, who knows how it got in here...", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Bastard Sword", "A two handed greatsword", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Light Sabre", "A two handed greataxe", 3, 4, 0)),

      // armour
      this.lootList.push(new Item("armour", "Potato Sack", "Smells musty", 1, 0, 0))
      this.lootList.push(new Item("armour", "Dinner Shirt", "It's not pink, it's salmon!", 1, 0, 0))
      this.lootList.push(new Item("armour", "No Armour", "As nature intended", 1, 0, 0))

    this.lootList.push(new Item("armour", "Leather", "Reduces damage taken by 1", 2, 0, 1))
    this.lootList.push(new Item("armour", "Steel Plate", "reduces damage taken by 2", 3, 0, 2))
    this.lootList.push(new Item("armour", "Plot Armour", "50% chance to avoid attacks.", 3, 0, 0))

    // offhands
    this.lootList.push(new Item("offhand", "Wooden Buckler", "small, able to block 1 damage for 1 turn, will stun enemy on successful block", 1, 0, 1))
    this.lootList.push(new Item("offhand", "Tower Shield", "Large Shield, able to block 2 damage for 1 turn, will stun enemy on successful block", 2, 0, 2))
    this.lootList.push(new Item("offhand", "Handgun", "Allows you to shoot first when entering a room", 3, 1, 0))
    this.lootList.push(new Item("offhand", "MagLite", "25% chance to dazzle an emeny causing them to miss", 3, 0, 0))

    // helms
    this.lootList.push(new Item("helm", "Beanie", "keeps you warm, has a pom-pom!", 1, 0, 0))
    this.lootList.push(new Item("helm", "Novelty Viking Helmet", "It's a bit too small. Made of plastic", 1, 0, 0))
    this.lootList.push(new Item("helm", "Christmas hat", "It had little flashing lights but the batteries have died", 1, 0, 0))

    this.lootList.push(new Item("helm", "Soup Pot", "It covers your whole skull! Adds +1 Defence", 2, 0, 1))
    this.lootList.push(new Item("helm", "Miner's Hat", "25% chance to dazzle an emeny causing them to miss", 3, 0, 0))

  }

  assignBasicLoot() {

    let t1Weps: Item[] = this.lootList.filter(element => element.itemType === "weapon" && element.itemTier === 1);
    let randomW = Math.floor(Math.random() * t1Weps.length);
    this.weapon = (t1Weps[randomW])

    let t1Helms: Item[] = this.lootList.filter(element => element.itemType === "helm" && element.itemTier === 1);
    let randomH = Math.floor(Math.random() * t1Helms.length);
    this.helm = (t1Helms[randomH])

    let t1Armour: Item[] = this.lootList.filter(element => element.itemType === "armour" && element.itemTier === 1);
    let randomA = Math.floor(Math.random() * t1Armour.length);
    this.armour = (t1Armour[randomA])

    this.offhand = this.lootList.find(element => element.itemName === "Wooden Buckler")
  }

  getDefenceValue() {
    return this.helm.itemDefenceValue + this.armour.itemDefenceValue;
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
      if (itemGained.itemAttackValue > 0) {
        this.playerAttack = itemGained.itemAttackValue
      }
    }
    if (itemGained.itemType === "helm") {
      this.helm = itemGained;
      this.getDefenceValue();
      // this.playerDefence += itemGained.itemDefenceValue
    }
    if (itemGained.itemType === "armour") {
      this.armour = itemGained;
      this.getDefenceValue();
      // this.playerDefence += itemGained.itemDefenceValue
    }
    if (itemGained.itemType === "food") {
      this.gainHealth(itemGained.itemDefenceValue);
    }

    this.isLootTaken = true;

  }

}
