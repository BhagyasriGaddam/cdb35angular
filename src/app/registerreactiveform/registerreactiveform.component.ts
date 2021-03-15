import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerreactiveform',
  templateUrl: './registerreactiveform.component.html',
  styleUrls: ['./registerreactiveform.component.css']
})
export class RegisterreactiveformComponent implements OnInit {
  registerForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      userid:new FormControl(null,Validators.required)
    })
  }
    getControls(){
      return this.registerForm.controls;
  }
onSubmit(){
  console.log(this.registerForm.value)
}
}
