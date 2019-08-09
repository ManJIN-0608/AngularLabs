import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string =  "";
  birthday:string = "";
  age:string = "";

  constructor() { }

  ngOnInit() {

    this.username = sessionStorage.getItem('username');
    this.birthday = sessionStorage.getItem('birthday');
    this.age = sessionStorage.getItem('age');

  }

  Update(){
    console.log('Update');
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('birthday', this.birthday); 
    sessionStorage.setItem('age', this.age);    
    //this.router.navigateByUrl('/login');
  }

}
