import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactusComponent} from './contactus/contactus.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {TypescriptComponent} from './typescript/typescript.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {BootstrapComponent} from './bootstrap/bootstrap.component';
import { RegisterreactiveformComponent } from './registerreactiveform/registerreactiveform.component';
import { PostsComponent } from './posts/posts.component';
import {PostdetailsComponent} from './postdetails/postdetails.component';





const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"reactiveform", component:RegisterreactiveformComponent},
  {path:"posts", component:PostsComponent},
  {path:"postdetails/:id", component:PostdetailsComponent},
  {path:"technologies", component:TechnologiesComponent,children:[
    {path:"typescript", component:TypescriptComponent},
    {path:"javascript", component:JavascriptComponent},
    {path:"bootstrap", component:BootstrapComponent},
    

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
