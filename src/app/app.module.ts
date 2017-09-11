import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { homeComponent } from './Home.Component';
import { postsComponent } from './Posts.Component';
import { usersComponent } from './Users.Component';
//import { editComponent } from './Edit.Component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: 'Home',  component: homeComponent },
  {path: 'Posts', component: postsComponent },
  {path: 'Users', component: usersComponent },
  //{path: 'Edit', component: editComponent }
];

 @NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    postsComponent,
    usersComponent,
    //editComponent
   

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
