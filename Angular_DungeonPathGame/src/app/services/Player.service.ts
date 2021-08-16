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
  playerAvatar: string = "../../assets/images/avatars/Avatar1.png";

  lootList: Item[] = [];

  isBlockActive: boolean = false;
  isLootTaken: boolean = false;

  healthChange: number;

  constructor() { }

  setAvatar() {
    return "../../assets/images/avatars/Avatar1.png";
  }

  gainHealth(heal: number) {
    // setTimeout(() => {
      let div = document.getElementById('monsterDiv');
      this.playerHealth += heal;
      this.healthChange = heal
    // }, 500);
    setTimeout(() => {
      this.healthChange = 0;
    }, 1500);
  }

  takeDamage(dmg: number) {
    // remove defence amount
      let result = dmg - this.getDefenceValue();
    // if any damage remaining, deduct from player health.
    if (result <= 0) {
      console.log("attack did not break armour")
    } else if (result > 0) {
      console.log("attack did " + result + " damage.")
      this.healthChange = - result;
      setTimeout(() => {
        this.playerHealth = this.playerHealth - result;
    }, 1000);
    }
    this.playerBlockAmount = 0;
    this.isBlockActive = false;
  }

  populateLootPool() {

    //foods
    this.lootList.push(new Item("food", "Painkillers", "You're in a computer game, Max... Heals for 1 health", 0, 0, 1,)),
      this.lootList.push(new Item("food", "Heart Container", "Hey, Listen! Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Mushroom", "Wahoo! Heals for 1 health", 0, 0, 1)),
      this.lootList.push(new Item("food", "Rations", "“Do you think love can bloom, even on a battlefield?” Heals for 1 health", 0, 0, 1)),

      // weapons
      // t1
      this.lootList.push(new Item("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Splade", "Is it a splade, or a spork?", 1, 1, 0)),
      this.lootList.push(new Item("weapon", "Rock", "A rock you found on the floor", 1, 1, 0)),
      // t2
      this.lootList.push(new Item("weapon", "Baseball Bat", "Swing the nail bit at the enemy", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Meat Cleaver", "For cleaving", 2, 2, 0)),
      this.lootList.push(new Item("weapon", "Axe", "A small hatchet", 2, 2, 0)),
      //t3
      this.lootList.push(new Item("weapon", "Marlin", "A very heavy fish, covered in sharp spikes, who knows how it got in here...", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Claymore", "A two handed greatsword", 3, 3, 0)),
      this.lootList.push(new Item("weapon", "Great Axe", "A two handed greataxe", 3, 3, 0)),
      // t4
      this.lootList.push(new Item("weapon", "Lightsaber", "Vrooom!", 4, 4, 0)),

      // armour
      this.lootList.push(new Item("armour", "Potato Sack", "Smells musty", 1, 0, 0))
    this.lootList.push(new Item("armour", "Dinner Shirt", "It's not pink, it's salmon!", 1, 0, 0))
    this.lootList.push(new Item("armour", "Shirtless", "As nature intended", 1, 0, 0))

    this.lootList.push(new Item("armour", "Leather Armour", "Reduces damage taken by 1", 2, 0, 1))
    this.lootList.push(new Item("armour", "Steel Plate", "reduces damage taken by 2", 3, 0, 2))
    this.lootList.push(new Item("armour", "Plot Armour", "50% chance to avoid attacks.", 4, 0, 0))

    // offhands
    this.lootList.push(new Item("offhand", "Wooden Buckler", "small, able to block 1 damage for 1 turn, will stun enemy on successful block", 1, 0, 1))
    this.lootList.push(new Item("offhand", "Tower Shield", "Large Shield, able to block 2 damage for 1 turn, will stun enemy on successful block", 2, 0, 2))
    this.lootList.push(new Item("offhand", "Handgun", "Allows you to shoot first when entering a room", 3, 1, 0))
    this.lootList.push(new Item("offhand", "Torch", "25% chance to dazzle an emeny causing them to miss", 4, 0, 0))

    // helms
    this.lootList.push(new Item("helm", "Beanie", "keeps you warm, has a pom-pom", 1, 0, 0))
    this.lootList.push(new Item("helm", "Plastic Viking Helmet", "It's a bit too small. Made of plastic", 1, 0, 0))
    this.lootList.push(new Item("helm", "Christmas Hat", "It had little flashing lights but the batteries have died", 1, 0, 0))

    this.lootList.push(new Item("helm", "Soup Pot", "It covers your whole skull! Adds +1 Defence", 2, 0, 1))
    this.lootList.push(new Item("helm", "Miners Helmet", "25% chance to dazzle an emeny causing them to miss", 4, 0, 1))

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
    if (this.isBlockActive === true) {
      return this.helm.itemDefenceValue + this.armour.itemDefenceValue + this.offhand.itemDefenceValue;
    } else {
      return this.helm.itemDefenceValue + this.armour.itemDefenceValue;
    }
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

  getColour(tier) {
    switch (tier) {
      case 0:
        return "rgb(131, 214, 98)";
      case 1:
        return "rgb(124, 124, 124)";
      case 2:
        return "rgb(52, 99, 175)";
      case 3:
        return "rgb(175, 163, 52)";
      case 4:
        return "rgb(154, 64, 195)";
    }

  }

}
