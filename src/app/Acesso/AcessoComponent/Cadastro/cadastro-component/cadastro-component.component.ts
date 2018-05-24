import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {

  @Output()  exibirPainel: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  constructor() { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    console.log('exibirPainelLogin')
    
    this.exibirPainel.emit(false)
    // console.log('LoginComponentComponent - Cadastrar', this.cadastro)
  }

}
