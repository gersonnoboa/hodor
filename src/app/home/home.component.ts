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
  isLoadingGroups = false;
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
    this.isLoadingGroups = true;
    this.groupService.getGroups().subscribe(event => {
      this.groups = event as Array<any>;
      this.isLoadingGroups = false;
    }, error => {
      this.isLoadingGroups = false;
    });
  }

  getScore() {
    this.score = 0;
    this.userService.getPredictions().subscribe(event => {
      let remoteScore = (event as Array<any>)
      
      this.score = (remoteScore.length == 0) ? 0 : remoteScore[0].score;
    }, error => {
      
    });
  }
}
