import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonPathComponent } from './components/DungeonPath/dungeon-path.component';
import { RoomEventComponent } from './components/room-event/room-event.component';
import { OptionsComponent } from './components/options/options.component';
import { PlayerInventoryService } from "./services/PlayerInventory.service";
import { DungeonPathService } from './services/DungeonPath.service';
import { RoomEventService } from './services/RoomEvent.service';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    DungeonPathComponent,
    RoomEventComponent,
    OptionsComponent,
    TitleComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlayerInventoryService, DungeonPathService, RoomEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 