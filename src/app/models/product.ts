export class Product {
   barcode:number =0;
   brand:string="";
   description:string="";
   image:string="";
   name:string="";
   origin:string="";
   price:number=0;
   price_buy:number=0;
   stock_quantity:number=0;
   type_id:number=0;
   thumbnail:any=false;


  constructor(data?:any){
     if(data!=null){
     Object.assign(this, data);

     }

  }




}
