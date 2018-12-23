import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'nst-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isLogin: boolean;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  private validationMessages = {
    required: 'Please enter your valid username.',
    email: 'Please enter a valid password (min 3 characters).'
  };

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [ Validators.required, Validators.minLength(3)])
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    console.log(this.username.value + ' ' + this.password.value);
    let credentials = {
      'username': this.username.value,
      'password': this.password.value
    };
  }

  isLoginFormValid(c: AbstractControl): boolean {
    return c.invalid && (c.dirty || c.touched);
    }
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
