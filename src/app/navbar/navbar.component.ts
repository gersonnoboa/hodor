import { Component, OnInit } from '@angular/core';
import { JWT } from '../general/jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogoutClicked() {
    JWT.remove();
    this.router.navigateByUrl("/");
  }

}
