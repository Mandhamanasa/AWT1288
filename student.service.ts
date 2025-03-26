// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
//  export class StudentService {
//   students=[
//     {id:1,name:"sree",age:20},
//     {id:2,name:"sam",age:21},
//     {id:3,name:"sai",age:19},
//     {id:4,name:"ram",age:21} 
//   ]  

  // toggleTable() {
  //    this.showTable = !this.showTable;
  //    console.log("hello") 
  //  }

//   selectedStudent:any
//   getStudents(){
//     return this.students
//   }

//   deleteStudent(id: any) {
//     this.students = this.students.filter(student => student.id !== id);
//     console.log('Deleted student:',id)
//   }
  
//   addStudent(id:any, name: any, age: any){
//     this.students.push({id:id.value,name:name.value,age:age.value})
//   }
//   editStudent(student:any){
//     this.selectedStudent={...student};
//   }
//   updateStudent(){
//     const index=this.students.findIndex(student=>student.id===this.selectedStudent)
//     console.log(index)
//     this.students[index]=this.selectedStudent
//   }
// }
// import { Component } from '@angular/core';
// import { StudentService } from './student.service';

//  @Component({
//    selector: 'app-root',
//   templateUrl: './app.component.html',
//   standalone: false,
//    styleUrl: './app.component.css'
// })
// export class AppComponent {
//    title = 'demo';
//   name = 'cvr';
//   showTable:boolean = true;
//   students:any;

// toggleTable() {
//      this.showTable = !this.showTable;
//      console.log("hello") 
//    }
//    constructor(private studentService:StudentService){}

//    ngOnInit(){
//     this.fetchStudents()
//    }
//    fetchStudents(){
//     this.students=this.studentService.getStudents();

//    }
//    deleteStudent(id:any){
//     this.studentService.deleteStudent(id)
//     this.fetchStudents()
//    }
//     addStudent(id:any,name:any,age:any){
//     this.studentService.addStudent(id,name,age)
//     this.fetchStudents()
//    }

//   }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

students=[
  {id:1,name:"sri",branch:"IT"},
  {id:2,name:"sai",branch:"cse"},
  {id:3,name:"sam",branch:"IT"}, 
  {id:4,name:"ram",branch:"IT"} 
]  
selectedStudent:any;

getStudents(){
  return this.students;
}

deleteStudent(id: number) {

  this.students = this.students.filter(student => student.id !== id);
}
addStudent(id:any,name:any,branch:any){
  this.students.push({id:id.value,name:name.value,branch:branch.value});
}


updateStudent(updatedstudent:any){
  const index=this.students.findIndex(student=>student.id===updatedstudent.id);
  if(index !== -1){
    this.students[index]=updatedstudent;
    this.selectedStudent=""
  }

}
}
