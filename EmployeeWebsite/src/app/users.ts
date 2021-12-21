export class Users{

  id:string="";
  title: string= "";
  body: string = "";

  constructor (id: any, firstName: any, lastName: any,
    email: any, mobile: any, salary: any)
    {
      this.id= id;
      this.title=firstName;
      this.body=lastName;
    }
}
