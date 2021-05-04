import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonPathComponent } from './components/DungeonPath/dungeon-path.component';
import { LevelComponent } from './components/Level/level.component';
import { RoomComponent } from './components/Room/room.component';
import { LeaderLineComponent } from './components/leaderline/leaderline.component';


@NgModule({
  declarations: [
    AppComponent,
    DungeonPathComponent,
    LevelComponent,
    RoomComponent,
    LeaderLineComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
