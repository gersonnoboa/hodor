import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { General } from '../general/general';
import { HttpErrorResponse } from '@angular/common/http';
import { JWT } from '../general/jwt';
import { getToken } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      "username": "",
      "password": ""
    });
  }

  onSubmitClicked() {
    const username = this.formLogin.controls["username"].value;
    const password = this.formLogin.controls["password"].value;

    this.service.login(username, password).subscribe(event => {
      this.getToken(event);
      this.goToHome();
    }, 
    error => {
      General.showGeneralError(this.snackBar);
      console.log(error.error);
    });
  }

  getToken(data: any) {
    const token = data["token"];
    JWT.set(token);
  }

  goToHome() {
    this.router.navigateByUrl("/home");
  }
}
