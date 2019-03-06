import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("btnLogout").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("btnLogout").style.display = "block";
  }
}
