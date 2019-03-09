import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GroupService } from '../services/group.service';
import { General } from '../general/general';
import { MatSnackBar } from '@angular/material/snack-bar';
import { group } from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group: any;
  groupId: string;
  isLoading = true;

  constructor(private route: ActivatedRoute, 
    private authService: AuthService, 
    private router: Router,
    private groupService: GroupService,
    private snackBar: MatSnackBar) { 
    if (this.authService.isUserLoggedOut()) {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get("groupId");
    this.getGroupInformation();
  }

  getGroupInformation() {
    this.groupService.getGroupInformation(this.groupId).subscribe(event => {
      this.showGroupInformation(event as Array<any>);
    }, error => {
      General.showGeneralError(this.snackBar);
    });
  }

  showGroupInformation(information) {
    let members = [];
    let name = "";
    information.forEach(element => {
      name = element.group.name;

      let member = {
        name: element.user.name,
        username: element.user.username,
        score: element.results.score
      }

      members.push(member);
    });
    
    this.group = {
      name: name,
      members: members
    }

    this.isLoading = false;
  }
}
