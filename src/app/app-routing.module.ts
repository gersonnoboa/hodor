import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPredictionComponent } from './add-prediction/add-prediction.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "prediction",
    component: AddPredictionComponent
  },
  {
    path: "join-group",
    component: JoinGroupComponent
  },  
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "group/:groupId",
    component: GroupComponent
  },
  {
    path: "statistics",
    component: StatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
