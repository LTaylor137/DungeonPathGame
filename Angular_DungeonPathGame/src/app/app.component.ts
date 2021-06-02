import { Component } from '@angular/core';
import { DungeonPathService } from "./services/DungeonPath.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DungeonPathGame';

  constructor(public DungeonPathService: DungeonPathService) { }

  ngOnInit(): void {
    this.DungeonPathService.generateMap();
  }


}
