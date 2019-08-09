import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

// need to import NgForm and Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  users = [{'email':'abc@com.au', 'pwd':'123'}, {'email':'abd@com.au', 'pwd':'123'}, {'email':'abe@com.au', 'pwd':'123'}]
  user = {email: '', password: ''};
  
  

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    this.usersService.apiPost('http://localhost:3000/api/login', this.user)
    .subscribe((res)=>{
      console.log(res.valid);
      if (res.valid){
        sessionStorage.setItem('email', res.email);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('birthday', res.birthday); 
        sessionStorage.setItem('age', JSON.stringify(res.age));
        sessionStorage.setItem('valid', JSON.stringify(res.valid));
        console.log(sessionStorage.getItem('email'));
        console.log(sessionStorage.getItem('username'));
        console.log(sessionStorage.getItem('birthday'));
        console.log(sessionStorage.getItem('age'));
        console.log(sessionStorage.getItem('valid'));
        this.router.navigateByUrl('/account');
      }else {
        alert('Incorrect email or password!')
      }
    });
  }

}
