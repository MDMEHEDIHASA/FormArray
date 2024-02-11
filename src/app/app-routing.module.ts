import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'/material',loadChildren:()=>import('./modules/material/material.module').then(m=>m.MaterialModule)}
];




@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
