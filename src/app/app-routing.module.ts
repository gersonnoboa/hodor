import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPredictionComponent } from './add-prediction/add-prediction.component';

const routes: Routes = [
  {
    path: "",
    component: AddPredictionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
