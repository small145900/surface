import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Repo } from './repo';


@Injectable()
export class RepoService {
  constructor(private http: Http){}
  
  getRepoList(): Promise<Repo[]> {
    return this.http.get('json/repoList.json')
               .toPromise()
               .then(response => response.json() as Repo[])
               .catch(error => {console.log(error)})
  }
}