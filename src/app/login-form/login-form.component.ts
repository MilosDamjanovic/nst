import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'nst-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  filters = [
    'ig-xpro2',
    'ig-willow',
    'ig-walden',
    'ig-valencia',
    'ig-toaster',
    'ig-sutro',
    'ig-sierra',
    'ig-rise',
    'ig-nashville',
    'ig-mayfair',
    'ig-lofi',
    'ig-kelvin',
    'ig-inkwell',
    'ig-hudson',
    'ig-hefe',
    'ig-earlybird',
    'ig-brannan',
    'ig-amaro',
    'ig-1977'
  ];

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
      Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Password: new FormControl('', [ Validators.required, Validators.minLength(3)])
    });
  }

  get username() {
    return this.loginForm.get('Username');
  }

  get password() {
    return this.loginForm.get('Password');
  }

  login() {
    console.log(this.username.value + ' ' + this.password.value);
    let credentials = {
      'username': this.username.value,
      'password': this.password.value
    };
  }

  chosenFilter = this.filters[Math.floor(Math.random() * this.filters.length)];

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
