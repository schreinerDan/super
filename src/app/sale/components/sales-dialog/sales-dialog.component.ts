import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-dialog',
  templateUrl: './sales-dialog.component.html',
  styleUrls: ['./sales-dialog.component.css']
})
export class SalesDialogComponent {
  payments:any[]=['money'];
  difference = 0.0;
  constructor( public dialogRef: MatDialogRef<SalesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

    }

    calc(){
      this.difference = this.data.amount_paid - this.data.amount;
      this.data.difference = String(this.difference.toFixed(2));

    }
    onCancel(){

    }

}
