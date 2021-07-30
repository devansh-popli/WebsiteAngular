import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from 'src/blog';
import { Video } from 'src/video';
import { Model } from './model';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {
  
  // baseUrl = "http://localhost:5000";
  baseUrl = "http://springboottutorialwebsite-env.eba-8ptpv5ft.us-east-2.elasticbeanstalk.com";
  constructor(private httpClient: HttpClient,private router:Router) { }
  public isLoading = new BehaviorSubject<Boolean>(false);
  public dosearch = new BehaviorSubject<Boolean>(false);
  public isLogin = new BehaviorSubject<Boolean>(false);
  public fetchComments = new BehaviorSubject<Boolean>(false);
  public searchName=new Subject<string>();
  postComment(comment: any, slug: any, email: any,parentSno:any) {
   var comments={'comment':comment,'email':email,'blogId':slug,'parentCommentId':parentSno};
    console.log("email"+email+"comment"+comments)
    return this.httpClient.post<any>(`${this.baseUrl}/comments/postComment`,comments);
  }
  getComment(postId: any) {
    const comment={'blogId':postId}
    return this.httpClient.post<any>(`${this.baseUrl}/comments/getComments`,comment);
  }
  getReplies(postId: any) {
    const reply={'blogId':postId}
    return this.httpClient.post<any>(`${this.baseUrl}/comments/getReplies`,reply); 
  }
  public sendOTP(email:any)
  {
    console.log("email"+email)
    return this.httpClient.get<any>(`${this.baseUrl}/generate-otp/${email}`);
  }
  public loginUser(user: User) {
    // console.log(user);
    return this.httpClient.post<User>(`${this.baseUrl}/tutologin`, user);
  }
  public saveToken(token: any) {
    sessionStorage.setItem('token', token);
    // this.isLogin.next(true);
    return true;
  }
  public isLoggedin() {
    let tokenstr = sessionStorage.getItem('token')
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      return false;
    }
    else {
      return true;
    }
  }
  public getCurrentUser() {
    return this.httpClient.get<User>(`${this.baseUrl}/current-user`);
  }
  public setUser(user: User) {
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));

    this.isLogin.next(true);
  }
  public getUser() {
    let str = sessionStorage.getItem('user');
    if (str != null) {
      return JSON.parse(str)
    }
    else {
      this.logout();
      return null;
    }
  }
  public getUserRole() {
    let str = sessionStorage.getItem('user');
    if (str != null) {
      console.log((JSON.parse(str)).authorities[0].authority)
      return (JSON.parse(str)).authorities[0].authority;
    }
    else {
      this.logout();
      return null;
    }
  }
  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    //this.router.navigate([''])
    return true;
  }
  public getToken() {
    return sessionStorage.getItem('token')
  }
  public signUser(user: User,otp:string) {
    console.log(user);
    return this.httpClient.post<User>(`${this.baseUrl}/register/${otp}`, user)
  }

  public getCards() {
    return this.httpClient.get<Model[]>(`${this.baseUrl}/tutorials/cards`);
  }

  public getVideos(cardId: string) {
    return this.httpClient.get<Video[]>(`${this.baseUrl}/tutorials/videos/${cardId}`);
  }

  public getBlogs()
  {
    return this.httpClient.get<Blog[]>(`${this.baseUrl}/blogs`);
  }
  public getBlog(slug:string)
  {
    return this.httpClient.get<Blog>(`${this.baseUrl}/blogs/${slug}`);
  }

  public updateUser(form:any)
  {
    return this.httpClient.put<User>(`${this.baseUrl}/updateUser`,form);
  }

  public updatePassword(form:any)
  {
    return this.httpClient.put<User>(`${this.baseUrl}/updatePassword`,form);
  }
  public postBlogs(blog:Blog)
  {
    return this.httpClient.post(`${this.baseUrl}/insert`,blog);
  }
}
