import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DetailsService) { }
  readData(refObj){
    return this.ds.setStudentData(refObj);
  }

  ngOnInit(): void {
  }

}
