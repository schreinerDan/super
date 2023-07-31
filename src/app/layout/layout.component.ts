import { Component } from '@angular/core';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(public storage: StorageService){

  }

}
