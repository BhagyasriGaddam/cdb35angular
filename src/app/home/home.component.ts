import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users=[];
  loginObj=new HomeCredentials();

  onSubmit(){
//copying loginObj to newObj
    //push newObj into an array
    this.users.push(this.loginObj);
    console.log(this.users)
  }

}
export class HomeCredentials{
  username:string;
  password:string;

}
