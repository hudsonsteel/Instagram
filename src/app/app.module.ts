import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { Autenticacao } from './Acesso/Shared/autenticacao.service'
import { RouterModule, Router } from '@angular/router'

import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { AcessoComponent } from './Acesso/acesso-component/acesso-component.component'
import { BannerComponentComponent } from './Acesso/Banner/banner-component/banner-component.component';
import { LoginComponentComponent } from './Acesso/Login/login-component/login-component.component';
import { CadastroComponentComponent } from './Acesso/Cadastro/cadastro-component/cadastro-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home/home.component';
import { PublicacoesComponent } from './Home/publicacoes/publicacoes.component'
import { AutenticacaoGaurd } from './autenticacao-guard.servie';
import { IncluirPublicacaoComponent } from './home/incluir-publicacao/incluir-publicacao.component';
import { Bd } from './bd.service';
import { Progresso } from './progresso.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponentComponent,
    LoginComponentComponent,
    CadastroComponentComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Autenticacao, Bd, Progresso, AutenticacaoGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
