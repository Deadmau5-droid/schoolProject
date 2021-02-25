import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { studentRead } from '../modals/studentRead';
import{UserService}from '../services/user.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  student!: studentRead;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))!;
    this.studentService.getStudentById(this.id).subscribe((student)=>{
      this.student=student
    });
  }
}
