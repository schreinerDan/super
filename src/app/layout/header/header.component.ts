import { ConnectableObservable } from 'rxjs';
import { StorageService } from '../../shared/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(public storage:StorageService,private router: Router) { }

  ngOnInit(): void {

  }
  login():void{

    this.router.navigate(['/login']);
  }
  products():void{
    this.router.navigate(['/product/list']);
  }
  checkout():void{

    this.router.navigate(['/shop']);
  }
}
