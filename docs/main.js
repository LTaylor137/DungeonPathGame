(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lach\Desktop\Personal Projects\DungeonPathGame\src\main.ts */"zUnb");


/***/ }),

/***/ "2vLA":
/*!********************************************!*\
  !*** ./src/app/components/Classes/Item.ts ***!
  \********************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
    constructor(_itemType, _itemName, _itemDescription, _itemTier, _itemAttackValue, _itemDefenceValue) {
        this.itemType = _itemType;
        this.itemName = _itemName;
        this.itemDescription = _itemDescription;
        this.itemTier = _itemTier;
        this.itemAttackValue = _itemAttackValue;
        this.itemDefenceValue = _itemDefenceValue;
    }
    getItemImage(itemName) {
        return "assets/images/equipment/" + itemName + ".png";
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BUDA":
/*!*********************************************!*\
  !*** ./src/app/components/Classes/Level.ts ***!
  \*********************************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
class Level {
    constructor(_levelNo) {
        this.roomList = [];
        this.levelNo = _levelNo;
    }
}


/***/ }),

/***/ "JdIT":
/*!***************************************************************!*\
  !*** ./src/app/components/room-event/room-event.component.ts ***!
  \***************************************************************/
/*! exports provided: RoomEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomEventComponent", function() { return RoomEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/PlayerInventory.service */ "uZrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RoomEventComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.RoomEventService.roomType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" currentLevel = ", ctx_r0.RoomEventService.currentLevel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" currentRoom = ", ctx_r0.RoomEventService.currentRoom, " ");
} }
function RoomEventComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Player Turn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Monster Turn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.Offhand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack Value: ", ctx_r4.PlayerInventoryService.offhand.itemAttackValue, "");
} }
function RoomEventComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defence Value: ", ctx_r5.PlayerInventoryService.offhand.itemDefenceValue, "");
} }
function RoomEventComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.Attack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Blocking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Avoided Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Resting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r10.PlayerInventoryService.playerAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 47);
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r26.PlayerInventoryService.playerAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r27.PlayerInventoryService.playerAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r28.PlayerInventoryService.playerAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 50);
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx_r29.PlayerInventoryService.offhand.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 51);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx_r30.PlayerInventoryService.weapon.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx_r31.PlayerInventoryService.weapon.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
} }
function RoomEventComponent_div_67_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
} }
function RoomEventComponent_div_67_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx_r34.PlayerInventoryService.offhand.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomEventComponent_div_67_img_2_Template, 1, 1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomEventComponent_div_67_img_3_Template, 1, 1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomEventComponent_div_67_img_4_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_67_img_6_Template, 1, 1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_div_67_img_7_Template, 1, 1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomEventComponent_div_67_img_8_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomEventComponent_div_67_img_9_Template, 1, 0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomEventComponent_div_67_img_10_Template, 1, 0, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoomEventComponent_div_67_img_11_Template, 1, 1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerAttacking === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerAttacking === false && ctx_r11.RoomEventService.isAttackAvoided === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerAttacking === false && ctx_r11.RoomEventService.isAttackAvoided === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerBlocking === true && ctx_r11.RoomEventService.isPlayerAttacking === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerAttacking === true && ctx_r11.PlayerInventoryService.weapon.itemTier < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerAttacking === true && ctx_r11.PlayerInventoryService.weapon.itemTier >= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isDamageNegated === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isPlayerTakeDamage === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.RoomEventService.isHandgunInUse === true);
} }
function RoomEventComponent_div_68_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stunned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_68_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r41.RoomEventService.roomImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_68_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 63);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.RoomEventService.roomImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_68_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 64);
} }
function RoomEventComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomEventComponent_div_68_div_1_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomEventComponent_div_68_div_1_img_4_Template, 1, 1, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomEventComponent_div_68_div_1_img_5_Template, 1, 1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_68_div_1_img_6_Template, 1, 0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.RoomEventService.isMonsterStunned === true && ctx_r35.RoomEventService.monsterHealthValue > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.RoomEventService.isMonsterAttacking === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.RoomEventService.isMonsterAttacking === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.RoomEventService.isMonsterAttacking === true);
} }
function RoomEventComponent_div_68_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 65);
} }
function RoomEventComponent_div_68_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 66);
} }
function RoomEventComponent_div_68_div_5_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_68_div_5_div_3_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack Value: ", loot_r45.itemAttackValue, "");
} }
function RoomEventComponent_div_68_div_5_div_3_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defence Value: ", loot_r45.itemDefenceValue, "");
} }
function RoomEventComponent_div_68_div_5_div_3_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Heals 1 Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_68_div_5_div_3_div_12_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.PlayerInventoryService.helm.itemName);
} }
function RoomEventComponent_div_68_div_5_div_3_div_12_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.PlayerInventoryService.armour.itemName);
} }
function RoomEventComponent_div_68_div_5_div_3_div_12_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.PlayerInventoryService.offhand.itemName);
} }
function RoomEventComponent_div_68_div_5_div_3_div_12_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.PlayerInventoryService.weapon.itemName);
} }
function RoomEventComponent_div_68_div_5_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomEventComponent_div_68_div_5_div_3_div_12_a_5_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_68_div_5_div_3_div_12_a_6_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_div_68_div_5_div_3_div_12_a_7_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomEventComponent_div_68_div_5_div_3_div_12_a_8_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "helm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "armour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "offhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "weapon");
} }
function RoomEventComponent_div_68_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_div_68_div_5_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const loot_r45 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.takeLoot(loot_r45.itemName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_68_div_5_div_3_div_6_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_div_68_div_5_div_3_a_7_Template, 3, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomEventComponent_div_68_div_5_div_3_a_8_Template, 3, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomEventComponent_div_68_div_5_div_3_a_9_Template, 3, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RoomEventComponent_div_68_div_5_div_3_div_12_Template, 9, 4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r45 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r44.PlayerInventoryService.getItemColour(loot_r45.itemTier));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", loot_r45.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loot_r45.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemAttackValue === 0 && loot_r45.itemDefenceValue === 0 || loot_r45.itemName === "Wooden Buckler" || loot_r45.itemName === "Tower Shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemAttackValue > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "armour" || loot_r45.itemType === "helm" || loot_r45.itemName === "shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType === "food");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", loot_r45.itemDescription, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r45.itemType != "food");
} }
function RoomEventComponent_div_68_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomEventComponent_div_68_div_5_div_3_Template, 13, 10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_div_68_div_5_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.DungeonPathService.toggleDungeonPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " take nothing and leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.RoomEventService.roomLootList);
} }
function RoomEventComponent_div_68_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r39.RoomEventService.roomImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function RoomEventComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomEventComponent_div_68_div_1_Template, 7, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomEventComponent_div_68_img_2_Template, 1, 0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomEventComponent_div_68_img_3_Template, 1, 0, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomEventComponent_div_68_div_5_Template, 7, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_68_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.RoomEventService.monsterHealthValue > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.RoomEventService.isMonsterTakeDamage === true && ctx_r12.PlayerInventoryService.weapon.itemName != "Lightsaber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.RoomEventService.isMonsterTakeDamage === true && ctx_r12.PlayerInventoryService.weapon.itemName === "Lightsaber" && ctx_r12.RoomEventService.isPlayerTurn === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.RoomEventService.monsterHealthValue <= 0 && ctx_r12.RoomEventService.isLootTaken === false && ctx_r12.RoomEventService.roomType != "finalboss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.RoomEventService.monsterHealthValue <= 0);
} }
function RoomEventComponent_div_69_div_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_69_div_2_div_2_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack Value: ", loot_r65.itemAttackValue, "");
} }
function RoomEventComponent_div_69_div_2_div_2_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defence Value: ", loot_r65.itemDefenceValue, "");
} }
function RoomEventComponent_div_69_div_2_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Heals 1 Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_69_div_2_div_2_div_12_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.PlayerInventoryService.helm.itemName);
} }
function RoomEventComponent_div_69_div_2_div_2_div_12_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.PlayerInventoryService.armour.itemName);
} }
function RoomEventComponent_div_69_div_2_div_2_div_12_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r75.PlayerInventoryService.offhand.itemName);
} }
function RoomEventComponent_div_69_div_2_div_2_div_12_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r76.PlayerInventoryService.weapon.itemName);
} }
function RoomEventComponent_div_69_div_2_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomEventComponent_div_69_div_2_div_2_div_12_a_5_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_69_div_2_div_2_div_12_a_6_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_div_69_div_2_div_2_div_12_a_7_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomEventComponent_div_69_div_2_div_2_div_12_a_8_Template, 3, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "helm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "armour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "offhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "weapon");
} }
function RoomEventComponent_div_69_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_div_69_div_2_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const loot_r65 = ctx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r78.takeLoot(loot_r65.itemName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_69_div_2_div_2_div_6_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_div_69_div_2_div_2_a_7_Template, 3, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomEventComponent_div_69_div_2_div_2_a_8_Template, 3, 1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomEventComponent_div_69_div_2_div_2_a_9_Template, 3, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RoomEventComponent_div_69_div_2_div_2_div_12_Template, 9, 4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loot_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r64.PlayerInventoryService.getItemColour(loot_r65.itemTier));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", loot_r65.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loot_r65.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemAttackValue === 0 && loot_r65.itemDefenceValue === 0 || loot_r65.itemName === "Wooden Buckler" || loot_r65.itemName === "Tower Shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemAttackValue > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "armour" || loot_r65.itemType === "helm" || loot_r65.itemName === "shield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType === "food");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", loot_r65.itemDescription, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", loot_r65.itemType != "food");
} }
function RoomEventComponent_div_69_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomEventComponent_div_69_div_2_div_2_Template, 13, 10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomEventComponent_div_69_div_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.DungeonPathService.toggleDungeonPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " take nothing and leave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.RoomEventService.roomLootList);
} }
function RoomEventComponent_div_69_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomEventComponent_div_69_div_2_Template, 6, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomEventComponent_div_69_div_4_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.RoomEventService.isLootTaken === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.RoomEventService.roomType === "treasure");
} }
function RoomEventComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.PlayerInventoryService.playerDefence, "");
} }
function RoomEventComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.PlayerInventoryService.playerDefence, "");
} }
function RoomEventComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r17.RoomEventService.healthChangeValue, " ");
} }
function RoomEventComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.RoomEventService.healthChangeValue, " ");
} }
function RoomEventComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.RoomEventService.monsterAttackValue, "");
} }
function RoomEventComponent_div_91_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" -", ctx_r82.RoomEventService.monsterHealthChangeValue, " ");
} }
function RoomEventComponent_div_91_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " -1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomEventComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomEventComponent_div_91_div_5_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomEventComponent_div_91_div_6_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.RoomEventService.monsterHealthValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.RoomEventService.isMonsterTakeDamage === true && ctx_r20.RoomEventService.isHandgunInUse === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.RoomEventService.isMonsterTakeDamage === true && ctx_r20.RoomEventService.isHandgunInUse === true);
} }
function RoomEventComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RoomEventComponent {
    constructor(DungeonPathService, RoomEventService, PlayerInventoryService) {
        this.DungeonPathService = DungeonPathService;
        this.RoomEventService = RoomEventService;
        this.PlayerInventoryService = PlayerInventoryService;
    }
    ngOnInit() {
        console.log("set room room-event.component.ts");
        this.RoomEventService.setupRoom();
    }
    takeLoot(itemName) {
        this.RoomEventService.takeLoot(itemName);
    }
    Attack() {
        this.RoomEventService.playerAttack();
    }
    Offhand() {
        if (this.PlayerInventoryService.offhand.itemName === "Handgun") {
            console.log("do Handgun stuff");
        }
        else if (this.PlayerInventoryService.offhand.itemName === "Torch") {
            console.log("do torch stuff");
        }
        else {
            this.RoomEventService.playerBlock();
        }
    }
}
RoomEventComponent.ɵfac = function RoomEventComponent_Factory(t) { return new (t || RoomEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__["RoomEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__["PlayerInventoryService"])); };
RoomEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomEventComponent, selectors: [["app-room-event"]], decls: 93, vars: 48, consts: [[1, "room-event-container"], [1, "cave-background-container"], [1, "cave-background-image", 3, "src"], ["class", "dev-info", 4, "ngIf"], [1, "stat-row"], [1, "stat-row-spacer"], [1, "stat-container"], ["class", "stat-text", 4, "ngIf"], [1, "flexrow"], [1, "equip-column"], [1, "equip-slot"], [1, "item-image", 3, "src"], [1, "tooltip"], [1, "tooltipArrow"], [1, "tooltipTitle"], [1, "tooltipText"], [1, "tooltipDesc"], ["class", "equip-button", 3, "click", 4, "ngIf"], ["class", "tooltipText", 4, "ngIf"], [1, "avatar-column"], [1, "status-box"], [4, "ngIf"], ["id", "playerAvatar", "class", "avatar", 4, "ngIf"], ["class", "avatar-column", 4, "ngIf"], [1, "stat-box"], [1, "stat-text"], ["color", "grey", "data-icon", "mdi:sword", "data-inline", "false", 1, "iconify"], ["class", "stat-text-green", 4, "ngIf"], ["color", "grey", "data-icon", "bx-bxs-shield", "data-inline", "false", 1, "iconify"], ["color", "red", "data-icon", "ant-design:heart-filled", "data-inline", "false", 1, "iconify"], ["class", "health-pos", 4, "ngIf"], ["class", "health-neg", 4, "ngIf"], ["class", "stat-box", 4, "ngIf"], [1, "dev-info"], [1, "equip-button", 3, "click"], [1, "player-dead", 3, "src"], ["id", "playerAvatar", 1, "avatar"], [1, "equip-in-use"], ["class", "avatar-attacking", 3, "src", 4, "ngIf"], ["class", "avatar", 3, "src", 4, "ngIf"], ["class", "avatar-avoiding", 3, "src", 4, "ngIf"], ["class", "eqiup-blocking", 3, "src", 4, "ngIf"], ["class", "eqiup-attacking", 3, "src", 4, "ngIf"], ["class", "eqiup-attacking-2", 3, "src", 4, "ngIf"], ["class", "damage-deflect", "src", "assets/images/effects/Block Effect.png", 4, "ngIf"], ["class", "damage-hit", "src", "assets/images/effects/Hit Effect.png", 4, "ngIf"], ["class", "eqiup-handgun", 3, "src", 4, "ngIf"], [1, "avatar-attacking", 3, "src"], [1, "avatar", 3, "src"], [1, "avatar-avoiding", 3, "src"], [1, "eqiup-blocking", 3, "src"], [1, "eqiup-attacking", 3, "src"], [1, "eqiup-attacking-2", 3, "src"], ["src", "assets/images/effects/Block Effect.png", 1, "damage-deflect"], ["src", "assets/images/effects/Hit Effect.png", 1, "damage-hit"], [1, "eqiup-handgun", 3, "src"], ["class", "monster-damage-hit", "src", "assets/images/effects/Monster Hit Effect.png", 4, "ngIf"], ["class", "monster-lightsaber-hit", "src", "assets/images/effects/Lightsaber Effect.png", 4, "ngIf"], [1, "monster"], ["class", "monster", 3, "src", 4, "ngIf"], ["class", "monster-attacking", 3, "src", 4, "ngIf"], ["class", "monster-claw-attacking", "src", "assets/images/effects/Monster Claw.png", 4, "ngIf"], [1, "monster", 3, "src"], [1, "monster-attacking", 3, "src"], ["src", "assets/images/effects/Monster Claw.png", 1, "monster-claw-attacking"], ["src", "assets/images/effects/Monster Hit Effect.png", 1, "monster-damage-hit"], ["src", "assets/images/effects/Lightsaber Effect.png", 1, "monster-lightsaber-hit"], [1, "loot-container"], [4, "ngFor", "ngForOf"], [1, "forgo-loot-button", 3, "click"], [1, "loot-card", 3, "click"], [1, "loot-image", 3, "src"], ["class", "specialDiv", 4, "ngIf"], ["class", "loot-card-tooltip", 4, "ngIf"], [1, "specialDiv"], [1, "loot-card-tooltip"], ["class", "tooltipTitle", 4, "ngIf"], [1, "monster-dead", 3, "src"], ["class", "loot-container", 4, "ngIf"], ["id", "treasure", "src", "assets/images/misc/ChestClosed.png", 1, "chest"], ["src", "assets/images/misc/Fire.png", 1, "fire"], [1, "stat-text-green"], [1, "health-pos"], [1, "health-neg"]], template: function RoomEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomEventComponent_div_3_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomEventComponent_p_7_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoomEventComponent_p_9_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RoomEventComponent_button_38_Template, 1, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RoomEventComponent_a_44_Template, 3, 1, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RoomEventComponent_a_45_Template, 3, 1, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RoomEventComponent_button_50_Template, 1, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RoomEventComponent_div_63_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RoomEventComponent_div_64_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RoomEventComponent_div_65_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RoomEventComponent_div_66_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RoomEventComponent_div_67_Template, 12, 9, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, RoomEventComponent_div_68_Template, 7, 5, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, RoomEventComponent_div_69_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RoomEventComponent_div_70_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RoomEventComponent_span_79_Template, 2, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, RoomEventComponent_span_80_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, RoomEventComponent_div_86_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, RoomEventComponent_div_87_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, RoomEventComponent_div_89_Template, 4, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, RoomEventComponent_div_91_Template, 7, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, RoomEventComponent_div_92_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.RoomEventService.roomBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DungeonPathService.showDevInfo === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerTurn === true && ctx.RoomEventService.roomType != "treasure" && ctx.RoomEventService.roomType != "fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerTurn === false && ctx.RoomEventService.monsterHealthValue > 0 && ctx.RoomEventService.roomType != "treasure" && ctx.RoomEventService.roomType != "fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.PlayerInventoryService.getItemColour(ctx.PlayerInventoryService.helm.itemTier));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx.PlayerInventoryService.helm.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PlayerInventoryService.helm.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defence Value: ", ctx.PlayerInventoryService.helm.itemDefenceValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.PlayerInventoryService.helm.itemDescription, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.PlayerInventoryService.getItemColour(ctx.PlayerInventoryService.armour.itemTier));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx.PlayerInventoryService.armour.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PlayerInventoryService.armour.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defence Value: ", ctx.PlayerInventoryService.armour.itemDefenceValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.PlayerInventoryService.armour.itemDescription, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.PlayerInventoryService.getItemColour(ctx.PlayerInventoryService.offhand.itemTier));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx.PlayerInventoryService.offhand.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerTurn === true && ctx.PlayerInventoryService.offhand.itemTier < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PlayerInventoryService.offhand.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.offhand.itemAttackValue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.offhand.itemDefenceValue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.PlayerInventoryService.offhand.itemDescription, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.PlayerInventoryService.getItemColour(ctx.PlayerInventoryService.weapon.itemTier));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/equipment/", ctx.PlayerInventoryService.weapon.itemName, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerTurn === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PlayerInventoryService.weapon.itemName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack Value: ", ctx.PlayerInventoryService.weapon.itemAttackValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx.PlayerInventoryService.weapon.itemDescription, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerBlocking === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isAttackAvoided === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.roomType === "fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.playerHealth <= 0 && ctx.PlayerInventoryService.isGodmodeOn === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.playerHealth > 0 || ctx.PlayerInventoryService.isGodmodeOn === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.roomType === "monster" || ctx.RoomEventService.roomType === "boss" || ctx.RoomEventService.roomType === "finalboss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.roomType === "treasure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.roomType === "fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.PlayerInventoryService.weapon.itemAttackValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerBlocking === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.isPlayerBlocking === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.PlayerInventoryService.playerHealth, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.healthChangeValue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.healthChangeValue < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.monsterHealthValue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.monsterHealthValue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RoomEventService.roomType === "start");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".room-event-container[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgba(0, 0, 0, 0.466),\r\n    rgba(141, 141, 141, 0.164),\r\n    rgba(218, 218, 218, 0.096)\r\n  );\r\n  width: 88.2vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dev-info[_ngcontent-%COMP%] {\r\n  margin-top: 15vh;\r\n  background-color: black;\r\n  color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  width: 20vw;\r\n  align-self: center;\r\n}\r\n\r\n\r\n\r\n.cave-background-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n  height: 80vh;\r\n  width: 88.2vw;\r\n}\r\n\r\n.cave-background-image[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.flexrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  \r\n}\r\n\r\n.flexcol[_ngcontent-%COMP%], .monster-flexrow[_ngcontent-%COMP%], .status[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n.equip-column[_ngcontent-%COMP%] {\r\n  padding: 1.5vw;\r\n  background-color: rgba(37, 37, 37, 0.76);\r\n}\r\n\r\n.equip-slot[_ngcontent-%COMP%], .equip-button[_ngcontent-%COMP%] {\r\n  width: 10vh;\r\n  height: 10vh;\r\n  border-radius: 1vh;\r\n  margin: 0.8vw;\r\n  font-size: 2vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.slot-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  justify-self: center;\r\n}\r\n\r\n.item-image[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  opacity: 50%;\r\n}\r\n\r\n.equip-button[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border-style: none;\r\n  z-index: 7;\r\n  margin: 0vw;\r\n  padding: 0.5vw;\r\n  cursor: pointer;\r\n  position: fixed;\r\n  animation-name: equipButton;\r\n  animation-duration: 1.5s;\r\n  animation-iteration-count: infinite;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes equipButton {\r\n  0% {\r\n    background-color: rgba(255, 255, 255, 0);\r\n  }\r\n  50% {\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n  }\r\n  100% {\r\n    background-color: rgb(255, 255, 255, 0);\r\n  }\r\n}\r\n\r\n\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.equip-slot[_ngcontent-%COMP%]:hover    + .tooltip[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 1vw;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n  max-width: 10vw;\r\n  margin-top: -11vh;\r\n  margin-left: 9vw;\r\n  position: absolute;\r\n  color: white;\r\n  text-align: left;\r\n  animation-name: equip-tooltip-ani;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes equip-tooltip-ani {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  30% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n.tooltipArrow[_ngcontent-%COMP%] {\r\n  right: 100%;\r\n  top: 17.5%;\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 21px solid transparent;\r\n  border-bottom: 21px solid transparent;\r\n  border-right: 21px solid rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.tooltipTitle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-weight: 600;\r\n  font-size: 2vh;\r\n}\r\n\r\n.tooltipText[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  line-height: 2.5;\r\n  font-size: 1.8vh;\r\n}\r\n\r\n.tooltipDesc[_ngcontent-%COMP%] {\r\n  font-weight: 100;\r\n  font-style: italic;\r\n  font-size: 1.8vh;\r\n  word-wrap: normal;\r\n}\r\n\r\n.specialDiv[_ngcontent-%COMP%] {\r\n  margin-top: 1vh;\r\n  height: 1px;\r\n  width: 10px;\r\n}\r\n\r\n\r\n\r\n.loot-card-tooltip[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.loot-card[_ngcontent-%COMP%]:hover    + .loot-card-tooltip[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 1vw;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 9vw;\r\n  margin-top: -13.4vh;\r\n  margin-left: 1vw;\r\n  position: absolute;\r\n  color: white;\r\n  text-align: center;\r\n  animation-name: loot-tooltip-ani;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes loot-tooltip-ani {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  30% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.avatar-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  align-items: center;\r\n}\r\n\r\n.status-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  z-index: 0;\r\n  \r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  \r\n  height: 40vh;\r\n}\r\n\r\n.avatar-attacking[_ngcontent-%COMP%] {\r\n  height: 40vh;\r\n  animation-name: avatar-attacking;\r\n  animation-duration: 750ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes avatar-attacking {\r\n  0% {\r\n    right: 50vw;\r\n  }\r\n  30% {\r\n    right: 40vw;\r\n  }\r\n  100% {\r\n    right: 40vw;\r\n  }\r\n}\r\n\r\n.avatar-avoiding[_ngcontent-%COMP%] {\r\n  left: 30vw;\r\n  height: 40vh;\r\n  position: absolute;\r\n}\r\n\r\n.player-dead[_ngcontent-%COMP%] {\r\n  height: 40vh;\r\n  animation-name: player-death-ani;\r\n  animation-duration: 2000ms;\r\n  animation-iteration-count: 1;\r\n  z-index: 1;\r\n  position: fixed;\r\n}\r\n\r\n@keyframes player-death-ani {\r\n  0% {\r\n    top: 40vh;\r\n    left: 37vw;\r\n    transform: rotate(0deg);\r\n  }\r\n  20% {\r\n    top: 30vh;\r\n    left: 30vw;\r\n    transform: rotate(-90deg);\r\n  }\r\n  25% {\r\n    top: 32vh;\r\n    left: 29.7vw;\r\n    transform: rotate(-93deg);\r\n  }\r\n  50% {\r\n    top: 52vh;\r\n    left: 28vw;\r\n    transform: rotate(-100deg);\r\n  }\r\n  100% {\r\n    top: 52vh;\r\n    left: 28vw;\r\n    transform: rotate(-100deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n.eqiup-attacking[_ngcontent-%COMP%], .eqiup-attacking-2[_ngcontent-%COMP%] {\r\n  width: 10vh;\r\n  height: 10vh;\r\n  margin-bottom: 14vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  z-index: 0;\r\n  animation-name: eqiup-attacking;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n.eqiup-attacking-2[_ngcontent-%COMP%] {\r\n  width: 20vh;\r\n  height: 20vh;\r\n}\r\n\r\n@keyframes eqiup-attacking {\r\n  0% {\r\n    top: 30vh;\r\n    right: 50vw;\r\n    transform: rotate(-45deg);\r\n  }\r\n  30% {\r\n    top: 28vh;\r\n    right: 30vw;\r\n    transform: rotate(-45deg);\r\n  }\r\n  50% {\r\n    top: 60vh;\r\n    right: 30vw;\r\n    transform: rotate(60deg);\r\n  }\r\n  100% {\r\n    top: 61vh;\r\n    right: 31vw;\r\n    transform: rotate(65deg);\r\n  }\r\n}\r\n\r\n.eqiup-blocking[_ngcontent-%COMP%] {\r\n  height: 19vh;\r\n  width: 6vw;\r\n  top: 45vh;\r\n  left: 45vw;\r\n  position: absolute;\r\n}\r\n\r\n.eqiup-handgun[_ngcontent-%COMP%] {\r\n  height: 7vw;\r\n  width: 7vw;\r\n  transform: rotate(15deg);\r\n  top: 42vh;\r\n  left: 45vw;\r\n  position: absolute;\r\n  animation-name: eqiup-handgun;\r\n  animation-duration: 2000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes eqiup-handgun {\r\n  0% {\r\n    transform: rotate(15deg);\r\n    top: 42vh;\r\n    left: 45vw;\r\n  }\r\n  40% {\r\n    transform: rotate(15deg);\r\n    top: 42vh;\r\n    left: 45vw;\r\n  }\r\n  45% {\r\n    transform: rotate(0deg);\r\n    top: 35vh;\r\n    left: 43vw;\r\n  }\r\n  100% {\r\n    transform: rotate(0deg);\r\n    top: 35vh;\r\n    left: 43vw;\r\n  }\r\n}\r\n\r\n.damage-hit[_ngcontent-%COMP%] {\r\n  height: 15vh;\r\n  width: 10vw;\r\n  top: 45vh;\r\n  left: 34vw;\r\n  animation-name: damage-hit;\r\n  animation-duration: 1500ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes damage-hit {\r\n  0% {\r\n    opacity: 100%;\r\n  }\r\n  100% {\r\n    opacity: 0%;\r\n  }\r\n}\r\n\r\n.damage-deflect[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  width: 5vw;\r\n  left: 40vw;\r\n  animation-name: damage-deflect-ani;\r\n  animation-duration: 1500ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes damage-deflect-ani {\r\n  0% {\r\n    top: 45vh;\r\n    left: 37.5vw;\r\n    height: 10vh;\r\n    width: 5vw;\r\n    opacity: 100%;\r\n  }\r\n  40% {\r\n    top: 40vh;\r\n    left: 35vw;\r\n    height: 20vh;\r\n    width: 10vw;\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    top: 40vh;\r\n    left: 37.5vw;\r\n    height: 1vh;\r\n    width: 1vw;\r\n    opacity: 0%;\r\n  }\r\n}\r\n\r\n.monster-damage-hit[_ngcontent-%COMP%] {\r\n  height: 15vh;\r\n  width: 10vw;\r\n  top: 45vh;\r\n  left: 71vw;\r\n  animation-name: monster-damage-hit;\r\n  animation-duration: 1500ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n@keyframes monster-damage-hit {\r\n  0% {\r\n    opacity: 100%;\r\n    height: 7.5vh;\r\n    width: 5vw;\r\n    top: 47.5vh;\r\n    left: 73.5vw;\r\n  }\r\n  100% {\r\n    opacity: 0%;\r\n    height: 15vh;\r\n    width: 10vw;\r\n    top: 45vh;\r\n    left: 71vw;\r\n  }\r\n}\r\n\r\n.monster-lightsaber-hit[_ngcontent-%COMP%] {\r\n  height: 30vh;\r\n  width: 20vw;\r\n  top: 40vh;\r\n  left: 65vw;\r\n  animation-name: monster-lightsaber-hit;\r\n  animation-duration: 2000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n  z-index: 2;\r\n}\r\n\r\n@keyframes monster-lightsaber-hit {\r\n  0% {\r\n    opacity: 100%;\r\n  }\r\n  100% {\r\n    opacity: 0%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.monster[_ngcontent-%COMP%] {\r\n  height: 40vh;\r\n}\r\n\r\n.monster-attacking[_ngcontent-%COMP%] {\r\n  height: 40vh;\r\n  animation-name: monster-attacking;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes monster-attacking {\r\n  0% {\r\n    right: 16vw;\r\n  }\r\n  20% {\r\n    right: 35vw;\r\n  }\r\n  90% {\r\n    right: 35vw;\r\n  }\r\n  100% {\r\n    right: 20vw;\r\n  }\r\n}\r\n\r\n.monster-claw-attacking[_ngcontent-%COMP%] {\r\n  width: 10vh;\r\n  height: 10vh;\r\n  margin-bottom: 14vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  z-index: 0;\r\n  animation-name: monster-claw-attacking;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes monster-claw-attacking {\r\n  0% {\r\n    top: 30vh;\r\n    right: 30vw;\r\n    transform: rotate(45deg);\r\n  }\r\n  30% {\r\n    top: 28vh;\r\n    right: 50vw;\r\n    transform: rotate(45deg);\r\n  }\r\n  50% {\r\n    top: 60vh;\r\n    right: 50vw;\r\n    transform: rotate(-30deg);\r\n  }\r\n  100% {\r\n    top: 61vh;\r\n    right: 49vw;\r\n    transform: rotate(-35deg);\r\n  }\r\n}\r\n\r\n.monster-dead[_ngcontent-%COMP%] {\r\n  height: 35vh;\r\n  transform: rotate(100deg);\r\n  top: 55vh;\r\n  left: 72vw;\r\n  animation-name: monster-death-ani;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  z-index: 1;\r\n  position: fixed;\r\n}\r\n\r\n@keyframes monster-death-ani {\r\n  0% {\r\n    height: 40vh;\r\n    top: 41vh;\r\n    left: 67vw;\r\n    transform: rotate(0deg);\r\n  }\r\n  40% {\r\n    height: 38vh;\r\n    top: 41vh;\r\n    left: 69vw;\r\n    transform: rotate(88deg);\r\n  }\r\n  60% {\r\n    height: 38vh;\r\n    top: 43vh;\r\n    left: 70vw;\r\n    transform: rotate(90deg);\r\n  }\r\n  75% {\r\n    height: 35vh;\r\n    top: 55vh;\r\n    left: 72vw;\r\n    transform: rotate(100deg);\r\n  }\r\n  100% {\r\n    height: 35vh;\r\n    top: 55vh;\r\n    left: 72vw;\r\n    transform: rotate(100deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n.stat-row[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  vertical-align: middle;\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.stat-row-spacer[_ngcontent-%COMP%] {\r\n  padding: 1.5vw;\r\n  width: 10vh;\r\n  margin: 0.8vw;\r\n}\r\n\r\n.stat-container[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.stat-box[_ngcontent-%COMP%] {\r\n  width: 8vw;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  z-index: 0;\r\n}\r\n\r\n.health-change[_ngcontent-%COMP%], .health-pos[_ngcontent-%COMP%], .health-neg[_ngcontent-%COMP%] {\r\n  width: 8vh;\r\n  height: 8vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 4.5vh;\r\n  font-weight: 800;\r\n  animation-name: health-change;\r\n  animation-duration: 1000ms;\r\n  animation-iteration-count: 1;\r\n  z-index: 10;\r\n  opacity: 0%;\r\n}\r\n\r\n.health-pos[_ngcontent-%COMP%] {\r\n  color: rgb(38, 255, 0);\r\n}\r\n\r\n.health-neg[_ngcontent-%COMP%] {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\n@keyframes health-change {\r\n  0% {\r\n    bottom: 40vh;\r\n    right: 0vw;\r\n    opacity: 100%;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    bottom: 3vh;\r\n    right: 0vw;\r\n    opacity: 0%;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n.iconify[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n  font-size: 7vh;\r\n  align-self: center;\r\n}\r\n\r\n.stat-text[_ngcontent-%COMP%], .stat-text-green[_ngcontent-%COMP%] {\r\n  color: cornsilk;\r\n  font-size: 4.5vh;\r\n  margin-bottom: 0.3vh;\r\n  font-weight: 800;\r\n  z-index: 2;\r\n  align-self: center;\r\n  position: absolute;\r\n}\r\n\r\n.stat-text-green[_ngcontent-%COMP%] {\r\n  color: rgb(70, 255, 37);\r\n}\r\n\r\n\r\n\r\n.chest[_ngcontent-%COMP%] {\r\n  height: 15vh;\r\n  top: 60vh;\r\n  left: 67.5vw;\r\n  z-index: 4;\r\n  position: absolute;\r\n}\r\n\r\n.fire[_ngcontent-%COMP%] {\r\n  height: 25vh;\r\n  left: 65vw;\r\n  top: 50vh;\r\n  z-index: 4;\r\n  position: absolute;\r\n}\r\n\r\n.loot-image[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  opacity: 50%;\r\n  margin: 2vh;\r\n}\r\n\r\n.loot-container[_ngcontent-%COMP%], .loot-container-animation[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 1vw;\r\n  top: 27.5vh;\r\n  right: 16vh;\r\n  background-color: rgba(32, 32, 32, 0.794);\r\n  z-index: 5;\r\n  animation-name: loot-container-animation;\r\n  animation-duration: 1300ms;\r\n  animation-iteration-count: 1;\r\n  position: absolute;\r\n}\r\n\r\n@keyframes loot-container-animation {\r\n  0% {\r\n    padding: 0.01vw;\r\n    top: 65vh;\r\n    right: 25vw;\r\n    margin-bottom: 5vh;\r\n  }\r\n  100% {\r\n    padding: 1vw;\r\n    top: 27.5vh;\r\n    right: 16vh;\r\n    margin-bottom: 0vh;\r\n  }\r\n}\r\n\r\n.loot-card[_ngcontent-%COMP%], .loot-card-animation[_ngcontent-%COMP%] {\r\n  width: 10vw;\r\n  height: 30vh;\r\n  margin: 1vw;\r\n  align-items: center;\r\n  padding: 0.5vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  animation-name: loot-card-animation;\r\n  animation-duration: 1300ms;\r\n  animation-iteration-count: 1;\r\n  overflow: hidden;\r\n}\r\n\r\n@keyframes loot-card-animation {\r\n  0% {\r\n    width: 0vh;\r\n    height: 0vh;\r\n    color: rgba(0, 0, 0, 0);\r\n    margin: 0vw;\r\n    padding: 0vw;\r\n  }\r\n  40% {\r\n    color: rgba(0, 0, 0, 0);\r\n  }\r\n  100% {\r\n    width: 10vw;\r\n    height: 30vh;\r\n    margin: 1vw;\r\n    padding: 0.5vw;\r\n  }\r\n}\r\n\r\n.forgo-loot-button[_ngcontent-%COMP%], .forgo-loot-button-animation[_ngcontent-%COMP%] {\r\n  width: 30vh;\r\n  height: 6vh;\r\n  background-color: rgb(216, 216, 216);\r\n  color: rgb(31, 31, 31);\r\n  font-weight: 800;\r\n  font-size: 2vh;\r\n  border-radius: 1vw;\r\n  margin: 1vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  animation-name: forgo-loot-button-animation;\r\n  animation-duration: 1300ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes forgo-loot-button-animation {\r\n  0% {\r\n    width: 0vh;\r\n    height: 0vh;\r\n    font-size: 0.1vh;\r\n    margin: 0vw;\r\n  }\r\n  100% {\r\n    width: 30vh;\r\n    height: 6vh;\r\n    font-size: 2vh;\r\n    margin: 1vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7OztHQUtDO0VBQ0QsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBLGdIQUFnSDs7QUFFaEg7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQSwwR0FBMEc7O0FBRTFHO0VBQ0UsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQSx5R0FBeUc7O0FBRXpHO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsd0dBQXdHOztBQUV4RztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUEsNkdBQTZHOztBQUU3Rzs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0VBQ2I7RUFDQTtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQSx5R0FBeUc7O0FBRXpHO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLGdIQUFnSDs7QUFFaEg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGdIQUFnSDs7QUFFaEg7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InJvb20tZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tLWV2ZW50LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNDY2KSxcclxuICAgIHJnYmEoMTQxLCAxNDEsIDE0MSwgMC4xNjQpLFxyXG4gICAgcmdiYSgyMTgsIDIxOCwgMjE4LCAwLjA5NilcclxuICApO1xyXG4gIHdpZHRoOiA4OC4ydnc7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kZXYtaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjB2dztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDYXZlIEJhY2tncm91bmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2F2ZS1iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGhlaWdodDogODB2aDtcclxuICB3aWR0aDogODguMnZ3O1xyXG59XHJcblxyXG4uY2F2ZS1iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIGZsZXggYm94ZXMgKi9cclxuLmZsZXhyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uZmxleGNvbCxcclxuLm1vbnN0ZXItZmxleHJvdyxcclxuLnN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGVxdWlwbWVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lcXVpcC1jb2x1bW4ge1xyXG4gIHBhZGRpbmc6IDEuNXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43Nik7XHJcbn1cclxuXHJcbi5lcXVpcC1zbG90LFxyXG4uZXF1aXAtYnV0dG9uIHtcclxuICB3aWR0aDogMTB2aDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZoO1xyXG4gIG1hcmdpbjogMC44dnc7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNsb3Qtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5lcXVpcC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIHotaW5kZXg6IDc7XHJcbiAgbWFyZ2luOiAwdnc7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBhbmltYXRpb24tbmFtZTogZXF1aXBCdXR0b247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBlcXVpcEJ1dHRvbiB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gdG9vbHRpcHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4udG9vbHRpcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVxdWlwLXNsb3Q6aG92ZXIgKyAudG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgbWF4LXdpZHRoOiAxMHZ3O1xyXG4gIG1hcmdpbi10b3A6IC0xMXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiA5dnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBlcXVpcC10b29sdGlwLWFuaTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBlcXVpcC10b29sdGlwLWFuaSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnRvb2x0aXBBcnJvdyB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAxNy41JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDIxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLnRvb2x0aXBUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuXHJcbi50b29sdGlwVGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMi41O1xyXG4gIGZvbnQtc2l6ZTogMS44dmg7XHJcbn1cclxuXHJcbi50b29sdGlwRGVzYyB7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAxLjh2aDtcclxuICB3b3JkLXdyYXA6IG5vcm1hbDtcclxufVxyXG5cclxuLnNwZWNpYWxEaXYge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuLyogbG9vdGNhcmQgdG9vbHRpcHMgKi9cclxuXHJcbi5sb290LWNhcmQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxvb3QtY2FyZDpob3ZlciArIC5sb290LWNhcmQtdG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB3aWR0aDogOXZ3O1xyXG4gIG1hcmdpbi10b3A6IC0xMy40dmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDF2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb24tbmFtZTogbG9vdC10b29sdGlwLWFuaTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb290LXRvb2x0aXAtYW5pIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gYXZhdGFycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5hdmF0YXItY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXR1cy1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMDtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIGhlaWdodDogNDB2aDtcclxufVxyXG5cclxuLmF2YXRhci1hdHRhY2tpbmcge1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBhbmltYXRpb24tbmFtZTogYXZhdGFyLWF0dGFja2luZztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDc1MG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGF2YXRhci1hdHRhY2tpbmcge1xyXG4gIDAlIHtcclxuICAgIHJpZ2h0OiA1MHZ3O1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgcmlnaHQ6IDQwdnc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcmlnaHQ6IDQwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4uYXZhdGFyLWF2b2lkaW5nIHtcclxuICBsZWZ0OiAzMHZ3O1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wbGF5ZXItZGVhZCB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBwbGF5ZXItZGVhdGgtYW5pO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGxheWVyLWRlYXRoLWFuaSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA0MHZoO1xyXG4gICAgbGVmdDogMzd2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0b3A6IDMydmg7XHJcbiAgICBsZWZ0OiAyOS43dnc7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTNkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdG9wOiA1MnZoO1xyXG4gICAgbGVmdDogMjh2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogNTJ2aDtcclxuICAgIGxlZnQ6IDI4dnc7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTAwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgXCIgZWZmZWN0cyBcIiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lcWl1cC1hdHRhY2tpbmcsXHJcbi5lcWl1cC1hdHRhY2tpbmctMiB7XHJcbiAgd2lkdGg6IDEwdmg7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDE0dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGVxaXVwLWF0dGFja2luZztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmVxaXVwLWF0dGFja2luZy0yIHtcclxuICB3aWR0aDogMjB2aDtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXFpdXAtYXR0YWNraW5nIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDMwdmg7XHJcbiAgICByaWdodDogNTB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICB0b3A6IDI4dmg7XHJcbiAgICByaWdodDogMzB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0b3A6IDYwdmg7XHJcbiAgICByaWdodDogMzB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDYxdmg7XHJcbiAgICByaWdodDogMzF2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDY1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5lcWl1cC1ibG9ja2luZyB7XHJcbiAgaGVpZ2h0OiAxOXZoO1xyXG4gIHdpZHRoOiA2dnc7XHJcbiAgdG9wOiA0NXZoO1xyXG4gIGxlZnQ6IDQ1dnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZXFpdXAtaGFuZGd1biB7XHJcbiAgaGVpZ2h0OiA3dnc7XHJcbiAgd2lkdGg6IDd2dztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgdG9wOiA0MnZoO1xyXG4gIGxlZnQ6IDQ1dnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBlcWl1cC1oYW5kZ3VuO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXFpdXAtaGFuZGd1biB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgdG9wOiA0MnZoO1xyXG4gICAgbGVmdDogNDV2dztcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICAgIHRvcDogNDJ2aDtcclxuICAgIGxlZnQ6IDQ1dnc7XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRvcDogMzV2aDtcclxuICAgIGxlZnQ6IDQzdnc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0b3A6IDM1dmg7XHJcbiAgICBsZWZ0OiA0M3Z3O1xyXG4gIH1cclxufVxyXG5cclxuLmRhbWFnZS1oaXQge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICB3aWR0aDogMTB2dztcclxuICB0b3A6IDQ1dmg7XHJcbiAgbGVmdDogMzR2dztcclxuICBhbmltYXRpb24tbmFtZTogZGFtYWdlLWhpdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkYW1hZ2UtaGl0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmRhbWFnZS1kZWZsZWN0IHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDV2dztcclxuICBsZWZ0OiA0MHZ3O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBkYW1hZ2UtZGVmbGVjdC1hbmk7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFtYWdlLWRlZmxlY3QtYW5pIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDQ1dmg7XHJcbiAgICBsZWZ0OiAzNy41dnc7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogNXZ3O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRvcDogNDB2aDtcclxuICAgIGxlZnQ6IDM1dnc7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogNDB2aDtcclxuICAgIGxlZnQ6IDM3LjV2dztcclxuICAgIGhlaWdodDogMXZoO1xyXG4gICAgd2lkdGg6IDF2dztcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxufVxyXG5cclxuLm1vbnN0ZXItZGFtYWdlLWhpdCB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIHRvcDogNDV2aDtcclxuICBsZWZ0OiA3MXZ3O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBtb25zdGVyLWRhbWFnZS1oaXQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb25zdGVyLWRhbWFnZS1oaXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcuNXZoO1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIHRvcDogNDcuNXZoO1xyXG4gICAgbGVmdDogNzMuNXZ3O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICB0b3A6IDQ1dmg7XHJcbiAgICBsZWZ0OiA3MXZ3O1xyXG4gIH1cclxufVxyXG5cclxuLm1vbnN0ZXItbGlnaHRzYWJlci1oaXQge1xyXG4gIGhlaWdodDogMzB2aDtcclxuICB3aWR0aDogMjB2dztcclxuICB0b3A6IDQwdmg7XHJcbiAgbGVmdDogNjV2dztcclxuICBhbmltYXRpb24tbmFtZTogbW9uc3Rlci1saWdodHNhYmVyLWhpdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDIwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vbnN0ZXItbGlnaHRzYWJlci1oaXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIG1vbnN0ZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4ubW9uc3RlciB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4ubW9uc3Rlci1hdHRhY2tpbmcge1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBhbmltYXRpb24tbmFtZTogbW9uc3Rlci1hdHRhY2tpbmc7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW9uc3Rlci1hdHRhY2tpbmcge1xyXG4gIDAlIHtcclxuICAgIHJpZ2h0OiAxNnZ3O1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgcmlnaHQ6IDM1dnc7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICByaWdodDogMzV2dztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICByaWdodDogMjB2dztcclxuICB9XHJcbn1cclxuXHJcbi5tb25zdGVyLWNsYXctYXR0YWNraW5nIHtcclxuICB3aWR0aDogMTB2aDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTR2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMDtcclxuICBhbmltYXRpb24tbmFtZTogbW9uc3Rlci1jbGF3LWF0dGFja2luZztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb25zdGVyLWNsYXctYXR0YWNraW5nIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDMwdmg7XHJcbiAgICByaWdodDogMzB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHRvcDogMjh2aDtcclxuICAgIHJpZ2h0OiA1MHZ3O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdG9wOiA2MHZoO1xyXG4gICAgcmlnaHQ6IDUwdnc7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogNjF2aDtcclxuICAgIHJpZ2h0OiA0OXZ3O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5tb25zdGVyLWRlYWQge1xyXG4gIGhlaWdodDogMzV2aDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xyXG4gIHRvcDogNTV2aDtcclxuICBsZWZ0OiA3MnZ3O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBtb25zdGVyLWRlYXRoLWFuaTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vbnN0ZXItZGVhdGgtYW5pIHtcclxuICAwJSB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB0b3A6IDQxdmg7XHJcbiAgICBsZWZ0OiA2N3Z3O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBoZWlnaHQ6IDM4dmg7XHJcbiAgICB0b3A6IDQxdmg7XHJcbiAgICBsZWZ0OiA2OXZ3O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoODhkZWcpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgaGVpZ2h0OiAzOHZoO1xyXG4gICAgdG9wOiA0M3ZoO1xyXG4gICAgbGVmdDogNzB2dztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIHRvcDogNTV2aDtcclxuICAgIGxlZnQ6IDcydnc7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIHRvcDogNTV2aDtcclxuICAgIGxlZnQ6IDcydnc7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IGhlYWRlciArIGZvb3RlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5zdGF0LXJvdyB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLnN0YXQtcm93LXNwYWNlciB7XHJcbiAgcGFkZGluZzogMS41dnc7XHJcbiAgd2lkdGg6IDEwdmg7XHJcbiAgbWFyZ2luOiAwLjh2dztcclxufVxyXG5cclxuLnN0YXQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0LWJveCB7XHJcbiAgd2lkdGg6IDh2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5oZWFsdGgtY2hhbmdlLFxyXG4uaGVhbHRoLXBvcyxcclxuLmhlYWx0aC1uZWcge1xyXG4gIHdpZHRoOiA4dmg7XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQuNXZoO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGhlYWx0aC1jaGFuZ2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICB6LWluZGV4OiAxMDtcclxuICBvcGFjaXR5OiAwJTtcclxufVxyXG5cclxuLmhlYWx0aC1wb3Mge1xyXG4gIGNvbG9yOiByZ2IoMzgsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5oZWFsdGgtbmVnIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGVhbHRoLWNoYW5nZSB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiA0MHZoO1xyXG4gICAgcmlnaHQ6IDB2dztcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAzdmg7XHJcbiAgICByaWdodDogMHZ3O1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbmlmeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiA3dmg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdC10ZXh0LFxyXG4uc3RhdC10ZXh0LWdyZWVuIHtcclxuICBjb2xvcjogY29ybnNpbGs7XHJcbiAgZm9udC1zaXplOiA0LjV2aDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjN2aDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnN0YXQtdGV4dC1ncmVlbiB7XHJcbiAgY29sb3I6IHJnYig3MCwgMjU1LCAzNyk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUcmVhc3VyZSAvIExvb3QgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uY2hlc3Qge1xyXG4gIGhlaWdodDogMTV2aDtcclxuICB0b3A6IDYwdmg7XHJcbiAgbGVmdDogNjcuNXZ3O1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmlyZSB7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIGxlZnQ6IDY1dnc7XHJcbiAgdG9wOiA1MHZoO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubG9vdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBvcGFjaXR5OiA1MCU7XHJcbiAgbWFyZ2luOiAydmg7XHJcbn1cclxuXHJcbi5sb290LWNvbnRhaW5lcixcclxuLmxvb3QtY29udGFpbmVyLWFuaW1hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG4gIHRvcDogMjcuNXZoO1xyXG4gIHJpZ2h0OiAxNnZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC43OTQpO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxvb3QtY29udGFpbmVyLWFuaW1hdGlvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEzMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb290LWNvbnRhaW5lci1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHBhZGRpbmc6IDAuMDF2dztcclxuICAgIHRvcDogNjV2aDtcclxuICAgIHJpZ2h0OiAyNXZ3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIHRvcDogMjcuNXZoO1xyXG4gICAgcmlnaHQ6IDE2dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9vdC1jYXJkLFxyXG4ubG9vdC1jYXJkLWFuaW1hdGlvbiB7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIG1hcmdpbjogMXZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxvb3QtY2FyZC1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMzAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvb3QtY2FyZC1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwdmg7XHJcbiAgICBoZWlnaHQ6IDB2aDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgbWFyZ2luOiAwdnc7XHJcbiAgICBwYWRkaW5nOiAwdnc7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbjogMXZ3O1xyXG4gICAgcGFkZGluZzogMC41dnc7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9yZ28tbG9vdC1idXR0b24sXHJcbi5mb3Jnby1sb290LWJ1dHRvbi1hbmltYXRpb24ge1xyXG4gIHdpZHRoOiAzMHZoO1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICBjb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIG1hcmdpbjogMXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmb3Jnby1sb290LWJ1dHRvbi1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMzAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmb3Jnby1sb290LWJ1dHRvbi1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwdmg7XHJcbiAgICBoZWlnaHQ6IDB2aDtcclxuICAgIGZvbnQtc2l6ZTogMC4xdmg7XHJcbiAgICBtYXJnaW46IDB2dztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMzB2aDtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbiAgICBtYXJnaW46IDF2dztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "L3Hs":
/*!***********************************************!*\
  !*** ./src/app/services/RoomEvent.service.ts ***!
  \***********************************************/
/*! exports provided: RoomEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomEventService", function() { return RoomEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _PlayerInventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerInventory.service */ "uZrH");



class RoomEventService {
    constructor(DungeonPathService, PlayerInventoryService) {
        this.DungeonPathService = DungeonPathService;
        this.PlayerInventoryService = PlayerInventoryService;
        this.roomLootList = [];
        this.healAmount = 0;
        this.healthChangeValue = 0;
        this.monsterHealthChangeValue = 0;
        // triggers
        this.isLootTaken = false;
        this.isPlayerTurn = false;
        this.isPlayerAttacking = false;
        this.isPlayerBlocking = false;
        this.isHandgunInUse = false;
        this.isMonsterAttacking = false;
        this.isDamageNegated = false;
        this.isAttackAvoided = false;
        this.isPlayerTakeDamage = false;
        this.isMonsterTakeDamage = false;
        this.isMonsterStunned = false;
        this.isSoundOn = true;
    }
    playAudio(sound) {
        let audio = new Audio();
        audio.src = "assets/sounds/" + sound + ".wav";
        audio.load();
        audio.play();
    }
    setRoomBackground() {
        let BackgroundImageArray = [
            "assets/images/backgrounds/background1.png",
            "assets/images/backgrounds/background2.png",
            "assets/images/backgrounds/background3.png",
            "assets/images/backgrounds/background4.png",
            "assets/images/backgrounds/background5.png"
        ];
        let random = BackgroundImageArray[Math.floor(Math.random() * BackgroundImageArray.length)];
        return random;
    }
    setRoomImage(roomType) {
        switch (roomType) {
            case "monster":
                let x = Math.floor((Math.random() * 6));
                return "assets/images/monsters/monster" + x + ".png";
            case "boss":
                let y = Math.floor((Math.random() * 6));
                return "assets/images/monsters/monster" + y + ".png";
            case "finalboss":
                return "assets/images/monsters/monster6.png";
        }
    }
    setupRoom() {
        this.DungeonPathService.levelList.forEach(level => {
            level.roomList.forEach(room => {
                this.roomBackground = this.setRoomBackground();
                if (room.roomID === this.DungeonPathService.posID) {
                    // console.log(room.roomType);
                    this.roomType = room.roomType;
                    this.currentLevel = room.levelNo;
                    this.currentRoom = room.roomNo;
                    this.healthChangeValue = 0;
                    if (room.roomType === "monster" || room.roomType === "boss" || room.roomType === "finalboss") {
                        this.roomImage = this.setRoomImage(this.roomType);
                        this.monsterAttackValue = this.setMonsterAttackValue();
                        this.monsterHealthValue = this.setMonsterHealthValue();
                        this.isMonsterTakeDamage = false;
                        this.isMonsterStunned = false;
                        this.isPlayerTurn = false;
                        this.AssignRoomLoot();
                        if (this.isSoundOn === true && this.PlayerInventoryService.offhand.itemName != 'Handgun') {
                            this.playAudio("monster-hiss");
                        }
                        // use players handgun here
                        if (this.PlayerInventoryService.offhand.itemName === 'Handgun') {
                            this.playerUsesHandgun();
                            setTimeout(() => { this.monsterTurn(); }, 2000);
                        }
                        else {
                            setTimeout(() => { this.monsterTurn(); }, 1000);
                        }
                    }
                    if (room.roomType === "fire") {
                        if (this.isSoundOn === true) {
                            this.playAudio("campfire");
                        }
                        setTimeout(() => { this.getHealthFromFire(); }, 500);
                    }
                    if (room.roomType === "treasure") {
                        this.AssignRoomLoot();
                        if (this.isSoundOn === true) {
                            this.playAudio("chest-creak");
                        }
                        setTimeout(() => {
                            document.getElementById('treasure').setAttribute('src', "assets/images/misc/ChestOpen.png");
                        }, 300);
                    }
                }
            });
        });
    }
    setMonsterAttackValue() {
        let currentLevel = this.currentLevel;
        switch (this.roomType) {
            case "monster":
                return Math.ceil((currentLevel / 4));
            case "boss":
                return Math.ceil((currentLevel / 2));
            case "finalboss":
                return Math.ceil((currentLevel / 2 - 1));
        }
    }
    setMonsterHealthValue() {
        let currentLevel = this.currentLevel;
        switch (this.roomType) {
            case "monster":
                return Math.ceil((currentLevel / 2));
            case "boss":
                return Math.ceil((currentLevel));
            case "finalboss":
                return Math.ceil((currentLevel - 1));
        }
    }
    playerAttack() {
        this.isPlayerBlocking = false;
        this.isPlayerAttacking = true;
        // attack
        setTimeout(() => {
            if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemTier === 1 && this.PlayerInventoryService.weapon.itemName != "Lightsaber") {
                this.playAudio("monster-hit1");
            }
            if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemTier > 1 && this.PlayerInventoryService.weapon.itemName != "Lightsaber") {
                this.playAudio("monster-hit2");
            }
            if (this.isSoundOn === true && this.PlayerInventoryService.weapon.itemName === "Lightsaber") {
                this.playAudio("lightsaber-swing");
            }
            // drop monster instantly
            if (this.monsterHealthValue <= this.PlayerInventoryService.weapon.itemAttackValue) {
                this.isMonsterTakeDamage = true;
                this.monsterHealthValue = (this.monsterHealthValue - this.monsterHealthValue);
            }
            else {
                if (this.PlayerInventoryService.weapon.itemName === "Lightsaber" && Math.random() < 0.25) {
                    // console.log("lightsaber perk activated")
                    this.isMonsterTakeDamage = true;
                    this.monsterHealthChangeValue = this.monsterHealthValue;
                    this.monsterHealthValue = 0;
                }
                else {
                    this.isMonsterTakeDamage = true;
                    this.monsterHealthChangeValue = this.PlayerInventoryService.weapon.itemAttackValue;
                    setTimeout(() => {
                        this.monsterHealthValue = (this.monsterHealthValue - this.PlayerInventoryService.weapon.itemAttackValue);
                    }, 500);
                }
            }
        }, 250);
        //move back
        setTimeout(() => {
            this.isPlayerAttacking = false;
            // console.log("player hit enemy for " + this.PlayerInventoryService.weapon.itemAttackValue + " damage, taking health down to " + this.monsterHealthValue);
        }, 1000);
        // change to monster turn
        if (this.monsterHealthValue > 0) {
            setTimeout(() => {
                this.isMonsterTakeDamage = false;
                this.monsterHealthChangeValue = 0;
                this.isPlayerTurn = false;
                this.monsterTurn();
            }, 1000);
        }
    }
    playerBlock() {
        this.isPlayerBlocking = true;
        this.PlayerInventoryService.playerDefence =
            this.PlayerInventoryService.helm.itemDefenceValue +
                this.PlayerInventoryService.armour.itemDefenceValue +
                this.PlayerInventoryService.offhand.itemDefenceValue;
        if (this.monsterHealthValue > 0) {
            setTimeout(() => {
                this.isPlayerTurn = false;
                this.monsterTurn();
            }, 1000);
        }
    }
    playerUsesHandgun() {
        // console.log("handgun used")
        this.isMonsterTakeDamage = false;
        this.isHandgunInUse = true;
        // monster take damage
        setTimeout(() => {
            if (this.isSoundOn === true) {
                this.playAudio("gunshot");
            }
            this.isMonsterTakeDamage = true;
        }, 1000);
        setTimeout(() => {
            this.monsterHealthValue = (this.monsterHealthValue - 1);
        }, 1500);
        //wrapup
        setTimeout(() => {
            this.isHandgunInUse = false;
            this.isMonsterTakeDamage = false;
        }, 2000);
    }
    monsterTurn() {
        // if final boss killed then end game and show win screen.
        if (this.monsterHealthValue <= 0 && this.roomType === "finalboss") {
            setTimeout(() => {
                if (this.isSoundOn === true) {
                    this.playAudio("player-win2");
                }
                this.PlayerInventoryService.isPlayerWon = true;
                this.DungeonPathService.showDungeonPath = false;
                this.DungeonPathService.showRoom = false;
            }, 1000);
        }
        if (this.isPlayerTurn === false && this.monsterHealthValue > 0) {
            if (this.isMonsterStunned === true) {
                // // console.log(" monster is stunned");
                setTimeout(() => {
                    this.isMonsterStunned = false;
                }, 500);
            }
            else {
                // monster attacks
                this.isMonsterAttacking = true;
                // calculate if player avoids attack
                let avoidChance = this.PlayerInventoryService.getPlayerAvoidChance();
                // console.log("player avoidchance = " + avoidChance)
                let random = Math.random();
                // console.log("random no = " + random)
                if (avoidChance > random) {
                    // monster attack misses
                    // console.log("player avoided attack")
                    if (this.isSoundOn === true) {
                        this.playAudio("attack-miss");
                    }
                    this.isAttackAvoided = true;
                }
                else {
                    // monster attack hits
                    setTimeout(() => {
                        //calculate damage done
                        let damage = this.monsterAttackValue;
                        damage = damage - (this.PlayerInventoryService.playerDefence + this.PlayerInventoryService.playerBlockAmount);
                        if (damage <= 0) {
                            // // console.log("attack did not break armour")
                            if (this.isSoundOn === true) {
                                this.playAudio("metal-hit");
                            }
                            this.isDamageNegated = true;
                        }
                        else if (damage > 0) {
                            // // console.log("attack did " + damage + " damage.")
                            if (this.isSoundOn === true) {
                                this.playAudio("player-hit");
                            }
                            this.isPlayerTakeDamage = true;
                            // will this damage kill player?
                            if (damage >= this.PlayerInventoryService.playerHealth && this.PlayerInventoryService.isGodmodeOn === false) {
                                if (this.isSoundOn === true) {
                                    this.playAudio("player-death");
                                }
                                setTimeout(() => {
                                    this.PlayerInventoryService.isPlayerDead = true;
                                    this.DungeonPathService.showDungeonPath = false;
                                    this.DungeonPathService.showRoom = false;
                                }, 2000);
                            }
                            this.healthChangeValue = -damage;
                            this.PlayerInventoryService.takeDamage(damage);
                        }
                        // stun monster if player block active
                        if (this.isPlayerBlocking === true) {
                            if (this.isSoundOn === true) {
                                this.playAudio("shield-block");
                            }
                            this.isMonsterStunned = true;
                            this.isDamageNegated = true;
                        }
                    }, 500);
                }
            }
            // move monster back
            setTimeout(() => {
                this.isAttackAvoided = false;
                this.isMonsterAttacking = false;
            }, 1000);
            // end monsters turn
            setTimeout(() => {
                this.healthChangeValue = 0;
                this.isDamageNegated = false;
                this.isPlayerTakeDamage = false;
                if (this.PlayerInventoryService.playerHealth > 0 || this.PlayerInventoryService.isGodmodeOn === true) {
                    this.isPlayerTurn = true;
                }
                this.isPlayerBlocking = false;
                this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.helm.itemDefenceValue + this.PlayerInventoryService.armour.itemDefenceValue);
            }, 1000);
        }
    }
    getHealthFromFire() {
        this.healAmount = Math.floor(Math.random() * 2) + 2;
        this.PlayerInventoryService.gainHealth(this.healAmount);
        this.healthChangeValue = this.healAmount;
        setTimeout(() => {
            this.DungeonPathService.toggleDungeonPath();
            this.healthChangeValue = 0;
        }, 1500);
    }
    AssignRoomLoot() {
        this.isLootTaken = false;
        this.roomLootList = [];
        let templist = [];
        let currentlyEquipped = [this.PlayerInventoryService.helm, this.PlayerInventoryService.armour, this.PlayerInventoryService.offhand, this.PlayerInventoryService.weapon];
        // create a new list based on tier level 
        if (this.roomType === "treasure" || this.roomType === "boss" || this.roomType === "finalboss") {
            this.PlayerInventoryService.lootPool.forEach(element => {
                if (element.itemTier >= 2) {
                    templist.push(element);
                }
            });
        }
        else if (this.roomType === "monster") {
            this.PlayerInventoryService.lootPool.forEach(element => {
                if (element.itemTier <= 2) {
                    templist.push(element);
                }
            });
        }
        // select only 3 items from that list.
        while (this.roomLootList.length <= 2) {
            let randomItem = Math.floor(Math.random() * templist.length);
            // console.log("the item chosen is = " + randomItem, templist[randomItem])
            // only add the item if it's not already in the list of items offered.
            if (this.roomLootList.includes(templist[randomItem])) {
                // do not add
            }
            else if (currentlyEquipped.includes(templist[randomItem]) === true) {
                // do not add
                // console.log(templist[randomItem].itemName + "was found in list of equipped items. And was skipped.")
            }
            else {
                this.roomLootList.push(templist[randomItem]);
            }
        }
    }
    takeLoot(itemName) {
        let itemGained = this.PlayerInventoryService.lootPool.find(obj => {
            return obj.itemName === itemName;
        });
        // console.log(itemGained);
        if (itemGained.itemType === "weapon") {
            this.PlayerInventoryService.weapon = itemGained;
            this.PlayerInventoryService.weapon.itemAttackValue = itemGained.itemAttackValue;
        }
        if (itemGained.itemType === "offhand") {
            this.PlayerInventoryService.offhand = itemGained;
        }
        if (itemGained.itemType === "helm") {
            this.PlayerInventoryService.helm = itemGained;
            this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.armour.itemDefenceValue + itemGained.itemDefenceValue);
        }
        if (itemGained.itemType === "armour") {
            this.PlayerInventoryService.armour = itemGained;
            this.PlayerInventoryService.playerDefence = (this.PlayerInventoryService.helm.itemDefenceValue + itemGained.itemDefenceValue);
        }
        if (itemGained.itemType === "food") {
            this.PlayerInventoryService.gainHealth(itemGained.itemDefenceValue);
            this.healthChangeValue = itemGained.itemDefenceValue;
        }
        this.isLootTaken = true;
        setTimeout(() => {
            this.isPlayerBlocking = false;
            this.DungeonPathService.toggleDungeonPath();
        }, 1000);
    }
}
RoomEventService.ɵfac = function RoomEventService_Factory(t) { return new (t || RoomEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_2__["PlayerInventoryService"])); };
RoomEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomEventService, factory: RoomEventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/PlayerInventory.service */ "uZrH");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/options/options.component */ "gstJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_room_event_room_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/room-event/room-event.component */ "JdIT");
/* harmony import */ var _components_DungeonPath_dungeon_path_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DungeonPath/dungeon-path.component */ "juck");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");








function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-room-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dungeon-path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(DungeonPathService, PlayerInventoryService) {
        this.DungeonPathService = DungeonPathService;
        this.PlayerInventoryService = PlayerInventoryService;
        this.title = 'DungeonPathGame';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_2__["PlayerInventoryService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 3, consts: [[1, "pagecont"], [1, "columnContainer"], [4, "ngIf"], [1, "flexrow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DungeonPathService.showRoom === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DungeonPathService.showDungeonPath === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.isPlayerDead === true || ctx.PlayerInventoryService.isPlayerWon === true || ctx.DungeonPathService.showTitleScreen === true);
    } }, directives: [_components_options_options_component__WEBPACK_IMPORTED_MODULE_3__["OptionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_room_event_room_event_component__WEBPACK_IMPORTED_MODULE_5__["RoomEventComponent"], _components_DungeonPath_dungeon_path_component__WEBPACK_IMPORTED_MODULE_6__["DungeonPathComponent"], _components_title_title_component__WEBPACK_IMPORTED_MODULE_7__["TitleComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n  font: weight 600;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.pagecont[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  width: 98vw;\r\n  height: 98vh;\r\n}\r\n\r\n.columnContainer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 90%;\r\n    height: 100%;\r\n  }\r\n\r\n.flexrow[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udDogd2VpZ2h0IDYwMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnBhZ2Vjb250IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDk4dnc7XHJcbiAgaGVpZ2h0OiA5OHZoO1xyXG59XHJcblxyXG4uY29sdW1uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZsZXhyb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "X3qz":
/*!*********************************************!*\
  !*** ./src/app/services/options.service.ts ***!
  \*********************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/PlayerInventory.service */ "uZrH");




class OptionsService {
    constructor(DungeonPathService, RoomEventService, PlayerInventoryService) {
        this.DungeonPathService = DungeonPathService;
        this.RoomEventService = RoomEventService;
        this.PlayerInventoryService = PlayerInventoryService;
        this.ShowOptions = false;
        this.HideOptions = false;
    }
    ngOnInit() {
    }
    toggleOptions() {
        if (this.ShowOptions === true) {
            this.HideOptions = true;
            this.ShowOptions = false;
            setTimeout(() => {
                this.HideOptions = false;
            }, 500);
        }
        else if (this.ShowOptions === false) {
            this.ShowOptions = true;
        }
    }
    toggleSound() {
        if (this.RoomEventService.isSoundOn === true) {
            this.RoomEventService.isSoundOn = false;
        }
        else if (this.RoomEventService.isSoundOn === false) {
            this.RoomEventService.isSoundOn = true;
        }
    }
    godMode() {
        if (this.PlayerInventoryService.isGodmodeOn === true) {
            this.PlayerInventoryService.isGodmodeOn = false;
        }
        else if (this.PlayerInventoryService.isGodmodeOn === false) {
            this.PlayerInventoryService.isGodmodeOn = true;
        }
    }
    toggleDevInfo() {
        this.DungeonPathService.toggleDevInfo();
    }
    toggleRoomGaps() {
        this.DungeonPathService.toggleRoomGaps();
    }
    toggleDungeonPath() {
        this.DungeonPathService.toggleDungeonPath();
    }
    generate() {
        this.DungeonPathService.generateMap();
        this.RoomEventService.setupRoom();
    }
    redrawLines() {
        this.DungeonPathService.deleteLeaderLines();
        setTimeout(() => {
            this.DungeonPathService.makeConnections();
            this.DungeonPathService.generateLeaderLines();
        }, 0);
    }
    resetPlayerPos() {
        this.DungeonPathService.resetPlayer();
        this.RoomEventService.setupRoom();
    }
    resetAll() {
        this.RoomEventService.isPlayerBlocking = false;
        this.PlayerInventoryService.assignBasicLoot();
        this.PlayerInventoryService.playerDefence = 0;
        this.PlayerInventoryService.playerBlockAmount = 0;
        this.PlayerInventoryService.playerHealth = 5;
        this.RoomEventService.roomLootList = [];
        this.DungeonPathService.showDungeonPath = true;
        this.DungeonPathService.showRoom = false;
        this.DungeonPathService.showTitleScreen = false;
        this.PlayerInventoryService.isPlayerDead = false;
        this.PlayerInventoryService.isPlayerWon = false;
        this.DungeonPathService.generateMap();
        this.DungeonPathService.resetPlayer();
        this.RoomEventService.setupRoom();
    }
}
OptionsService.ɵfac = function OptionsService_Factory(t) { return new (t || OptionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__["RoomEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__["PlayerInventoryService"])); };
OptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OptionsService, factory: OptionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_DungeonPath_dungeon_path_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DungeonPath/dungeon-path.component */ "juck");
/* harmony import */ var _components_room_event_room_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/room-event/room-event.component */ "JdIT");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/options/options.component */ "gstJ");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/PlayerInventory.service */ "uZrH");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_6__["PlayerInventoryService"], _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_7__["DungeonPathService"], _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_8__["RoomEventService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_DungeonPath_dungeon_path_component__WEBPACK_IMPORTED_MODULE_3__["DungeonPathComponent"],
        _components_room_event_room_event_component__WEBPACK_IMPORTED_MODULE_4__["RoomEventComponent"],
        _components_options_options_component__WEBPACK_IMPORTED_MODULE_5__["OptionsComponent"],
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bwXy":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/PlayerInventory.service */ "uZrH");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/options.service */ "X3qz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TitleComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitleComponent_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.dismissTitle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Dungeon Path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TitleComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitleComponent_div_3_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You stumble away from the party to get some air and clear your head ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " coming across a cave entrance you see no harm in taking a look inside... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TitleComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TitleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TitleComponent_div_3_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TitleComponent_div_3_div_2_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TitleComponent_div_3_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTitleDismissed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTitleDismissed === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTitleDismissed === true);
} }
function TitleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YOU DIED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitleComponent_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.resetAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TitleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YOU WON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TitleComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.resetAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TitleComponent {
    constructor(DungeonPathService, RoomEventService, PlayerInventoryService, OptionsService) {
        this.DungeonPathService = DungeonPathService;
        this.RoomEventService = RoomEventService;
        this.PlayerInventoryService = PlayerInventoryService;
        this.OptionsService = OptionsService;
        this.isTitleDismissed = false;
    }
    ngOnInit() {
    }
    resetAll() {
        this.OptionsService.resetAll();
    }
    dismissTitle() {
        this.isTitleDismissed = true;
    }
    startGame() {
        console.log("start clicked.");
        this.DungeonPathService.generateMap();
        this.PlayerInventoryService.populateLootPool();
        this.PlayerInventoryService.assignBasicLoot();
        this.DungeonPathService.showTitleScreen = false;
        this.DungeonPathService.showDungeonPath = true;
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__["RoomEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_3__["PlayerInventoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 6, vars: 3, consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Aclonica&display=swap", "rel", "stylesheet"], ["class", "title-container", 4, "ngIf"], [1, "title-container"], ["class", "title", 3, "click", 4, "ngIf"], ["class", "titleDialog", 3, "click", 4, "ngIf"], [4, "ngIf"], ["src", "assets/images/backgrounds/backgroundentrance.png", 1, "cave-entrance-image"], [1, "title", 3, "click"], [1, "titleDialog", 3, "click"], ["src", "assets/images/avatars/AvatarWon.png", 1, "avatarTitle"], [1, "youDiedDialog"], [1, "flexrow"], [1, "restart-button", 3, "click"], ["src", "assets/images/avatars/AvatarDead.png", 1, "avatarDead"], ["src", "assets/images/backgrounds/background2.png", 1, "cave-background-image"], [1, "youWonDialog"], ["src", "assets/images/avatars/AvatarWon.png", 1, "avatarWon"], ["src", "assets/images/backgrounds/backgroundexit.png", 1, "cave-background-image"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TitleComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TitleComponent_div_4_Template, 9, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TitleComponent_div_5_Template, 9, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.DungeonPathService.showTitleScreen === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.isPlayerDead === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PlayerInventoryService.isPlayerWon === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".title-container[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgba(0, 0, 0, 0.466),\r\n    rgba(141, 141, 141, 0.164),\r\n    rgba(0, 0, 0, 0.466)\r\n  );\r\n  width: 88.2vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.title[_ngcontent-%COMP%], .titleDialog[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.493);\r\n  color: rgb(235, 235, 235);\r\n  font-family: 'Aclonica', sans-serif;\r\n  font-size: 8vh;\r\n  text-align: center;\r\n width: 100%;\r\n height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  justify-content: center;\r\n  z-index: 5;\r\n  animation-name: titleDialog;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.titleDialog[_ngcontent-%COMP%] {\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  font-size: 4vh;\r\n  text-align: center;\r\n  line-height: 8vh;\r\n}\r\n\r\n@keyframes titleDialog {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n.avatarTitle[_ngcontent-%COMP%] {\r\n  top: 35vh;\r\n  left: 52vw;\r\n  width: 15vw;\r\n  z-index: 1;\r\n  position: absolute;\r\n  animation-name: avatarTitle;\r\n  animation-duration: 10000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes avatarTitle {\r\n  0% {\r\n    top: 45vh;\r\n    left: 65vw;\r\n    width: 40vw;\r\n  }\r\n  100% {\r\n    top: 35vh;\r\n    left: 52vw;\r\n    width: 15vw;\r\n  }\r\n}\r\n\r\n.cave-entrance-image[_ngcontent-%COMP%] {\r\n  \r\n  height: 80vh;\r\n  width: 90vw;\r\n  \r\n  position: relative;\r\n  \r\n}\r\n\r\n@keyframes cave-entrance-image {\r\n  0% {\r\n    top: -20vh;\r\n    height: 200vh;\r\n    width: 140vw;\r\n    left: -30vw;\r\n  }\r\n  100% {\r\n    top: 5vh;\r\n    height: 190vh;\r\n    width: 110vw;\r\n    left: -15vw;\r\n  }\r\n}\r\n\r\n\r\n\r\n.cave-background-image[_ngcontent-%COMP%] {\r\n  top: 5vh;\r\n  height: 190vh;\r\n  width: 110vw;\r\n  left: -15vw;\r\n  position: relative;\r\n  animation-name: cave-background-image;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes cave-background-image {\r\n  0% {\r\n    top: -20vh;\r\n    height: 200vh;\r\n    width: 140vw;\r\n    left: -30vw;\r\n  }\r\n  100% {\r\n    top: 5vh;\r\n    height: 190vh;\r\n    width: 110vw;\r\n    left: -15vw;\r\n  }\r\n}\r\n\r\n.youDiedDialog[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.808);\r\n  color: rgb(189, 0, 0);\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  font-size: 10vh;\r\n  text-align: center;\r\n  height: 15vh;\r\n  width: 88.2vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  position: absolute;\r\n  justify-content: center;\r\n  z-index: 5;\r\n  animation-name: youDiedDialog;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes youDiedDialog {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  40% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n.avatarDead[_ngcontent-%COMP%] {\r\n  top: 65vh;\r\n  left: 35vw;\r\n  width: 30vw;\r\n  z-index: 1;\r\n  position: absolute;\r\n  animation-name: avatarDead;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes avatarDead {\r\n  0% {\r\n    top: 40vh;\r\n    left: 32vw;\r\n    width: 40vw;\r\n  }\r\n  100% {\r\n    top: 65vh;\r\n    left: 35vw;\r\n    width: 30vw;\r\n  }\r\n}\r\n\r\n.flexrow[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 50vh;\r\n  }\r\n\r\n.restart-button[_ngcontent-%COMP%] {\r\n  width: 15vh;\r\n  height: 6vh;\r\n  background-color: rgba(216, 216, 216, 0.76);\r\n  color: rgb(31, 31, 31);\r\n  font-weight: 600;\r\n  font-size: 3vh;\r\n  border-radius: 1vw;\r\n  border-style: none;\r\n  margin: 1vw;\r\n  cursor: pointer;\r\n  z-index: 4;\r\n  position: absolute;\r\n  animation-name: restart-button;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes restart-button {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  90% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.youWonDialog[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.808);\r\n  color: rgb(16, 189, 0);\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  font-size: 10vh;\r\n  text-align: center;\r\n  height: 15vh;\r\n  width: 88.2vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: center;\r\n  position: absolute;\r\n  justify-content: center;\r\n  z-index: 5;\r\n  animation-name: youWonDialog;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes youWonDialog {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  40% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n\r\n.avatarWon[_ngcontent-%COMP%] {\r\n  top: 40vh;\r\n  left: 15vw;\r\n  width: 7.5vw;\r\n  z-index: 1;\r\n  position: absolute;\r\n  animation-name: avatarWon;\r\n  animation-duration: 5000ms;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n@keyframes avatarWon {\r\n  0% {\r\n    top: 15vh;\r\n    left: 9vw;\r\n    width: 9vw;\r\n  }\r\n  100% {\r\n    top: 40vh;\r\n    left: 15vw;\r\n    width: 7.5vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCOztBQUUxQjtFQUNFOzs7OztHQUtDO0VBQ0QsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGtCQUFrQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQjs7aUNBRStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUdBO0VBQ0Usc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztFQUNYOztBQUVGO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSwyQkFBMkI7O0FBRzNCO0VBQ0Usc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7RUFDNUMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPCEtLSB0aXRsZSBzY3JlZW4gLS0+ICovXHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC40NjYpLFxyXG4gICAgcmdiYSgxNDEsIDE0MSwgMTQxLCAwLjE2NCksXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNDY2KVxyXG4gICk7XHJcbiAgd2lkdGg6IDg4LjJ2dztcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGl0bGUsLnRpdGxlRGlhbG9nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDkzKTtcclxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnQWNsb25pY2EnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIHdpZHRoOiAxMDAlO1xyXG4gaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxuICBhbmltYXRpb24tbmFtZTogdGl0bGVEaWFsb2c7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDAwbXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZURpYWxvZyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXNpemU6IDR2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyB0aXRsZURpYWxvZyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5hdmF0YXJUaXRsZSB7XHJcbiAgdG9wOiAzNXZoO1xyXG4gIGxlZnQ6IDUydnc7XHJcbiAgd2lkdGg6IDE1dnc7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGF2YXRhclRpdGxlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGF2YXRhclRpdGxlIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDQ1dmg7XHJcbiAgICBsZWZ0OiA2NXZ3O1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAzNXZoO1xyXG4gICAgbGVmdDogNTJ2dztcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdmUtZW50cmFuY2UtaW1hZ2Uge1xyXG4gIC8qIHRvcDogLTIwdmg7ICovXHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIC8qIGxlZnQ6IC0xNXZ3OyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBhbmltYXRpb24tbmFtZTogY2F2ZS1lbnRyYW5jZS1pbWFnZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhdmUtZW50cmFuY2UtaW1hZ2Uge1xyXG4gIDAlIHtcclxuICAgIHRvcDogLTIwdmg7XHJcbiAgICBoZWlnaHQ6IDIwMHZoO1xyXG4gICAgd2lkdGg6IDE0MHZ3O1xyXG4gICAgbGVmdDogLTMwdnc7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgICBoZWlnaHQ6IDE5MHZoO1xyXG4gICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgbGVmdDogLTE1dnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA8IS0tIGdhbWUgb3ZlciBzY3JlZW4gLS0+ICovXHJcblxyXG4uY2F2ZS1iYWNrZ3JvdW5kLWltYWdlIHtcclxuICB0b3A6IDV2aDtcclxuICBoZWlnaHQ6IDE5MHZoO1xyXG4gIHdpZHRoOiAxMTB2dztcclxuICBsZWZ0OiAtMTV2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGNhdmUtYmFja2dyb3VuZC1pbWFnZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNhdmUtYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAtMjB2aDtcclxuICAgIGhlaWdodDogMjAwdmg7XHJcbiAgICB3aWR0aDogMTQwdnc7XHJcbiAgICBsZWZ0OiAtMzB2dztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDV2aDtcclxuICAgIGhlaWdodDogMTkwdmg7XHJcbiAgICB3aWR0aDogMTEwdnc7XHJcbiAgICBsZWZ0OiAtMTV2dztcclxuICB9XHJcbn1cclxuXHJcblxyXG4ueW91RGllZERpYWxvZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwOCk7XHJcbiAgY29sb3I6IHJnYigxODksIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgd2lkdGg6IDg4LjJ2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA1O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB5b3VEaWVkRGlhbG9nO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgeW91RGllZERpYWxvZyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMCU7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmF2YXRhckRlYWQge1xyXG4gIHRvcDogNjV2aDtcclxuICBsZWZ0OiAzNXZ3O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhdmF0YXJEZWFkO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXZhdGFyRGVhZCB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiA0MHZoO1xyXG4gICAgbGVmdDogMzJ2dztcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogNjV2aDtcclxuICAgIGxlZnQ6IDM1dnc7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICB9XHJcbn1cclxuXHJcbi5mbGV4cm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICB9XHJcblxyXG4ucmVzdGFydC1idXR0b24ge1xyXG4gIHdpZHRoOiAxNXZoO1xyXG4gIGhlaWdodDogNnZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC43Nik7XHJcbiAgY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByZXN0YXJ0LWJ1dHRvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlc3RhcnQtYnV0dG9uIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA8IS0tIHdpbm5lciBzY3JlZW4gLS0+ICovXHJcblxyXG5cclxuLnlvdVdvbkRpYWxvZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgwOCk7XHJcbiAgY29sb3I6IHJnYigxNiwgMTg5LCAwKTtcclxuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHdpZHRoOiA4OC4ydnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxuICBhbmltYXRpb24tbmFtZTogeW91V29uRGlhbG9nO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgeW91V29uRGlhbG9nIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwJTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXZhdGFyV29uIHtcclxuICB0b3A6IDQwdmg7XHJcbiAgbGVmdDogMTV2dztcclxuICB3aWR0aDogNy41dnc7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGF2YXRhcldvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGF2YXRhcldvbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAxNXZoO1xyXG4gICAgbGVmdDogOXZ3O1xyXG4gICAgd2lkdGg6IDl2dztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDQwdmg7XHJcbiAgICBsZWZ0OiAxNXZ3O1xyXG4gICAgd2lkdGg6IDcuNXZ3O1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "gstJ":
/*!*********************************************************!*\
  !*** ./src/app/components/options/options.component.ts ***!
  \*********************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/options.service */ "X3qz");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/PlayerInventory.service */ "uZrH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OptionsComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleOptions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "lime" }; };
function OptionsComponent_div_4_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { "color": "red" }; };
function OptionsComponent_div_4_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function OptionsComponent_div_4_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_4_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function OptionsComponent_div_4_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c2 = function () { return { "color": "black" }; };
function OptionsComponent_div_4_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " / Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function OptionsComponent_div_4_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Path / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function OptionsComponent_div_4_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_4_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_4_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function OptionsComponent_div_4_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.generate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Regenerate Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_4_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.redrawLines(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redraw Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_4_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.resetPlayerPos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Player Pos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_4_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.toggleRoomGaps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toggle Room Gaps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptionsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.resetAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toggleSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sound ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptionsComponent_div_4_a_5_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OptionsComponent_div_4_a_6_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.godMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Godmode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OptionsComponent_div_4_a_9_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OptionsComponent_div_4_a_10_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.toggleDungeonPath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Toggle Dungeon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OptionsComponent_div_4_a_13_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OptionsComponent_div_4_a_14_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OptionsComponent_div_4_a_15_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OptionsComponent_div_4_a_16_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_div_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.toggleDevInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show Dev Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OptionsComponent_div_4_a_19_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OptionsComponent_div_4_a_20_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OptionsComponent_div_4_button_21_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OptionsComponent_div_4_button_22_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OptionsComponent_div_4_button_23_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OptionsComponent_div_4_button_24_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.RoomEventService.isSoundOn === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.RoomEventService.isSoundOn === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.PlayerInventoryService.isGodmodeOn === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.PlayerInventoryService.isGodmodeOn === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDungeonPath === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDungeonPath === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDungeonPath === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDungeonPath === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.DungeonPathService.showDevInfo === true);
} }
function OptionsComponent_div_5_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_5_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function OptionsComponent_div_5_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_5_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " / Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function OptionsComponent_div_5_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Path / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function OptionsComponent_div_5_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_5_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function OptionsComponent_div_5_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function OptionsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Regenerate Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Redraw Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Player Pos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Godmode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OptionsComponent_div_5_a_11_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OptionsComponent_div_5_a_12_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Toggle Dungeon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OptionsComponent_div_5_a_15_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OptionsComponent_div_5_a_16_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OptionsComponent_div_5_a_17_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OptionsComponent_div_5_a_18_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dev Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OptionsComponent_div_5_a_21_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OptionsComponent_div_5_a_22_Template, 2, 2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.PlayerInventoryService.isGodmodeOn === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.PlayerInventoryService.isGodmodeOn === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDungeonPath === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDungeonPath === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDungeonPath === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDungeonPath === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDevInfo === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.DungeonPathService.showDevInfo === false);
} }
class OptionsComponent {
    constructor(OptionsService, RoomEventService, DungeonPathService, PlayerInventoryService) {
        this.OptionsService = OptionsService;
        this.RoomEventService = RoomEventService;
        this.DungeonPathService = DungeonPathService;
        this.PlayerInventoryService = PlayerInventoryService;
    }
    ngOnInit() {
    }
    toggleOptions() {
        this.OptionsService.toggleOptions();
    }
    toggleSound() {
        this.OptionsService.toggleSound();
    }
    godMode() {
        this.OptionsService.godMode();
    }
    toggleDevInfo() {
        this.OptionsService.toggleDevInfo();
    }
    toggleRoomGaps() {
        this.OptionsService.toggleRoomGaps();
    }
    toggleDungeonPath() {
        this.OptionsService.toggleDungeonPath();
    }
    generate() {
        this.OptionsService.generate();
    }
    redrawLines() {
        this.OptionsService.redrawLines();
    }
    resetPlayerPos() {
        this.OptionsService.resetPlayerPos();
    }
    resetAll() {
        this.OptionsService.resetAll();
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_options_service__WEBPACK_IMPORTED_MODULE_1__["OptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__["RoomEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_3__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_4__["PlayerInventoryService"])); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 6, vars: 4, consts: [[1, "OptionsWrapper"], ["class", "showOptionsButton", "src", "assets/images/misc/gear.png", 3, "click", 4, "ngIf"], ["class", "hideOptionsButton", "src", "assets/images/misc/gear.png", 3, "click", 4, "ngIf"], ["class", "OptionButtonsContainer", 4, "ngIf"], ["src", "assets/images/misc/gear.png", 1, "showOptionsButton", 3, "click"], ["src", "assets/images/misc/gear.png", 1, "hideOptionsButton", 3, "click"], [1, "OptionButtonsContainer"], [1, "optionButton", 3, "click"], [3, "ngStyle", 4, "ngIf"], ["class", "optionButton", 3, "click", 4, "ngIf"], [3, "ngStyle"], [1, "optionButtonHide"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OptionsComponent_img_2_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OptionsComponent_img_3_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OptionsComponent_div_4_Template, 25, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OptionsComponent_div_5_Template, 23, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OptionsService.ShowOptions === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OptionsService.ShowOptions === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OptionsService.ShowOptions === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.OptionsService.HideOptions === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: [".OptionsWrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n}\r\n\r\n.showOptionsButton[_ngcontent-%COMP%], .hideOptionsButton[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 1vw 2vw 0vw 1.5vw;\r\n  background-color: rgb(32, 32, 32);\r\n  animation-name: ShowOptionsButton-animation;\r\n  animation-duration: 500ms;\r\n  animation-iteration-count: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes ShowOptionsButton-animation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n.hideOptionsButton[_ngcontent-%COMP%] {\r\n  animation-name: HideOptionsButton-animation;\r\n}\r\n\r\n@keyframes HideOptionsButton-animation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-180deg);\r\n  }\r\n}\r\n\r\n.OptionButtonsContainer[_ngcontent-%COMP%] {\r\n  margin: 0.8vw 0vw 0vw 0vw;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.optionButton[_ngcontent-%COMP%], .optionButtonHide[_ngcontent-%COMP%] {\r\n  color: black;\r\n  padding: 5px 10px 5px 10px;\r\n  margin: 5px;\r\n  border-style: none;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  animation-name: button-animation;\r\n  animation-duration: 500ms;\r\n  animation-iteration-count: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes button-animation {\r\n  0% {\r\n    padding: 0px;\r\n  margin: 0px;\r\n    width: 0vh;\r\n    height: 28px;\r\n    font-size: 0px;\r\n    font-weight: 100;\r\n    white-space: nowrap;\r\n  }\r\n  30% {\r\n    font-size: 0px;\r\n    font-weight: 100;\r\n    white-space: nowrap;\r\n  }\r\n  60% {\r\n    height: 28px;\r\n  }\r\n}\r\n\r\n.optionButtonHide[_ngcontent-%COMP%] {\r\n  animation-name: buttonHide-animation;\r\n  animation-duration: 500ms;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n@keyframes buttonHide-animation {\r\n  0% {\r\n    height: 28px;\r\n  }\r\n  30% {\r\n    font-size: 0.001px;\r\n    font-weight: 100;\r\n    white-space: nowrap;\r\n  }\r\n  70% {\r\n    padding: 0px;\r\n    margin: 0px;\r\n      width: 0vh;\r\n      height: 28px;\r\n      font-size: 0px;\r\n    font-weight: 100;\r\n    white-space: nowrap;\r\n  }\r\n  100% {\r\n    padding: 0px;\r\n    margin: 0px;\r\n      width: 0vh;\r\n      height: 28px;\r\n      font-size: 0px;\r\n    font-weight: 100;\r\n    white-space: nowrap;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQywyQ0FBMkM7RUFDM0MseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZCxXQUFXO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6Qix5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztNQUNULFVBQVU7TUFDVixZQUFZO01BQ1osY0FBYztJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztNQUNULFVBQVU7TUFDVixZQUFZO01BQ1osY0FBYztJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk9wdGlvbnNXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLyogbWFyZ2luOiAxdncgMHZ3IDB2dyAwdnc7ICovXHJcbn1cclxuXHJcbi5zaG93T3B0aW9uc0J1dHRvbixcclxuLmhpZGVPcHRpb25zQnV0dG9uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAxdncgMnZ3IDB2dyAxLjV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IFNob3dPcHRpb25zQnV0dG9uLWFuaW1hdGlvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIFNob3dPcHRpb25zQnV0dG9uLWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRlT3B0aW9uc0J1dHRvbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVPcHRpb25zQnV0dG9uLWFuaW1hdGlvbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBIaWRlT3B0aW9uc0J1dHRvbi1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLk9wdGlvbkJ1dHRvbnNDb250YWluZXIge1xyXG4gIG1hcmdpbjogMC44dncgMHZ3IDB2dyAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25CdXR0b24sXHJcbi5vcHRpb25CdXR0b25IaWRlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJ1dHRvbi1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBidXR0b24tYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMHZoO1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9uQnV0dG9uSGlkZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGJ1dHRvbkhpZGUtYW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnV0dG9uSGlkZS1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGZvbnQtc2l6ZTogMC4wMDFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHdpZHRoOiAwdmg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgICAgd2lkdGg6IDB2aDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBmb250LXNpemU6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hxfI":
/*!*************************************************!*\
  !*** ./src/app/services/DungeonPath.service.ts ***!
  \*************************************************/
/*! exports provided: DungeonPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonPathService", function() { return DungeonPathService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_Classes_Level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Classes/Level */ "BUDA");
/* harmony import */ var _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Classes/Room */ "oRw1");
/* harmony import */ var _components_Classes_Connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Classes/Connection */ "mL/g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _PlayerInventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerInventory.service */ "uZrH");






class DungeonPathService {
    constructor(document, PlayerInventoryService) {
        this.document = document;
        this.PlayerInventoryService = PlayerInventoryService;
        this.isSplitBlock = false;
        this.isJoinBlock = true;
        this.isCrossbackBlock = false;
        this.rmBlockList = [];
        this.levelList = [];
        this.connectionsList = [];
        this.LeaderLineList = [];
        // player position
        this.posID = "11";
        // options
        this.showTitleScreen = true;
        this.showDevInfo = false;
        this.showRoomGaps = true;
        this.showDungeonPath = false;
        this.showRoom = false;
    }
    ngOnInit() {
    }
    setMapSize() {
        this.mapSize = 10;
    }
    wipeLists() {
        this.levelList.splice(0, this.levelList.length);
        this.rmBlockList.splice(0, this.rmBlockList.length);
    }
    toggleDevInfo() {
        if (this.showDevInfo === false) {
            this.showDevInfo = true;
        }
        else {
            this.showDevInfo = false;
        }
    }
    toggleRoomGaps() {
        if (this.showRoomGaps === false) {
            this.showRoomGaps = true;
        }
        else {
            this.showRoomGaps = false;
        }
    }
    toggleDungeonPath() {
        if (this.showDungeonPath === false) {
            this.showDungeonPath = true;
            this.showRoom = false;
            this.makeConnections();
            this.generateLeaderLines();
        }
        else {
            this.showRoom = true;
            this.showDungeonPath = false;
            this.deleteLeaderLines();
        }
    }
    movePlayer(x) {
        // change a room to used when leaving.
        this.levelList.forEach(level => {
            level.roomList.forEach(room => {
                if (room.roomID === this.posID) {
                    room.used = true;
                }
            });
        });
        //then move the player icon.
        this.posID = x;
        this.nextID1 = "00";
        this.nextID2 = "00";
        setTimeout(() => { this.updateMoveOptions(); }, 500);
        setTimeout(() => { this.toggleDungeonPath(); }, 500);
    }
    updateMoveOptions() {
        if (this.posID !== "101") {
            // // console.log("posid78341798431 = " + this.posID)
            let x = this.connectionsList.filter(conx => conx.start === this.posID);
            this.nextID1 = x[0].end;
            // // console.log(this.nextID1);
            if (x.length > 1) {
                this.nextID2 = x[1].end;
                // // console.log(this.nextID2);
            }
            // // console.log(x);
        }
        else {
            // // console.log("final room reached.")
        }
    }
    resetPlayer() {
        this.posID = '11';
        this.nextID1 = "21";
        this.nextID2 = "22";
    }
    // creates a room ID for a room based on level and roomNo.
    createID(LvlNo, RmNo) {
        let ID = ((LvlNo.toString()) + RmNo.toString());
        return ID;
    }
    // this creates a list of all connections between rooms, to be used by leaderline
    makeConnections() {
        this.levelList.forEach(element => {
            if (element.levelNo === (this.levelList.length)) {
                // do nothing
            }
            else {
                element.roomList.forEach(Room => {
                    if (Room.conxType !== "gap") {
                        let X = new _components_Classes_Connection__WEBPACK_IMPORTED_MODULE_3__["Connection"]((Room.roomID), ((Room.levelNo + 1).toString()) + (Room.conxRm1.toString()));
                        this.connectionsList.push(X);
                        if (Room.conxRm2 > 0) {
                            let Y = new _components_Classes_Connection__WEBPACK_IMPORTED_MODULE_3__["Connection"]((Room.roomID), ((Room.levelNo + 1).toString()) + (Room.conxRm2.toString()));
                            this.connectionsList.push(Y);
                        }
                    }
                });
            }
        });
        setTimeout(() => { this.generateLeaderLines(); }, 0);
    }
    generateLeaderLines() {
        this.connectionsList.forEach(connex => {
            let line2 = new LeaderLine(LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.start.toString())), LeaderLine.pointAnchor(this.document.getElementById("Location" + connex.end.toString())), {
                color: 'black',
                size: 30,
                path: "straight",
                startPlug: "behind",
                endPlug: "behind",
                startSocketGravity: [100, 0],
                endSocketGravity: [0, 0]
            });
            this.LeaderLineList.push(line2);
        });
    }
    deleteLeaderLines() {
        this.LeaderLineList.forEach(line => {
            line.remove();
            this.LeaderLineList = [];
            this.connectionsList = [];
        });
    }
    // this assigns room types 
    setRoomType(lvl, rmNo) {
        if (lvl === 1) {
            lvl = 1;
        }
        else if (Math.random() > 0.80 &&
            lvl !== (this.mapSize / 2 + 1) &&
            lvl !== (this.mapSize - 1) &&
            lvl !== (this.mapSize)) {
            lvl = 20;
        }
        else if (Math.random() > 0.8 &&
            lvl !== (this.mapSize / 2 + 1) &&
            lvl !== (this.mapSize - 1) &&
            lvl >= (this.mapSize / 2 - 1) &&
            lvl !== (this.mapSize)) {
            lvl = this.mapSize - 1;
        }
        switch (lvl) {
            case 1:
                return "start";
            case 20:
                return "treasure";
            case (this.mapSize / 2 + 1):
                return "boss";
            case this.mapSize:
                return "finalboss";
            case this.mapSize - 1:
                return "fire";
            default:
                return "monster";
        }
    }
    // create random connections between standard rooms to promote more path choices. - Idea was scrapped
    randomJoin(lvl, rmNo, conxRm1, maxRm) {
        let newconxRm2 = 0;
        // // wipe the blocklist of all entries at level 6
        // if (lvl === this.mapSize) {
        //   this.rmBlockList = [];
        //   return newconxRm2;
        // }
        // // skip if room included in block list.
        // if (this.rmBlockList.includes(rmNo)) {
        // } else if (lvl > 3) {
        //   // if Rm = 1 then add a +1 join, and then block a join afterwards.
        //   if (Math.random() > 0.3 && rmNo === 1) {
        //     newconxRm2 = conxRm1 + 1;  //    +
        //     this.rmBlockList.push(rmNo);
        //     this.isCrossbackBlock = true;
        //     this.isJoinBlock = true;
        //     return newconxRm2;
        //     // If Rm = Max then add a -1 join, but only if a +1 was not just added.
        //   } else if (Math.random() > 0.3 && rmNo === maxRm) {
        //     if (this.isCrossbackBlock === false) {
        //       this.rmBlockList.push(rmNo);
        //       newconxRm2 = conxRm1 - 1   //    -
        //       return newconxRm2;
        //     }
        //     // if rmNo > 1 && < maxRm, then add a +1 or -1 
        //   } else if (Math.random() > 0.3 && rmNo > 1 && rmNo < maxRm) {
        //     if (Math.random() > 0.5) {
        //       this.rmBlockList.push(rmNo);
        //       newconxRm2 = conxRm1 + 1   //    +
        //       this.isCrossbackBlock = true;
        //       this.isJoinBlock = true;
        //       return newconxRm2;
        //     } else {
        //       // if block doesnt exist then create link. if block exists then cancel block. 
        //       if (this.isCrossbackBlock === false) {
        //         this.rmBlockList.push(rmNo);
        //         newconxRm2 = conxRm1 - 1   //    -
        //       }
        //       this.isCrossbackBlock = false
        //       return newconxRm2;
        //     }
        //   }
        // }
        return newconxRm2;
    }
    generateMap() {
        this.deleteLeaderLines();
        this.wipeLists();
        this.setMapSize();
        this.LevelNo = 1;
        this.maxRmThisLevel = 1;
        this.maxRmNextLevel = 1;
        // this.PlayerInventoryService.setAvatar()
        // ========================= create levels =========================
        while (this.LevelNo <= this.mapSize) {
            // // console.log(" ******** The start of level number " + this.LevelNo)
            let thislevel = new _components_Classes_Level__WEBPACK_IMPORTED_MODULE_1__["Level"](this.LevelNo);
            var roomNo = 1;
            var ConnectionRoomNo = 1;
            this.maxRmThisLevel = this.maxRmNextLevel;
            // ===================== create rooms =====================
            // ========================= grow =========================
            while (roomNo <= this.maxRmThisLevel && (this.LevelNo <= this.mapSize - 4)) {
                // // console.log("grow mode")
                // // console.log("LevelNo  " + this.LevelNo + " RoomNo = " + roomNo)
                // // console.log("this.maxRmThisLevel " + this.maxRmThisLevel)
                // create a gap 
                if (roomNo === 1 && this.LevelNo <= this.mapSize / 3 && this.showRoomGaps === true) {
                    for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--)
                        thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, 0, 0, 0, "gap", "GAP1", ""));
                }
                // if room below lvl 3 increase split rate.
                if (this.LevelNo === 1) {
                    thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "first", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                    roomNo += 1;
                    ConnectionRoomNo += 2;
                    this.maxRmNextLevel += 1;
                    this.isSplitBlock = true;
                }
                else if ((Math.random() > 0.7) && this.LevelNo === 2 || this.maxRmThisLevel < (this.mapSize / 5)) {
                    thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "splithi%", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                    roomNo += 1;
                    ConnectionRoomNo += 2;
                    this.maxRmNextLevel += 1;
                    this.isSplitBlock = false;
                }
                else {
                    // detect if max - dont split if room number at 50% of map length  ---  use this to set map max width
                    if (this.maxRmThisLevel >= (this.mapSize / 2)) {
                        // join - or stay
                        if (roomNo >= 3 && Math.random() > 0.5 && this.isJoinBlock === false) {
                            thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "GrJoin", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                            roomNo += 1;
                            this.maxRmNextLevel -= 1;
                            this.isJoinBlock = true;
                        }
                        else {
                            thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "GrMax", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                            roomNo += 1;
                            ConnectionRoomNo += 1;
                            this.isJoinBlock = false;
                        }
                    }
                    else {
                        // split - or stay
                        if (Math.random() > 0.5 && this.isSplitBlock === false) {
                            thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, ConnectionRoomNo + 1, "GrSplit", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                            roomNo += 1;
                            ConnectionRoomNo += 2;
                            this.maxRmNextLevel += 1;
                            this.isSplitBlock = true;
                        }
                        else {
                            thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, this.randomJoin(this.LevelNo, roomNo, ConnectionRoomNo, this.maxRmThisLevel), "GrRoom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                            roomNo += 1;
                            ConnectionRoomNo += 1;
                            this.isSplitBlock = false;
                        }
                    }
                }
                // create a gap last rooms of level 1-3
                if (roomNo - 1 === this.maxRmThisLevel && this.LevelNo <= this.mapSize / 3 && this.showRoomGaps === true) {
                    for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--)
                        thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, 0, 0, 0, "gap", "GAP2", ""));
                }
            }
            // ========================= shrink =========================
            while (this.maxRmThisLevel > 0 && (this.LevelNo > this.mapSize - 4)) {
                // // console.log("shrink mode")
                // // console.log("LevelNo  " + this.LevelNo + " RoomNo = " + roomNo)
                // // console.log("this.maxRmThisLevel " + this.maxRmThisLevel)
                let NumGapsAfterL = 0;
                // create a gap before first room levels -3 - max level
                if (roomNo === 1 && this.showRoomGaps === true) {
                    for (let i = ((this.mapSize / 4) - (this.maxRmThisLevel)); i >= 0; i--) {
                        thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, 0, 0, 0, "gap", "GAP3", ""));
                        NumGapsAfterL = NumGapsAfterL + 1;
                    }
                }
                // join all rooms to final room
                if (this.LevelNo === (this.mapSize - 1)) {
                    thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, 1, 0, "2ndlast", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                    roomNo += 1;
                    ConnectionRoomNo += 1;
                    this.maxRmNextLevel = 1;
                    // join
                }
                else if (Math.random() > 0.6 && roomNo !== 1 && this.isJoinBlock === false) {
                    thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo - 1, 0, "ShJoin", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                    roomNo += 1;
                    this.maxRmNextLevel -= 1;
                    this.isJoinBlock = true;
                }
                else {
                    thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, roomNo, ConnectionRoomNo, 0, "ShRoom", this.setRoomType(this.LevelNo, roomNo), this.createID(this.LevelNo, roomNo)));
                    roomNo += 1;
                    ConnectionRoomNo += 1;
                    this.isJoinBlock = false;
                }
                // create a gap after last rooms of final levels.
                if (this.maxRmThisLevel === 1 && this.LevelNo >= this.mapSize / 2 && this.showRoomGaps === true) {
                    for (let i = ((this.mapSize / 4) - roomNo + 1); i >= 0; i--) {
                        // // console.log("i1 =  " + i);
                        thislevel.roomList.push(new _components_Classes_Room__WEBPACK_IMPORTED_MODULE_2__["Room"](this.LevelNo, 0, 0, 0, "gap", "GAP4", ""));
                    }
                }
                this.maxRmThisLevel -= 1;
            }
            // console.log(" ******** the end of level number " + this.LevelNo)
            // console.log(this.levelList)
            // console.log("this.maxRmThisLevel " + this.maxRmThisLevel)
            // console.log("this.roomNo " + roomNo)
            this.LevelNo += 1;
            this.levelList.push(thislevel);
        }
        // console.log("================ end of map draw ================")
        // console.log(this.levelList)
        this.makeConnections();
        this.updateMoveOptions();
    }
}
DungeonPathService.ɵfac = function DungeonPathService_Factory(t) { return new (t || DungeonPathService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_PlayerInventory_service__WEBPACK_IMPORTED_MODULE_5__["PlayerInventoryService"])); };
DungeonPathService.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DungeonPathService, selectors: [["app-leaderline"]], decls: 1, vars: 0, template: function DungeonPathService_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "x");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWFkZXJsaW5lLmNvbXBvbmVudC5jc3MifQ== */"] });
DungeonPathService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DungeonPathService, factory: DungeonPathService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "juck":
/*!******************************************************************!*\
  !*** ./src/app/components/DungeonPath/dungeon-path.component.ts ***!
  \******************************************************************/
/*! exports provided: DungeonPathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonPathComponent", function() { return DungeonPathComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DungeonPath.service */ "hxfI");
/* harmony import */ var _services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/RoomEvent.service */ "L3Hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "randomgap": a0 }; };
function DungeonPathComponent_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r6.DungeonPathService.showDevInfo === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" lv ", room_r3.levelNo, " rm ", room_r3.roomNo, " tp ", room_r3.roomType, "");
} }
function DungeonPathComponent_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_div_1_div_1_div_1_Template, 3, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.DungeonPathService.showDevInfo == true);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" lv ", room_r3.levelNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" rm ", room_r3.roomNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r3.roomID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", room_r3.conxType, " ", room_r3.roomType, " ");
} }
function DungeonPathComponent_div_1_div_1_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DungeonPathComponent_div_1_div_1_div_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.movePlayer(room_r3.roomID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DungeonPathComponent_div_1_div_1_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_div_1_div_3_div_4_span_1_Template, 1, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DungeonPathComponent_div_1_div_1_div_3_div_4_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DungeonPathComponent_div_1_div_1_div_3_div_4_span_3_Template, 1, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DungeonPathComponent_div_1_div_1_div_3_div_4_span_4_Template, 1, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DungeonPathComponent_div_1_div_1_div_3_div_4_span_5_Template, 1, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DungeonPathComponent_div_1_div_1_div_3_div_4_span_6_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "monster");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "finalboss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "treasure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomType === "fire");
} }
function DungeonPathComponent_div_1_div_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
} }
function DungeonPathComponent_div_1_div_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r3.conxRm1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", room_r3.conxRm2, " ");
} }
function DungeonPathComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_div_1_div_3_div_1_Template, 8, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DungeonPathComponent_div_1_div_1_div_3_button_2_Template, 1, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DungeonPathComponent_div_1_div_1_div_3_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DungeonPathComponent_div_1_div_1_div_3_div_4_Template, 7, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DungeonPathComponent_div_1_div_1_div_3_div_5_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DungeonPathComponent_div_1_div_1_div_3_div_6_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.DungeonPathService.showDevInfo === true && room_r3.roomNo !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomID === ctx_r5.DungeonPathService.nextID1 || room_r3.roomID === ctx_r5.DungeonPathService.nextID2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomID === ctx_r5.DungeonPathService.posID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.DungeonPathService.showDevInfo === false && room_r3.roomNo !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.used === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.DungeonPathService.showDevInfo === true && room_r3.roomNo !== 0);
} }
function DungeonPathComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DungeonPathComponent_div_1_div_1_div_3_Template, 7, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const room_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("id", "Location", room_r3.roomID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomNo === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", room_r3.roomNo !== 0);
} }
function DungeonPathComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_div_1_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", level_r1.roomList);
} }
class DungeonPathComponent {
    constructor(DungeonPathService, RoomEventService) {
        this.DungeonPathService = DungeonPathService;
        this.RoomEventService = RoomEventService;
    }
    ngOnInit() {
    }
    movePlayer(x) {
        this.DungeonPathService.movePlayer(x);
    }
}
DungeonPathComponent.ɵfac = function DungeonPathComponent_Factory(t) { return new (t || DungeonPathComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_DungeonPath_service__WEBPACK_IMPORTED_MODULE_1__["DungeonPathService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_RoomEvent_service__WEBPACK_IMPORTED_MODULE_2__["RoomEventService"])); };
DungeonPathComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DungeonPathComponent, selectors: [["app-dungeon-path"]], decls: 2, vars: 1, consts: [["id", "DPContainer", 1, "DPContainer"], ["class", "level", 4, "ngFor", "ngForOf"], [1, "level"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flexrow"], ["class", "room", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "room"], ["class", "rmButton", "id", "button", 3, "click", 4, "ngIf"], ["class", "player", 4, "ngIf"], ["class", "used", 4, "ngIf"], ["class", "nextroominfo", 4, "ngIf"], ["id", "button", 1, "rmButton", 3, "click"], [1, "player"], ["src", "assets/images/avatars/ManIcon2.png", 1, "playerIcon"], ["class", "iconify", "data-icon", "ri-skull-2-line", "data-inline", "false", 4, "ngIf"], ["class", "iconify", "color", "orange", "data-icon", "ri-skull-2-line", "data-inline", "false", 4, "ngIf"], ["class", "iconify", "color", "red", "data-icon", "ri-skull-2-line", "data-inline", "false", 4, "ngIf"], ["class", "iconify", "color", "gold", "data-icon", "mdi-treasure-chest", "data-inline", "false", 4, "ngIf"], ["class", "iconify", "color", "red", "data-icon", "majesticons:fire", "data-inline", "false", 4, "ngIf"], ["data-icon", "ri-skull-2-line", "data-inline", "false", 1, "iconify"], ["color", "orange", "data-icon", "ri-skull-2-line", "data-inline", "false", 1, "iconify"], ["color", "red", "data-icon", "ri-skull-2-line", "data-inline", "false", 1, "iconify"], ["color", "gold", "data-icon", "mdi-treasure-chest", "data-inline", "false", 1, "iconify"], ["color", "red", "data-icon", "majesticons:fire", "data-inline", "false", 1, "iconify"], [1, "used"], [1, "nextroominfo"]], template: function DungeonPathComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DungeonPathComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DungeonPathService.levelList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".DPContainer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 80vh;\r\n  margin: 0;\r\n  background-color: rgb(207, 169, 97);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.flexrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: rgba(61, 54, 54, 0.003);\r\n}\r\n\r\n.level[_ngcontent-%COMP%] {\r\n  width: 7vw;\r\n  height: 100%;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.randomgap[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  height: 0px;\r\n  background-color: rgb(255, 255, 255, 0.3);\r\n  color: white;\r\n  text-align: center;\r\n  font-size: small;\r\n}\r\n\r\n\r\n\r\n.room[_ngcontent-%COMP%], .nextroominfo[_ngcontent-%COMP%], .used[_ngcontent-%COMP%], .rmButton[_ngcontent-%COMP%], .rmButton[_ngcontent-%COMP%]:hover {\r\n  min-width: 60px;\r\n  min-height: 60px;\r\n  height: 5vw;\r\n  width: 5vw;\r\n  border-radius: 100px;\r\n  \r\n  border-style: none;\r\n  \r\n  background-color: black;\r\n}\r\n\r\n.room[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 5;\r\n}\r\n\r\n.player[_ngcontent-%COMP%] {\r\n  min-width: 40px;\r\n  min-height: 40px;\r\n  height: 4vw;\r\n  width: 4vw;\r\n  border-radius: 60px;\r\n  border-width: 10px;\r\n  border-style: solid;\r\n  border-color: rgb(0, 0, 0);\r\n  color: aliceblue;\r\n  background-color: rgb(24, 209, 55);\r\n  position: absolute;\r\n  text-align: center;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.playerIcon[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  height: 80%;\r\n  text-align: center;\r\n  z-index: 10;\r\n}\r\n\r\n.iconify[_ngcontent-%COMP%] {\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n  height: 4vw;\r\n  width: 4vw;\r\n  border-radius: 1.75vw;\r\n  z-index: 4;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  margin: 0.5vw;\r\n}\r\n\r\n.used[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  z-index: 9;\r\n  position: absolute;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  background-color: rgba(0, 0, 0)\r\n}\r\n\r\n.rmButton[_ngcontent-%COMP%] {\r\n  border-style: solid;\r\n  border-color: rgb(255, 255, 255);\r\n  background-color: rgba(0, 0, 0, 0);\r\n  z-index: 7;\r\n  cursor: pointer;\r\n  position: fixed;\r\n  animation-name: roomSelect;\r\n  animation-duration: 1.5s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes roomSelect {\r\n  0% {\r\n    border-color: rgb(255, 255, 255);\r\n  }\r\n  50% {\r\n    border-color: rgb(255, 255, 255);\r\n    border-width: 0.5vw;\r\n    transform: scale(1.23);\r\n  }\r\n  100% {\r\n    border-color: rgb(255, 255, 255);\r\n  }\r\n}\r\n\r\n.rmButton[_ngcontent-%COMP%]:hover {\r\n  border-width: 7.5px;\r\n  border-style: solid;\r\n  border-color: rgb(255, 255, 255);\r\n  background-color: rgba(0, 0, 0, 0);\r\n  z-index: 6;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.nextroominfo[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 45px;\r\n  border-radius: 10px;\r\n  border-style: none;\r\n  background-color: rgb(112, 21, 21);\r\n  color: white;\r\n  text-align: center;\r\n  padding-top: 5px;\r\n  margin-left: 7px;\r\n  z-index: 5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR1bmdlb24tcGF0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsMEJBQTBCOztBQUMxQjs7Ozs7RUFLRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoiZHVuZ2Vvbi1wYXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLkRQQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE2OSwgOTcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZsZXhyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCA1NCwgNTQsIDAuMDAzKTtcclxufVxyXG5cclxuLmxldmVsIHtcclxuICB3aWR0aDogN3Z3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzMSwgNCwgMC4xMzcpOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmFuZG9tZ2FwIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi8qIHJvb20gc2l6ZSBzaGFyZWQgaW5mbyAqL1xyXG4ucm9vbSxcclxuLm5leHRyb29taW5mbyxcclxuLnVzZWQsXHJcbi5ybUJ1dHRvbixcclxuLnJtQnV0dG9uOmhvdmVyIHtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBoZWlnaHQ6IDV2dztcclxuICB3aWR0aDogNXZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIC8qIGJvcmRlci1jb2xvcjogcmdiYSgxOTAsIDE2MCwgMTMwKTsgKi9cclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgLyogYm9yZGVyLXdpZHRoOiAxMHB4OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucm9vbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnBsYXllciB7XHJcbiAgbWluLXdpZHRoOiA0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgd2lkdGg6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyMDksIDU1KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllckljb24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uaWNvbmlmeSB7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgd2lkdGg6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiAxLjc1dnc7XHJcbiAgei1pbmRleDogNDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtYXJnaW46IDAuNXZ3O1xyXG59XHJcblxyXG4udXNlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDApXHJcbn1cclxuXHJcbi5ybUJ1dHRvbiB7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHotaW5kZXg6IDc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBhbmltYXRpb24tbmFtZTogcm9vbVNlbGVjdDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9vbVNlbGVjdCB7XHJcbiAgMCUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci13aWR0aDogMC41dnc7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjMpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxufVxyXG5cclxuLnJtQnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXItd2lkdGg6IDcuNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB6LWluZGV4OiA2O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLm5leHRyb29taW5mbyB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDIxLCAyMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mL/g":
/*!**************************************************!*\
  !*** ./src/app/components/Classes/Connection.ts ***!
  \**************************************************/
/*! exports provided: Connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
class Connection {
    constructor(_start, _end) {
        this.start = _start;
        this.end = _end;
    }
}


/***/ }),

/***/ "oRw1":
/*!********************************************!*\
  !*** ./src/app/components/Classes/Room.ts ***!
  \********************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
class Room {
    constructor(_levelNo, _roomNo, _conxRm1, _conxRm2, _conxType, _roomType, _roomID) {
        this.used = false;
        this.levelNo = _levelNo;
        this.roomNo = _roomNo;
        this.conxRm1 = _conxRm1;
        this.conxRm2 = _conxRm2;
        this.conxType = _conxType;
        this.roomType = _roomType;
        this.roomID = _roomID;
    }
}


/***/ }),

/***/ "uZrH":
/*!*****************************************************!*\
  !*** ./src/app/services/PlayerInventory.service.ts ***!
  \*****************************************************/
/*! exports provided: PlayerInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInventoryService", function() { return PlayerInventoryService; });
/* harmony import */ var _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Classes/Item */ "2vLA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayerInventoryService {
    constructor() {
        this.playerHealth = 5;
        this.playerDefence = 0;
        this.playerBlockAmount = 0;
        this.playerAvatar = "assets/images/avatars/Avatar1.png";
        this.isGodmodeOn = false;
        this.isPlayerDead = false;
        this.isPlayerWon = false;
        this.lootPool = [];
    }
    populateLootPool() {
        //foods
        this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("food", "Painkillers", "You are in a computer game, Max.", 0, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("food", "Heart Container", "Hey, Listen!", 0, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("food", "Mushroom", "Wahoo!", 0, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("food", "Rations", "Do you think love can bloom, even on a battlefield?", 0, 0, 1)),
            // weapons
            // t1
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Fist", "Just wail on 'em", 1, 1, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Bottle", "An empty beer bottle", 1, 1, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Rock", "A rock you found on the floor", 1, 1, 0)),
            // t2
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Baseball Bat", "Swing the nail bit at the enemy", 2, 2, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Meat Cleaver", "For cleaving", 2, 2, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Hatchet", "A small hatchet", 2, 2, 0)),
            //t3
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Swordfish", "How did this get in here?", 3, 3, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Claymore", "A two handed greatsword", 3, 3, 0)),
            // this.lootPool.push(new Item("weapon", "Great Axe", "A two handed greataxe", 3, 3, 0)),
            // t4
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("weapon", "Lightsaber", "Has a 25% chance to decapitate. Vrooom!", 4, 3, 0)),
            // armour
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Potato Sack", "Smells musty", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Dinner Shirt", "It's not pink, it's salmon!", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Shirtless", "As nature intended", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Leather Armour", "Reduces damage taken by 1", 2, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Steel Plate", "reduces damage taken by 2", 3, 0, 2)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("armour", "Plot Armour", "50% chance to avoid attacks.", 4, 0, 0)),
            // offhands
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("offhand", "Wooden Buckler", "A small buckler that blocks 1 damage and stuns enemies on a successful block", 1, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("offhand", "Tower Shield", "A large shield that blocks 2 damage and stuns enemies on a successful block", 2, 0, 2)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("offhand", "Handgun", "Passive: Shoot first when entering a room", 4, 1, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("offhand", "Torch", "Passive: 25% chance to dazzle an emeny causing them to miss", 4, 0, 0)),
            // helms
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("helm", "Beanie", "keeps you warm, has a pom-pom", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("helm", "Plastic Viking Helmet", "It's a bit too small. Made of plastic", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("helm", "Christmas Hat", "It had little flashing lights but the batteries have died", 1, 0, 0)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("helm", "Soup Pot", "It covers your whole skull!", 2, 0, 1)),
            this.lootPool.push(new _components_Classes_Item__WEBPACK_IMPORTED_MODULE_0__["Item"]("helm", "Miners Helmet", "25% chance to dazzle an emeny causing them to miss", 4, 0, 1));
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
        let t1Weps = this.lootPool.filter(element => element.itemType === "weapon" && element.itemTier === 1);
        let randomW = Math.floor(Math.random() * t1Weps.length);
        this.weapon = (t1Weps[randomW]);
        // this.weapon = this.lootPool.find(element => element.itemName === "Lightsaber")
        let t1Helms = this.lootPool.filter(element => element.itemType === "helm" && element.itemTier === 1);
        let randomH = Math.floor(Math.random() * t1Helms.length);
        this.helm = (t1Helms[randomH]);
        let t1Armour = this.lootPool.filter(element => element.itemType === "armour" && element.itemTier === 1);
        let randomA = Math.floor(Math.random() * t1Armour.length);
        this.armour = (t1Armour[randomA]);
        this.offhand = this.lootPool.find(element => element.itemName === "Wooden Buckler");
        // this.offhand = this.lootPool.find(element => element.itemName === "Handgun")
    }
    gainHealth(heal) {
        setTimeout(() => {
            this.playerHealth += heal;
        }, 750);
    }
    takeDamage(damageDealt) {
        if (damageDealt >= this.playerHealth) {
            this.playerHealth = this.playerHealth - damageDealt;
        }
        else {
            setTimeout(() => {
                this.playerHealth = this.playerHealth - damageDealt;
            }, 1000);
        }
    }
    getPlayerAvoidChance() {
        let result = 0;
        if (this.offhand.itemName == "Torch") {
            result += .25;
        }
        if (this.helm.itemName == "Miners Helmet") {
            result += .25;
        }
        if (this.armour.itemName == "Plot Armour") {
            result += .5;
        }
        return result;
    }
}
PlayerInventoryService.ɵfac = function PlayerInventoryService_Factory(t) { return new (t || PlayerInventoryService)(); };
PlayerInventoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerInventoryService, factory: PlayerInventoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
// { path: "DungeonPathComponent", component: DungeonPathComponent },
// { path: "**", redirectTo: "TitleComponent" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map