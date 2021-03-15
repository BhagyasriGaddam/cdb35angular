import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  studentName;

  constructor(private dss:DetailsService) { }

  ngOnInit(): void {
    this.studentName=this.dss.sendStudentData();
  }

 

}
