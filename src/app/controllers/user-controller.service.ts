import { Router } from '@angular/router';
import { User } from '../models/user';
import { StorageService } from '../shared/storage.service';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

constructor(private userService:UserService,
          private storage:StorageService,private router: Router,
          private snackBar: MatSnackBar,) { }



sendLoginData(data:any):void {
  this.userService.login(data).subscribe((response) => {

    if(response){



      this.storage.token=response.token;
      this.storage.user = new User();
      this.storage.user.name = response.user.name
    }

    this.router.navigate(['/']);




  },(errorResponse) => {
    this.snackBar.open(errorResponse.error.message, 'ERRO', {
      duration: 2000,
    });

  });
}



}
