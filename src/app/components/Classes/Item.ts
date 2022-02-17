
export class Item {
     itemType: string;
     itemName: string;
     itemDescription: string;
     itemTier: number;
     itemAttackValue: number;
     itemDefenceValue: number;

     constructor(
          _itemType: string,
          _itemName: string,
          _itemDescription: string,
          _itemTier: number,
          _itemAttackValue: number,
          _itemDefenceValue: number)
          {
          this.itemType = _itemType;
          this.itemName = _itemName;
          this.itemDescription = _itemDescription;
          this.itemTier = _itemTier;
          this.itemAttackValue = _itemAttackValue;
          this.itemDefenceValue = _itemDefenceValue;
     }

getItemImage(itemName){

     return "assets/images/equipment/" + itemName + ".png"

}


}

