import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:string =  "";
  birthday:string = "";
  age:string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.username = sessionStorage.getItem('username');
    this.birthday = sessionStorage.getItem('birthday');
    this.age = sessionStorage.getItem('age');

  }

  Logout() {
    console.log('Log out');
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
