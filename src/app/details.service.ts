import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  studentDetails:any;
  setStudentData(stdObj){
    this.studentDetails=stdObj;
  }
  sendStudentData(){
    return this.studentDetails;
  }

}
