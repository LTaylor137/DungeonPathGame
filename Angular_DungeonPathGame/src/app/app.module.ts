import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonPathComponent } from './components/DungeonPath/dungeon-path.component';
import { LevelComponent } from './components/Level/level.component';
import { RoomComponent } from './components/Room/room.component';
import { LeaderLineComponent } from './components/leaderline/leaderline.component';
import { TestdivsComponent } from './components/testdivs/testdivs.component';

@NgModule({
  declarations: [
    AppComponent,
    DungeonPathComponent,
    LevelComponent,
    RoomComponent,
    LeaderLineComponent,
    TestdivsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
