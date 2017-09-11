import { Component,EventEmitter,Input,Output,AfterViewInit } from '@angular/core';
import {Users} from './Users';
import { UsersService } from './Users.Service';
@Component ({
selector: 'Edit',
templateUrl: './Edit.Component.html',
 providers: [UsersService],
})
export class editComponent
{
     HaidShowEditUser = false;
     //ChangeEditForm:Users;
     @Input() ChangeEditForm=new Users("","","",["","",""]);
     @Output() Editarray: EventEmitter<Users> = new EventEmitter<Users>();

     editArrUsers: any[];
    ngAfterViewInit() {
        const req = this.service.Get();
        req.map(res => <any[]>res.json()).subscribe(posts => {
                this.editArrUsers = posts;
            });
    }
    constructor(private service: UsersService) {

    }
     EditUserHandelr() {
        this.HaidShowEditUser = !this.HaidShowEditUser;
    }

       EditUser(EditUser: Users)
    {
        console.log(EditUser);
        this.ChangeEditForm = EditUser;
        this.Editarray.emit(this.ChangeEditForm);
        console.log(this.ChangeEditForm);
    }
}