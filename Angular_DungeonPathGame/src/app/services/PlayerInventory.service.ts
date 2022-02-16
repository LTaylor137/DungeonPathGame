import { Injectable } from '@angular/core';
import { Connection } from '../components/Classes/Connection';
import { RoomEventService } from "./RoomEvent.service";
import { Item } from '../components/Classes/Item';

@Injectable({
  providedIn: 'root'
})
export class PlayerInventoryService {

  weapon: Item;
  offhand: Item;
  helm: Item;
  armour: Item;

  playerHealth: number = 5;
  playerDefence: number = 0;
  playerBlockAmount: number = 0;
  playerAvatar: string = "../../assets/images/avatars/Avatar1.png";

  isGodmodeOn: boolean = false;
  isPlayerDead: boolean = false;
  isPlayerWon: boolean = false;

  lootPool: Item[] = [];

  constructor() { }

  populateLootPool() {

    //foods
    this.lootPool.push(new Item("food", "Painkillers", "You are in a computer game, Max.", 0, 0, 1,)),
      this.lootPool.push(new Item("food", "Heart Container", "Hey, Listen!", 0, 0, 1)),
      this.lootPool.push(new Item("food", "Mushroom", "Wahoo!", 0, 0, 1)),
      this.lootPool.push(new Item("food", "Rations", "Do you think love can bloom, even on a battlefield?", 0, 0, 1)),

      // weapons
      // t1
      this.lootPool.push(new Item("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
      this.lootPool.push(new Item("weapon", "Bottle", "An empty beer bottle", 1, 1, 0)),
      this.lootPool.push(new Item("weapon", "Rock", "A rock you found on the floor", 1, 1, 0)),
      // t2
      this.lootPool.push(new Item("weapon", "Baseball Bat", "Swing the nail bit at the enemy", 2, 2, 0)),
      this.lootPool.push(new Item("weapon", "Meat Cleaver", "For cleaving", 2, 2, 0)),
      this.lootPool.push(new Item("weapon", "Hatchet", "A small hatchet", 2, 2, 0)),
      //t3
      this.lootPool.push(new Item("weapon", "Swordfish", "How did this get in here?", 3, 3, 0)),
      this.lootPool.push(new Item("weapon", "Claymore", "A two handed greatsword", 3, 3, 0)),
      // this.lootPool.push(new Item("weapon", "Great Axe", "A two handed greataxe", 3, 3, 0)),
      // t4
      this.lootPool.push(new Item("weapon", "Lightsaber", "Has a 25% chance to decapitate. Vrooom!", 4, 3, 0)),

      // armour
      this.lootPool.push(new Item("armour", "Potato Sack", "Smells musty", 1, 0, 0)),
      this.lootPool.push(new Item("armour", "Dinner Shirt", "It's not pink, it's salmon!", 1, 0, 0)),
      this.lootPool.push(new Item("armour", "Shirtless", "As nature intended", 1, 0, 0)),

      this.lootPool.push(new Item("armour", "Leather Armour", "Reduces damage taken by 1", 2, 0, 1)),
      this.lootPool.push(new Item("armour", "Steel Plate", "reduces damage taken by 2", 3, 0, 2)),
      this.lootPool.push(new Item("armour", "Plot Armour", "50% chance to avoid attacks.", 4, 0, 0)),

      // offhands
      this.lootPool.push(new Item("offhand", "Wooden Buckler", "A small buckler that blocks 1 damage and stuns enemies on a successful block", 1, 0, 1)),
      this.lootPool.push(new Item("offhand", "Tower Shield", "A large shield that blocks 2 damage and stuns enemies on a successful block", 2, 0, 2)),

      this.lootPool.push(new Item("offhand", "Handgun", "Allows you to shoot first when entering a room", 4, 0, 0)),
      this.lootPool.push(new Item("offhand", "Torch", "25% chance to dazzle an emeny causing them to miss", 4, 0, 0)),

      // helms
      this.lootPool.push(new Item("helm", "Beanie", "keeps you warm, has a pom-pom", 1, 0, 0)),
      this.lootPool.push(new Item("helm", "Plastic Viking Helmet", "It's a bit too small. Made of plastic", 1, 0, 0)),
      this.lootPool.push(new Item("helm", "Christmas Hat", "It had little flashing lights but the batteries have died", 1, 0, 0)),

      this.lootPool.push(new Item("helm", "Soup Pot", "It covers your whole skull! Adds +1 Defence", 2, 0, 1)),
      this.lootPool.push(new Item("helm", "Miners Helmet", "25% chance to dazzle an emeny causing them to miss", 4, 0, 1))

  }

  getItemColour(tier) {
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

  assignBasicLoot() {
    let t1Weps: Item[] = this.lootPool.filter(element => element.itemType === "weapon" && element.itemTier === 1);
    let randomW = Math.floor(Math.random() * t1Weps.length);
    this.weapon = (t1Weps[randomW])
    // this.weapon = this.lootPool.find(element => element.itemName === "Lightsaber")
    let t1Helms: Item[] = this.lootPool.filter(element => element.itemType === "helm" && element.itemTier === 1);
    let randomH = Math.floor(Math.random() * t1Helms.length);
    this.helm = (t1Helms[randomH])
    let t1Armour: Item[] = this.lootPool.filter(element => element.itemType === "armour" && element.itemTier === 1);
    let randomA = Math.floor(Math.random() * t1Armour.length);
    this.armour = (t1Armour[randomA])
    this.offhand = this.lootPool.find(element => element.itemName === "Wooden Buckler")
    // this.offhand = this.lootPool.find(element => element.itemName === "Handgun")
  }

  gainHealth(heal: number) {
    setTimeout(() => {
      this.playerHealth += heal;
    }, 750);
  }

  takeDamage(damageDealt: number) {
    if (damageDealt >= this.playerHealth) {
      this.playerHealth = this.playerHealth - damageDealt;
    } else {
      setTimeout(() => {
        this.playerHealth = this.playerHealth - damageDealt;
      }, 1000);
    }
  }

  getPlayerAvoidChance() {
    let result: number = 0;
    if (this.offhand.itemName == "Torch") {
      result += .25
    }
    if (this.helm.itemName == "Miners Helmet") {
      result += .25
    }
    if (this.armour.itemName == "Plot Armour") {
      result += .5
    }
    return result;
  }

}
