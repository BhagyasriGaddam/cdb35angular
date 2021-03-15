import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  post;
//inject activatedroute service
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      data=>{
        this.post.getPostById(data.id).subscribe(
          obj=>{

            this.post=obj;
          }
        )
      }
    )
  }

}
