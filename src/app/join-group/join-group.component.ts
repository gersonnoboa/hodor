import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GroupService } from '../services/group.service';
import { General } from '../general/general';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {
  groupId: String;

  constructor(private router: Router, 
    private authService: AuthService, 
    private groupService: GroupService,
    private snackBar: MatSnackBar) { 
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.groupService.joinGroup(this.groupId).subscribe(event => {
      General.show(this.snackBar, "You have successfully joined the group.");
      this.router.navigateByUrl("/home");
    }, error => {
      General.show(this.snackBar, error.error);
    });
  }
}
