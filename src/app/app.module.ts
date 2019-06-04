import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { RouterModule,Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    ListComponent,
    ContactComponent,
    LogoComponent,
    AboutComponent,

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'home',component:HomeComponent},
      {path:'book',component:BookComponent},
      {path:'list',component:ListComponent},
       {path:'contact',component:ContactComponent},
       {path:'logo',component:LogoComponent},
       {path:'about',component:AboutComponent},
   
   
       
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
