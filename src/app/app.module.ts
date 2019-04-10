import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgxPaginationModule} from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import {Ng2PaginationModule} from 'ng2-pagination';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxPaginationModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
