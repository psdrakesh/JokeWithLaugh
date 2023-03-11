import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesListComponent } from './jokes/jokes-list/jokes-list.component';
import { JokesDetailComponent } from './jokes/jokes-detail/jokes-detail.component';

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
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
