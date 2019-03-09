import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoadingGroup = false;
  groups: Array<any> = [];

  constructor(private router: Router, private authService: AuthService, private groupService: GroupService) { 
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.isLoadingGroup = true;
    this.groupService.getGroups().subscribe(event => {
      this.groups = event as Array<any>;
      this.isLoadingGroup = false;
    }, error => {
      console.error(error.error);
      this.isLoadingGroup = false;
    });
  }
}
