import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { General } from '../general/general';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  passwordRepeat: string;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    document.getElementById("btnLogout").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("btnLogout").style.display = "block";
  }

  onSubmitClicked() {
    if (this.password != this.passwordRepeat) {
      General.show(this.snackBar, "Passwords are different");
      return;
    }
    
    this.userService.registerUser(this.username, this.password).subscribe(event => {
      General.show(this.snackBar, "User created successfully");
      this.router.navigateByUrl("/");
    }, error => {
      General.show(this.snackBar, error.error);
    });
  }
}
