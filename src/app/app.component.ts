import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'super';
  showFiller = false;
  constructor(public storage: StorageService,private route:Router) {

  }
  ngOnInit(): void {
    this.route.navigate(['/login'])

  }
}
