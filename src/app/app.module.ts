import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './pessoa.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PessoaService],
  bootstrap: [AppComponent, PessoaComponent]
})
export class AppModule { }
