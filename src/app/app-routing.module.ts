import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { RegisterComponent } from './register/register.component';
import { DisplayInformationComponent } from './display-information/display-information.component';




const routes: Routes = [
{
  path:'', pathMatch:'full', component:AssignmentComponent
},

{
  path:'register',component:RegisterComponent
},
{
   path: 'register/displayInformation', component:DisplayInformationComponent 

}



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
