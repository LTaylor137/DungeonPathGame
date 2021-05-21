import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DungeonPathComponent } from './components/DungeonPath/dungeon-path.component';
import { RoomEventComponent } from './components/room-event/room-event.component';
import { OptionsComponent } from './components/options/options.component';
import { InventoryComponent } from './components/inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    DungeonPathComponent,
    RoomEventComponent,
    OptionsComponent,
    InventoryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
