import { Component, OnInit } from '@angular/core';
import{StudentServiceService} from '../services/student-service.service';
import{UserServiceService} from '../services/user-service.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
 userName=new FormControl('');
 firstName=new FormControl('');
 lastName=new FormControl('');
 password=new FormControl('');
 isAdmin=new FormControl(false);

  constructor(private router: Router,
    private StudentService:StudentServiceService,
    private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
