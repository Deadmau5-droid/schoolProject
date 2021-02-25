import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-student-page',
  templateUrl: './create-new-student-page.component.html',
  styleUrls: ['./create-new-student-page.component.scss'],
})
export class CreateNewStudentPageComponent implements OnInit {
  userName = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  password = new FormControl('');
  isAdmin = new FormControl(false);

  constructor(
    private route: Router,
    private studentService: StudentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  createUser(): void {
    this.userService
      .createUser(this.userName.value, this.password.value, this.isAdmin.value)
      .subscribe(() => {
        this.studentService
          .createStudent(
            this.userName.value,
            this.firstName.value,
            this.lastName.value,
            '',
            '',
            '',
            ''
          )
          .subscribe(() => this.route.navigateByUrl('/admin'));
      });
  }
}
