import { Component, AfterViewInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { UsersService } from './Users.Service';
@Component ({
selector: 'Posts',
template: `<h1>Post</h1>
<i *ngIf="PostArray==null" class="fa fa-spinner fa-spin" style='font-size: 48px; color: aquamarine;'  ></i>
<h1 (class)="ngAfterViewInit()"></h1>
<table class="table table-bordered table-inverse">
<tr *ngFor="let item of PostArray;let i=index;">
<td>{{item.title}}</td>
<tr>
</table>

`,
})
export class postsComponent
{
    @Input() loading: boolean = true;

    PostArray: any[];
     ngAfterViewInit() {
        let req = this.http.get('http://jsonplaceholder.typicode.com/posts');
        req.subscribe(rsp => {
            this.PostArray = rsp.json();
        });
    }
    constructor(private http: Http) {}
}