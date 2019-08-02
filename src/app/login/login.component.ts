import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  users = [{'email':'abc@com.au', 'pwd':'123'}, {'email':'abd@com.au', 'pwd':'123'}, {'email':'abe@com.au', 'pwd':'123'}]
  user = {email: '', password: ''};
  ngOnInit() {
  }

  login(){
    var match = 0
    for (var i = 0; i<3; i++) {
        
      if(this.user.email == this.users[i].email && this.user.password == this.users[i].pwd){
        this.router.navigateByUrl("account");
        match = 1
        return;
      }
    }
    if (! match) {alert('Error!');}

  }

}
