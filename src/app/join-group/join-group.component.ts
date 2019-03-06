import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { 
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
  }

}
