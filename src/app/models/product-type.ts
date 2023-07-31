export class ProductType {
  id:number=0
  name:string="";
  percentage:number=0;
  constructor(data?:any){
    if(data!=null){
    Object.assign(this, data);

    }
  }
}
