export class UserLogin {
  constructor(
    public username: string,
    public password: string,

  ) {  }
}
export class User {
  public username: string="";
  public password: string="";;
  public name: string="";
  public surname: string="";
  public email: string="";
  public phone: string="";
  public role: string="";
  public token: string="";


  constructor(data?:any) {
    if(data!=null){
      Object.assign(this, data);

      }

    }
    serialize():any{
      return JSON.stringify(this);
    }
}
