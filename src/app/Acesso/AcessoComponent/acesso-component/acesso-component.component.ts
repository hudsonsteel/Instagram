import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-acesso-component',
  templateUrl: './acesso-component.component.html',
  styleUrls: ['./acesso-component.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({ opacity: 1 })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-70px, 0)' }),
        animate('500ms 1s ease-in-out')//duração, delay e aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({ opacity: 1 })),
      transition('void => criado',[
       style({opacity: 0,transform: 'translate(70px, 0px)'}),
      animate('500ms 1s ease-in-out')
    ])
    ])
  ]
})
export class AcessoComponentComponent implements OnInit {
  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'
  public cadastro: boolean = true
  
  constructor() { }

  ngOnInit() {
    console.log(this.cadastro)
  }

  public exibirCadastro(event: boolean): void{
console.log(event)
  }
}
