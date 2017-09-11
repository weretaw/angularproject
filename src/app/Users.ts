export class Users
 {
    constructor(private name:string,
                private email:string,
                private phone:string,
                private address:string[]
                )
                {

                }
  
    public get Name() : string {
        return this.name;
    }
    public set Name(value) {
        this.name = value;
    }

    public get Email() : string {
        return this.email;
    }
    public set Email(value) {
        this.email = value;
    }

    public get Address() : string[] {
        return this.address;
    }
    public set Address(value) {
        this.address = value;
    }

     public get Phone() : string {
        return this.phone;
    }
    public set Phone(value) {
        this.phone = value;
   }
     /*   public get Street() : string {
        return this.street;
    }
    public set Street(value) {
        this.street = value;
    }

        public get City() : string {
        return this.city;
    }
    public set City(value) {
        this.city = value;
    }

       public get ZipCode() : string {
        return this.zipCode;
    }
    public set ZipCode(value) {
        this.zipCode = value;
    }*/
 }