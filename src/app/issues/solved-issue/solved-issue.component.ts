import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-solved-issue',
  templateUrl: './solved-issue.component.html',
  styleUrls: ['./solved-issue.component.scss']
})
export class SolvedIssueComponent implements OnInit {

  @Input() solved:any;
  @Output() closingEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeIssue(solved:any) {
    this.closingEvent.emit(solved);
  }

}
