import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorialServiceService } from '../tutorial-service.service';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService:TutorialServiceService){
    
    }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token= this.loginService.getToken();
  console.log("inside interceptor",token)
   if(token!=null)
   {
       this.loginService.isLoading.next(true);
       httpRequest=httpRequest.clone({setHeaders:{Authorization:`Bearer ${token}`}})
   }
   return next.handle(httpRequest).pipe(map(event => {
    if (event instanceof HttpResponse) {
       this.loginService.isLoading.next(false);
    }         
    return event;
}));     

  }
}
export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },
];

function finalize(arg0: () => void): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<any>> {
    throw new Error('Function not implemented.');
}
