import{CanActivate} from '@angular/router'
import { Injectable } from '@angular/core';
import { Autenticacao } from './Acesso/Shared/autenticacao.service';

@Injectable()

export class AutenticacaoGaurd implements CanActivate {

    constructor(private autenticacao: Autenticacao){}

    canActivate(): boolean 
    {
       return this.autenticacao.autenticado()
    }
}