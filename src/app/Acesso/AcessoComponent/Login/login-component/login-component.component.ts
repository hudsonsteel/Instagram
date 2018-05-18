import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    // console.log('LoginComponentComponent - ngOnInit', this.cadastro)
  }

  /**
   * name
:void     */
  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('true')
    // console.log('LoginComponentComponent - Cadastrar', this.cadastro)

  }

}
