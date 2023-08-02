export class Sale {
  [x: string]: any;
  id:number =0;
  amount:number=0;
  amount_paid:number=0;
  difference:number=0;
  total_tax:number=0;
  created:any=0;
  products_solds:any="";
  payment:any=0;


 constructor(data?:any){
    if(data!=null){
    Object.assign(this, data);

    }

 }

}
