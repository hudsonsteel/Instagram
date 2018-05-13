import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcessoComponentComponent } from './Acesso/AcessoComponent/acesso-component/acesso-component.component'
import { BannerComponentComponent } from './Acesso/AcessoComponent/Banner/banner-component/banner-component.component';
import { LoginComponentComponent } from './Acesso/AcessoComponent/Login/login-component/login-component.component';
import { CadastroComponentComponent } from './Acesso/AcessoComponent/Cadastro/cadastro-component/cadastro-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    AcessoComponentComponent,
    BannerComponentComponent,
    LoginComponentComponent,
    CadastroComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
