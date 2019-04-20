import { NotificationsService } from "./../shared/services/notification/notifications.service";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { PerscriptionService } from "../shared/services";
import { PerscriptionHelper } from "./perscription-helper";

@Component({
  selector: "nst-perscription",
  templateUrl: "./perscription.component.html",
  styleUrls: ["./perscription.component.scss"]
})
export class PerscriptionComponent implements OnInit {
  perscriptionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private perscriptionService: PerscriptionService,
    private notificationService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.perscriptionForm = this.fb.group({
      doctorName: new FormControl("", Validators.required),
      diagnose: new FormControl("", Validators.maxLength(255)),
      quantity: new FormControl("", Validators.required),
      institution: new FormControl("", Validators.minLength(10)),
      IssueDate: null
    });
  }

  submitPerscription(): void {
    const perscription = PerscriptionHelper.getPerscription();

    this.perscriptionService
      .create(perscription)
      .subscribe(res => {}, error => {});
  }
}
