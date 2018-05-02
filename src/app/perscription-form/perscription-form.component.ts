import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'perscription-form',
  templateUrl: './perscription-form.component.html',
  styleUrls: ['./perscription-form.component.css']
})
export class PerscriptionFormComponent implements OnInit {

  //doktor i lek su jedna grupa, ostali su druga
  perscriptionForm = new FormGroup({
    doctorName: new FormControl('', Validators.required),
    doctorSurname: new FormControl('', Validators.required),
    diagnose: new FormControl('', Validators.maxLength(255)),
    medicine: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    healthInstitution: new FormControl('', Validators.minLength(10)),
    pharmasist: new FormGroup({
      pharmasistName: new FormControl('', Validators.required),
      pharmasistSurname: new FormControl('', Validators.required)
    })
  });

  constructor() { }

  ngOnInit() {
  }

  get doctorsName(){
    return this.perscriptionForm.get('doctorsName');
  }
  get doctorsSurname(){
    return this.perscriptionForm.get('doctorsSurname');
  }
  get diagnose(){
    return this.perscriptionForm.get('diagnose');
  }
  get quantity(){
    return this.perscriptionForm.get('diagnose');
  }
  get healthInstitution(){
    return this.perscriptionForm.get('diagnose');
  }
  get pharmasistName(){
    return this.perscriptionForm.get('pharmasistName');
  }
  get pharmasistSurname(){
    return this.perscriptionForm.get('pharmasistSurname');
  }
  
  submitPercription(){

  }

}
