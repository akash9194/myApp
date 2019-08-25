import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  flag: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),


    });

  }
  public login() {
    const loginForm = this.loginForm.value;
    if (loginForm.userName === 'manager' && loginForm.password === 'admin') {
      this.router.navigateByUrl('manager');
    } else if (loginForm.userName === 'employee' && loginForm.password === 'user') {
      this.router.navigateByUrl('employee');
    } else {
      this.flag = true;
    }
    console.log(this.loginForm.value);
  }

}

