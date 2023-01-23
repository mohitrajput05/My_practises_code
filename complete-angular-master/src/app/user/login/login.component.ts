import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User("","","");
  constructor(private router:Router,private taoster: ToastrService,private _authService:AuthService) { }

  ngOnInit(): void {
  }
  public signInUser(){
    this._authService.signInUser(this.user).subscribe(data=>{
      sessionStorage.setItem('token',data.token);
      sessionStorage.setItem('userId',data.result._id);
      this.taoster.success("Login Success","Success");
      this.router.navigate(['dashboard']);
    },err=>{
      console.log(err);
      if(err instanceof HttpErrorResponse){
        if(err.status == 401){
          this.taoster.error("Invalid User","Error");
        }
        else if(err.status == 500){
          this.taoster.error("Internal Server Error","Error");

        }
      }
    });
  }
}
