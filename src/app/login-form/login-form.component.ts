import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLogin:boolean;

  constructor(
    private router: Router,
    /*private authService:AuthenticationServiceService
  */) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('',[
    Validators.required,
    Validators.minLength(3)]),
    password: new FormControl('',[ Validators.required, Validators.minLength(3)])
  });

  get username(){
    console.log(this.loginForm.get('username'));
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  login(){
    console.log(this.username.value+" "+this.password.value);
    let credentials = {
      "username": this.username.value,
      "password": this.password.value
    };
    /*
    this.authService.login(credentials)
    .subscribe(result=>{
      if(result){
        this.router.navigate(['/']);
      }else{
        this.isLogin=true;
      }
    });
    */
  }
}
