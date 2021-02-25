import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {  DatashareService} from "../services/datashare.service";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  userName = new FormControl('');
  password = new FormControl('');
  loginstate:number=0;
  constructor(private userService: UserService, private route: Router,private datashare:DatashareService) {}

  ngOnInit(): void {}
  onCLickLogin(): void {
    this.userService
      .login(this.userName.value, this.password.value)
      .subscribe((res) => {
        if (res.response === 'Cleared') {
          this.userService.getUserById(res.uid).subscribe((user) => {
            console.log(user.isAdmin)
            if (user.isAdmin === true) {
              this.datashare.changeMessage(1);
              this.route.navigateByUrl("/admin");
            }
            else{
              console.log('not admin')
              this.datashare.changeMessage(2);
              this.route.navigateByUrl(`/student/${res.sid}`)
            }
          });
        }
        else{
          this.loginstate=1;
        }
      });
  }
}
