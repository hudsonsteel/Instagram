import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
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
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(70px, 0px)' }),
        animate('1.5s 1s ease-in-out', keyframes([
          style({ offset: 0.80, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(20px)' }),
          style({ offset: 0.91, opacity: 1, transform: 'translateY(-20px)' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(20px)' }),
          style({ offset: 0.93, opacity: 1, transform: 'translateY(-20px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(20px)' }),
          style({ offset: 0.95, opacity: 1, transform: 'translateY(-20px)' }),
          style({ offset: 0.96, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 1, opacity: 1, transform: 'translateY(0)' })
        ]))
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
    
  }

  public onExibirCadastro(event: boolean): void {
     this.cadastro = event;
  }
  public inicioDaAnimacao(): void {
    // console.log('Inicio da animação')
  }
  public fimDaAnimacao(): void {
    // console.log('Fim da animação')
  }
}
