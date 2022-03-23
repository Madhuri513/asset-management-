import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppheadComponent } from './apphead/apphead.component';
import { RegisterComponent } from './apphead/register/register.component';
import { UserprofileComponent } from './apphead/userprofile/userprofile.component';


const routes: Routes = [
  {path:'apphead',component:AppheadComponent},
  {path:'register',component:RegisterComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'**',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
