import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
;

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  configUrl = './../../assets/data/data.json';
  solvedIssues: any[] = [];
  issues:any;

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(this.configUrl)
  }


  solveIssue(issue:any) {
    this.solvedIssues.push(issue);
    issue.solved = true;
  }
}
