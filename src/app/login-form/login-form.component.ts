import { PharmacyError } from "../shared/models/error";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/services/authentication.service";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "nst-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  filters = [
    "ig-xpro2",
    "ig-willow",
    "ig-walden",
    "ig-valencia",
    "ig-toaster",
    "ig-sutro",
    "ig-sierra",
    "ig-rise",
    "ig-nashville",
    "ig-mayfair",
    "ig-lofi",
    "ig-kelvin",
    "ig-inkwell",
    "ig-hudson",
    "ig-hefe",
    "ig-earlybird",
    "ig-brannan",
    "ig-amaro",
    "ig-1977"
  ];

  chosenFilter = this.filters[Math.floor(Math.random() * this.filters.length)];

  isLogin: boolean;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  validationMessages = {
    required: "Please enter your valid username.",
    password: "Please enter a valid password (min 3 characters)."
  };

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      Password: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get username(): AbstractControl {
    return this.loginForm.get("Username");
  }

  get password(): AbstractControl {
    return this.loginForm.get("Password");
  }

  login(): void {
    console.log(this.username.value + " " + this.password.value);
    const credentials = {
      username: this.username.value,
      password: this.password.value
    };
    this.authService.setToken("you_are_golden");
    this.router.navigate(["/"]);
    //   this.isLogin = true;
    /*
    this.authService.login(credentials).subscribe(
      result => {
        if (result) {
          this.router.navigate(['/']);
          //   this.isLogin = true;
        } else {
          this.isLogin = true;
          this.router.navigate(['']);
        }
      },
      (error: PharmacyError) => {
        this.handleLoginError(error);
      }
    );
    */
  }

  isLoginFormValid(c: AbstractControl): boolean {
    return c.invalid && (c.dirty || c.touched);
  }

  handleLoginError(error: PharmacyError): void {
    console.log(error);
  }
}
