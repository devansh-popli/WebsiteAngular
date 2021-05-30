import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomeComponent } from './component/home/home.component';
import { TutorialsComponent } from './component/tutorials/tutorials.component';

const routes: Routes = [
  {
    path:'',redirectTo:"home",pathMatch:"full"
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  {
    path:'tutorials',component:TutorialsComponent
  },
  {
    path:'forgot',component:ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
