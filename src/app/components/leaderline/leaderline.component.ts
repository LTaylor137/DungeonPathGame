import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from "@angular/common";
// import 'leader-line';


declare let LeaderLine: any;

@Component({
  selector: 'app-leaderline',
  templateUrl: './leaderline.component.html',
  // template: '<div id="d1">div 1</div><div style="height:500px"><!-- JUST SOME SPACE --></div><div id="d2"> Connect me</div>',
  styleUrls: ['./leaderline.component.css']
})

export class LeaderLineComponent implements OnInit {

  // constructor(@Inject(DOCUMENT) private document){
  // }

  ngOnInit() {
    // new LeaderLine(
    //   this.document.getElementById('div12'),
    //   this.document.getElementById('div22')
    // );
    // new LeaderLine(
    //   this.document.getElementById('div1'),
    //   this.document.getElementById('div2')
    // );
  }
}
