import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  @Output()  exibirPainel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    // console.log('LoginComponentComponent - ngOnInit', this.cadastro)
  }

  /**
   * name
:void     */
  public exibirPainelCadastro(): void {
    console.log('exibirPainelCadastro')
    this.exibirPainel.emit(true)
  }
}
