import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Repo } from './repo';


@Injectable()
export class RepoService {
  private headers = new Headers({'Content-Type':'application/json'})
  constructor(
    private http: Http,
    private title: Title
  ){}
  
  getRepoList(orgInfo): Promise<Repo[]> {
    return this.http.get('json/repoList.json')
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  repoCreate(info): Promise<Repo[]> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/repository', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  private dealData (res: Response) {
    return res.json() || {}
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Promise.reject(errMsg);
  }
  changeTitle(val){
    this.title.setTitle(val)
  }
}