import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
export class UsersService {
private url: string;
private PostUrl: string;
private deletUrl:string;
Get() {
return this.http.get(this.url);
}
Post(body: any) {
return this.http.post(this.PostUrl, body );
}
Delete(body:any){
    return this.http.delete(this.url+body)
}
constructor(@Inject(Http) private http: Http )
{
this.url = 'https://jsonplaceholder.typicode.com/users';
this.PostUrl = 'https://jsonplaceholder.typicode.com/posts';

}

}