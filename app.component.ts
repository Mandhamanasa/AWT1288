// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   //standalone: false,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   students=[
//     {id:1,name:"sri",branch:"IT"},
//     {id:2,name:"sai",branch:"cse"},
//     {id:3,name:"sam",branch:"IT"}, 
//     {id:4,name:"ram",branch:"IT"} 
//   ]  
//   selectedStudent:any;
//   deleteStudent(id: number) {
//     console.log(id)
//     this.students = this.students.filter(student => student.id !== id);
//   }
//   addStudent(id:any,name:any,branch:any){
//     this.students.push({id:id.value,name:name.value,branch:branch.value});
//   }

//   editStudent(student:any){
//     this.selectedStudent={...student};
//   }
//   updateStudent(){
//     const index=this.students.findIndex(student=>student.id===this.selectedStudent.id);
//     if(index !== -1){
//       this.students[index]=this.selectedStudent
//       this.selectedStudent=""
//     }

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

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

// students=[
//   {id:1,name:"sri",branch:"IT"},
//   {id:2,name:"sai",branch:"cse"},
//   {id:3,name:"sam",branch:"IT"}, 
//   {id:4,name:"ram",branch:"IT"} 
// ]  
// selectedStudent:any;

// getStudents(){
//   return this.students;
// }

// deleteStudent(id: number) {

//   this.students = this.students.filter(student => student.id !== id);
// }
// addStudent(id:any,name:any,branch:any){
//   this.students.push({id:id.value,name:name.value,branch:branch.value});
// }


// updateStudent(updatedstudent:any){
//   const index=this.students.findIndex(student=>student.id===updatedstudent.id);
//   if(index !== -1){
//     this.students[index]=updatedstudent;
//     this.selectedStudent=""
//   }

// }
// }

import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[FormsModule,CommonModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  call = 'cvr';
  showTable:boolean = true;
  students: any
  selectedStudent:any;

  toggleTable() {
    this.showTable = !this.showTable;
    console.log("hello") 
  }
  
  getStudents(){
    return this.students;
  }
  constructor(private studentService:StudentService){}

  ngOnInit(){
  this.fetchStudents();
  }
  fetchStudents(){
    this.students= this.studentService.getStudents();
  }

  deleteStudent(id:any){
    this.studentService.deleteStudent(id)
    this.fetchStudents()
  }

  addStudent(id:any,name:any,branch:any){
    this.studentService.addStudent(id,name,branch)
    this.fetchStudents()
  }

  editStudent(student:any){
    this.selectedStudent={...student}
  }

  updateStudent(){
    this.studentService.updateStudent(this.selectedStudent)
    this.fetchStudents()
  }
}




export { StudentService };





