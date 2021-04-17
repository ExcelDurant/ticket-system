import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issues:any;
  solvedIssues:any;

  constructor( private issueService:IssueService) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data;
    });
    this.solvedIssues = this.issueService.solvedIssues;
  }

  addIssue(title: any, descripption: any) {
    var newIssue = {
      id:this.issues.length+1,
      title:title,
      descripption:descripption,
      solved:false,
      closed:false
    }
    console.log(newIssue);
    this.issues.push(newIssue);
  }

  getSatisfaction() {
    return this.solvedIssues.length/this.issues.length;
  }

  // ngDocheck() {
  //   this.solvedIssues = this.issueService.solvedIssues;
  // }
  
  solveIssue(issue:any) {
    var index = this.issues.indexOf(issue);
    this.issues.splice(index, 1); 
  }

  closeIssue(solved:any){
    var index = this.solvedIssues.indexOf(solved);
    this.solvedIssues.splice(index, 1);
  }
}
