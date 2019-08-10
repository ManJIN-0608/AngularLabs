import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

username = sessionStorage.getItem('username');
birthday = sessionStorage.getItem('birthday');
age = sessionStorage.getItem('age');

  constructor() { }

  ngOnInit() {
  }

  Update(){
    console.log('Update');
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('birthday', this.birthday); 
    sessionStorage.setItem('age', this.age); 
    console.log(sessionStorage.getItem('username'));
    console.log(sessionStorage.getItem('birthday'));
    console.log(sessionStorage.getItem('age'));

  }

}
