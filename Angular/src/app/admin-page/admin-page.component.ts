import { Component, OnInit } from '@angular/core';
import{StudentService} from '../services/student.service';
import{UserService} from '../services/user.service';
import{studentRead}from '../modals/studentRead';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  students:studentRead[]=[];
  constructor( private studentService: StudentService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students=>this.students=students )
    
  }
onClickDelete(id:number){
  this.studentService.getStudentById(id).subscribe((student)=>{
    this.userService.getUserByName(student.userName).subscribe(
      (user)=>{
        this.userService.deleteUserById(user.id).subscribe(()=>{
           this.studentService.deleteStudentById(id).subscribe(()=>{
             this.students=this.students.filter((stud)=>stud.id!==id)
           })
        });


      }
    )

  })
  
}
}
