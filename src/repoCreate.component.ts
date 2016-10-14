import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {NgClass} from '@angular/common';
import 'rxjs/add/operator/toPromise';

@Component({
	moduleId: module.id,
  selector: 'repo-create',
  templateUrl: '../templates/repository/repoCreate.html'
})
export class RepoCreateComponent { 
	step = 0;

	constructor(private http: Http){
	}

	changeStep(step) {
		this.step = step
	}
}