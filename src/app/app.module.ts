import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesListComponent } from './jokes/jokes-list/jokes-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHTTPInterceptorService } from './global-http-Interceptor.service';
import { JokesService } from './jokes/jokes.service';
import { JokesDetailComponent } from './jokes/jokes-detail/jokes-detail.component';
import { JokesCountService } from './jokes/jokes-count.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokesComponent,
    JokesListComponent,
    JokesDetailComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    HttpClientModule
 
  ],
  providers: [
   
    JokesService,
    JokesCountService,
    {provide:HTTP_INTERCEPTORS,useClass:GlobalHTTPInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
