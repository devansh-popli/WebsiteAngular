import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorialServiceService } from '../tutorial-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService:TutorialServiceService){
    
    }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token= this.loginService.getToken();
  console.log("inside interceptor",token)
   if(token!=null)
   {
       httpRequest=httpRequest.clone({setHeaders:{Authorization:`Bearer ${token}`}})
   }
    return next.handle(httpRequest);
  }
}
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },
];