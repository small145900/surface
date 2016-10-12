import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'repo-detail',
  templateUrl: '../templates/repository/repoDetail.html'
})
export class RepoDetailComponent {
	constructor(private route: ActivatedRoute, private location: Location) {}

  // ngOnInit(): void {
  //   this.route.params.forEach((params: Params) => {
  //     let id = +params['repoId'];
  //     console.log(id)
  //   });
  // }

  // goBack(): void {
  //   this.location.back();
  // }
}