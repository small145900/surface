import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Org } from './org';


@Injectable()
export class OrgService {
  private headers = new Headers({'Content-Type':'application/json'})
  constructor(
    private http: Http,
    private title: Title
  ){}

  // getOrgList(): Promise<Org[]> {
  //   var arr = [{ name: "small",
  //                 title: "small",
  //                 bio: "desc",
  //                 id: 50,
  //                 gravatar: "img/logo.png",
  //                 teams: 30,
  //                 repositories: 100
  //               }]
  //   return Promise.resolve(arr);
  // }
  
  getOrgList(): Promise<any> {
    return this.http.get('json/orgList.json')
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  orgCreate(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/orgs', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  teamCreate(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/orgs/'+info.orgName+'/team', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  getTeamList(orgName): Promise<any> {
    return this.http.get('/web/v1/orgs/'+orgName+'/teams?organization='+orgName)
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  getMemberList(teamName,orgName): Promise<any> {
    return this.http.get('/web/v1/orgs/'+orgName+'/'+teamName+'/membership/list')
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  addMember(name,teamName,orgName): Promise<any> {
    let params=JSON.stringify({username: name})
    return this.http.put('/web/v1/orgs/'+orgName+'/'+teamName+'/membership', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData,this.dealError)
               .catch(this.handleError)
  }

  delMember(name,teamName,orgName): Promise<any> {
    return this.http.delete('/web/v1/orgs/'+orgName+'/'+teamName+'/membership/'+name, {headers: this.headers})
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
    return object || {}
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Promise.reject(errMsg);
  }
  // getRepo(id: number): Promise<Repo> {
  //   return this.getRepoList()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }
  changeTitle(val){
    this.title.setTitle(val)
  }
}