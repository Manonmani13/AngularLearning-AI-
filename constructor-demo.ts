class User{
    userId:number;
    userName:string;
    constructor(userId:number,userName:string){
        this.userId=userId;
        this.userName=userName;
    }
}
let user=new User(12,"mano")