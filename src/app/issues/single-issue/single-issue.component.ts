import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.scss']
})
export class SingleIssueComponent implements OnInit {

  @Input() issue:any;
  @Output() issueEvent = new EventEmitter<any>();

  constructor( private issueService:IssueService) { }

  ngOnInit(): void {
  }

  solveIssue(issue:any) {
    this.issueService.solveIssue(issue);
    console.log(issue);
    this.issueEvent.emit(issue);
  }

}


