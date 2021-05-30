import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

  constructor(private httpClient:HttpClient) { }
  public loginUser(user:User)
    {
      // console.log(user);
     return this.httpClient.post<User>("http://localhost:8080/tutologin",user);
    }

    public signUser(user:User)
    {
      console.log(user);
      return this.httpClient.post<User>("http://localhost:8080/tutosign",user)
    }
}
