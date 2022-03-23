import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { customvalidators } from './validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  login: FormGroup;
  error: boolean = false;
  isSubmitted: boolean = false;

  constructor(private router: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.register = this.formBuild.group({
      fname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[A-Za-z]*$')]],
      lname: ['', [
        Validators.required,
        Validators.maxLength(100)]],
      email:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      conpassword: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]]
    },
      { validators: customvalidators }
    )

    this.login = this.formBuild.group({
      mail: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  onFormSubmit() {
    this.isSubmitted = true;
    if (this.register.valid) {
      console.log("Form submitted", this.register.value);
      let admindata = JSON.stringify(this.register.value);
      localStorage.setItem(this.register.value.email, admindata);
      this.reset();
    }
  }
  reset(){
    this.ngOnInit();
  }
  button() {
    console.log(this.login.value);
    let uname = localStorage.getItem(this.login.value.mail);
    console.log(uname);
    if (uname != null) {
      let obj = JSON.parse(uname);
      console.log(obj.email === this.login.value.mail && obj.password === this.login.value.pass);
      if (obj.email === this.login.value.mail && obj.password === this.login.value.pass) {
        sessionStorage.setItem('name', obj.fname);
        sessionStorage.setItem('lname',obj.lname);
        sessionStorage.setItem('email',obj.email);
        this.router.navigate(['/userprofile']);
      }
      else {
        this.error = true;
      }
    }
    else {
      this.error = true;
    }
  }
}
