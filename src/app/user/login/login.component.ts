import { UserService } from './../../services/user.service';
import { Constructor } from './../../../../node_modules/@angular/cdk/schematics/update-tool/migration.d';
import { Component, OnInit } from '@angular/core';
import { User, UserLogin } from 'src/app/models/user';
import { UserControllerService } from 'src/app/controllers/user-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = new UserLogin( '', "");

  submitted = false;
  constructor(private userController : UserControllerService){

  }
  onSubmit() { this.submitted = true;



  this.userController.sendLoginData(this.model);

  }
}
