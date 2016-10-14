import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Org } from './org';


@Injectable()
export class OrgService {
  private headers = new Headers({'Content-Type':'application/json'})
  constructor(private http: Http){}

  // getOrgList(): Promise<Org[]> {
  //   var arr = [
  //               { name: "small",
  //                 title: "small",
  //                 bio: "desc",
  //                 id: 50,
  //                 gravatar: "img/logo.png",
  //                 teams: 30,
  //                 repositories: 100
  //               },    
  //               { name: "small",
  //                 title: "small",
  //                 bio: "desc",
  //                 id: 60,
  //                 gravatar: "img/logo.png",
  //                 teams: 30,
  //                 repositories: 100
  //               },
  //               { name: "small",
  //                 title: "small",
  //                 bio: "desc",
  //                 id: 70,
  //                 gravatar: "img/logo.png",
  //                 teams: 30,
  //                 repositories: 100
  //               }
  //             ]
  //   return Promise.resolve(arr);
  // }
  
  getOrgList(): Promise<Org[]> {
    return this.http.get('json/orgList.json')
               .toPromise()
               .then(response => response.json() as Org[])
               .catch(error => {console.log(error)})
  }

  // getRepo(id: number): Promise<Repo> {
  //   return this.getRepoList()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }
}