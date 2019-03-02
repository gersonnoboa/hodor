import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPredictionComponent } from './add-prediction/add-prediction.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
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
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
