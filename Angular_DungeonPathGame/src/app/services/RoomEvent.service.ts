
import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Connection } from '../components/Classes/Connection';

import { DungeonPathService } from "../services/DungeonPath.service";
import { PlayerService } from "../services/player.service";



@Injectable({
  providedIn: 'root'
})

export class RoomEventService {


  roomType: string | null;
  LevelNo: number | null;
  roomNo: number | null;

  constructor(public DungeonPathService: DungeonPathService, public PlayerService: PlayerService) { }

  ngOnInit(): void {
    // this.roomType = this.DungeonPathService.
  }

}
