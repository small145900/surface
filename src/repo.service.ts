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
  
  getRepoList(orgInfo): Promise<any> {
    return this.http.get('json/repoList.json')
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  repoCreate(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/repository', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  getRepoDetail(info): Promise<any> {
    // let params=JSON.stringify(info)
    return this.http.get('json/repoDetail.json')
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  private dealData (res: Response) {
    var object = {
      code: res.status,
      data: res.json()
    }
    return object || {}
  }

  private dealError (err: Response) {
    var object = {
      code: err.status,
      data: err.json()
    }
    console.log(err)
    return object || {}
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Promise.reject(errMsg);
  }
}