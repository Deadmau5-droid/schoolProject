import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { studentRead } from '../modals/studentRead';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  student!: studentRead;
  userName = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  fatherName = new FormControl('');
  Course = new FormControl('');
  DOB = new FormControl('');
  email = new FormControl('');
  currentPassword = new FormControl('');
  newPassword = new FormControl('');
  confirmPassword = new FormControl('');
  id!: number;

  constructor(
    private studentService: StudentService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))!;
    this.studentService.getStudentById(this.id).subscribe((student) => {
      this.userName.setValue(student.userName);
      this.firstName.setValue(student.firstName);
      this.lastName.setValue(student.lastName);
      this.fatherName.setValue(student.fatherName);
      this.email.setValue(student.email);
      this.Course.setValue(student.course);
      this.DOB.setValue(student.dateOfBirth);
    });
  }
  Finish(): void {
    this.userService
      .login(this.userName.value, this.currentPassword.value)
      .subscribe((res) => {
        if (res.response === 'Cleared') {
          if (this.newPassword.value === this.confirmPassword.value) {
            this.studentService
              .editStudentById(
                this.id,
                this.userName.value,
                this.firstName.value,
                this.lastName.value,
                this.email.value,
                this.fatherName.value,
                this.Course.value,
                this.DOB.value
              )
              .subscribe(() => {
                this.userService
                  .getUserByName(this.userName.value)
                  .subscribe((student) => {
                    this.userService
                      .editUserById(
                        student.id,
                        this.userName.value,
                        this.newPassword.value,
                        false
                      )
                      .subscribe(() => {
                        this.router.navigateByUrl(`/student/${this.id}`);
                      });
                  });
              });
          }else{
            alert("New password and confirm Password dont match");
          }
        }else{
        alert("Wrong current Password");
      }
      });
  }
}
