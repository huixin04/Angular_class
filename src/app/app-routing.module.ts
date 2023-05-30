
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'material', component: MaterialComponent },
  { path: 'table', component:TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
