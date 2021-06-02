import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Video } from 'src/video';
import { Model } from './model';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {
baseUrl="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  public isLoading=new BehaviorSubject<Boolean>(false);
  public isLogin=new BehaviorSubject<Boolean>(false);
  public loginUser(user:User)
    {
      // console.log(user);
     return this.httpClient.post<User>(`${this.baseUrl}/tutologin`,user);
    }
public saveToken(token:any)
{
  localStorage.setItem('token',token);
  return true;
}
public isLoggedin()
{
  let tokenstr=localStorage.getItem('token')
  if(tokenstr==undefined || tokenstr=='' || tokenstr==null)
  {
    return false;
  }
  else{
    return true;
  }
}
public getCurrentUser()
{
  return this.httpClient.get<User>(`${this.baseUrl}/current-user`);
}
public setUser(user:User){
localStorage.setItem('user',JSON.stringify(user));
}
public getUser(){
  let str=localStorage.getItem('user');
  if(str!=null)
  {
    return JSON.parse(str)
  }
  else{
    this.logout();
    return null;
  }
  }
public logout()
{
  localStorage.removeItem('token');
  return true;
}
public getToken()
{
  return localStorage.getItem('token')
}
    public signUser(user:User)
    {
      console.log(user);
      return this.httpClient.post<User>("http://localhost:8080/tutosign",user)
    }

    public getCards()
    {
      return this.httpClient.get<Model[]>(`${this.baseUrl}/cards`);
    }

    public getVideos(cardId:string)
    {
      return this.httpClient.get<Video[]>(`${this.baseUrl}/videos/${cardId}`);
    }
}
