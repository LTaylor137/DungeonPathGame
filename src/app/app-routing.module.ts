import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DungeonPathComponent } from './components/DungeonPath/dungeon-path.component';

const routes: Routes = [
  { path: "DungeonPathComponent", component: DungeonPathComponent },
  { path: "**", redirectTo: "DungeonPathComponent" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
