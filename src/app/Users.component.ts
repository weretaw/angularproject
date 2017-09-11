import { Component, AfterViewInit, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';
import { Users } from './Users';
import { UsersService } from './Users.Service';
@Component({
    selector: 'Users',
    templateUrl: './Users.component.html',
    providers: [UsersService],
})
export class  usersComponent {
    users: Users;
    newUser: any;
    Ausers = new Users('', '', '', ['', '', '']);
    addusers = new Users('', '', '', ['', '', '']);
    HaidShowAddUser = false;
    EditUserForm= false;
    ChangeEditForm: any;
    deletUser:any;
    @Input() toEditarray: any[];
    @Output() Editarray: EventEmitter<Users> = new EventEmitter<Users>();

    arUsers: any[];
    ngAfterViewInit() {
        const req = this.service.Get();
        req.map(res => <any[]>res.json()).subscribe(posts => {
                this.arUsers = posts;
            });
    }
    constructor(private service: UsersService) {

    }
    AddUserHandelr() {
        this.HaidShowAddUser = !this.HaidShowAddUser;
    }

    AddUserToArry(newUser: any) {
        console.log(newUser.value);
        this.users = newUser.value;
        const body = this.users;
        console.log(body);
        const req = this.service.Post(body);
        req.subscribe(rsp => {
            console.log( 'success:' + rsp);
        },
         (err) => {
           console.log( 'error:' + err);
         });
        this.arUsers.push(this.users);
        this.HaidShowAddUser = !this.HaidShowAddUser;
    }

    SaveEdit()
    {
     this.EditUserForm = !this.EditUserForm;
    }




    EditUser(editUser: any) {
        console.log(editUser);
        this.Ausers = editUser;
        this.EditUserForm = !this.EditUserForm;
    }

    SubmitHandler(myNgForm: any) {
        console.log(myNgForm);
    }

    DeleteUser(Index: number) {

        const body=this.deletUser
        console.log(body);
        const req=this.service.Delete(body);
        req.subscribe(rsp=>{
            console.log("success:" + rsp);
            this.arUsers.splice(Index, 1);
        },
        (err)=>{
            console.log("error:" + err);
        })
        if (confirm('Are you sure to delete this user?')) {
            this.arUsers.splice(Index, 1);
        }

    }

}
