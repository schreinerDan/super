export class Sale {
  id:number =0;
  amount:number=0;
  amount_paid:number=0;
  difference:number=0;
  total_tax:number=0;
  sale_date:any="";
  products_solds:any="";
  payment:any=0;


 constructor(data?:any){
    if(data!=null){
    Object.assign(this, data);

    }

 }

}
