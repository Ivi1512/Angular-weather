import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './ui/layout/header/header.component';
import { HTTP_INTERCEPTORS_PROVIDERS } from './core/http';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DirectivesModule } from './core/directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    DirectivesModule

  ],
  providers: [HTTP_INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
