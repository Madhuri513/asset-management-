import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
username='';
lastname='';
email='';
  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem("name");
    this.lastname= sessionStorage.getItem('lname');
    this.email = sessionStorage.getItem('email');
    console.log(this.username);
  }

}
