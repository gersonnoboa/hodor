import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GroupService } from '../services/group.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoadingGroup = false;
  isLoadingScore = false;
  groups: Array<any> = [];
  score: 0;

  constructor(private router: Router, 
    private authService: AuthService, 
    private groupService: GroupService,
    private userService: UserService) { 
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.getGroups();
    this.getScore();
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

  getScore() {
    this.isLoadingScore = true;
    this.userService.getPredictions().subscribe(event => {
      this.score = (event as Array<any>)[0].score;
      this.isLoadingScore = false;
    }, error => {
      this.isLoadingScore = false;
    });
  }
}
