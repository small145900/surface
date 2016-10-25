import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(
    private http: Http,
    private title: Title
  ){}
  
  getBrowseList(): Promise<any> {
    return this.http.get('json/browseList.json')
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  doLogin(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/user/signin', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  signUp(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/user', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  sendEmail(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/user/forget', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  resetPwd(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.post('/web/v1/user/forget/reset', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  getEmailList(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.get('json/emailList.json')
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  addEmail(info): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.put('/web/v1/user/'+info.username+'/email', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  verifyEmail(info,user): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.put('/web/v1/user/'+user.username+'/email/'+info.email+'/send', params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }
  
  delEmail(info,user): Promise<any> {
    let params=JSON.stringify(info)
    return this.http.put('/web/v1/user/'+user.username+'/email/'+info.email, params, {headers: this.headers})
               .toPromise()
               .then(this.dealData)
               .catch(this.handleError)
  }

  loginOut(user): Promise<any> {
    let params=JSON.stringify(user)
    return this.http.put('/web/v1/user/'+user.username+'/signout', params, {headers: this.headers})
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