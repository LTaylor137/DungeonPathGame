import { Injectable } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Level } from '../components/Classes/Level';
import { Room } from '../components/Classes/Room';
import { Connection } from '../components/Classes/Connection';
import { DungeonPathService } from '../services/DungeonPath.service';
// import { resourceLimits } from 'node:worker_threads';


@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  // posID: string = "11";
  // nextID1: string;
  // nextID2: string;

  // constructor(private DungeonPathService: DungeonPathService) {
  // }

  // OnInit() {
  //   this.updateMoveOptions();
  // }

  // updateMoveOptions() {
  //   let x = this.DungeonPathService.ConnectionsList.filter(conx => conx.start === this.posID)
  //   this.nextID1 = x[0].end
  //   this.nextID2 = x[1].end
  //   console.log(x);
  //   console.log(this.nextID1);
  //   console.log(this.nextID2);
  // }

  // movehere(x) {
  //   this.posID = x;
  //   this.nextID1 = "00";
  //   this.nextID2 = "00";
  //   this.updateMoveOptions();
  // }

}