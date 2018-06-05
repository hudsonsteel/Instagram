import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Autenticacao } from '../../Shared/autenticacao.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  @Output() exibirPainel: EventEmitter<boolean> = new EventEmitter<boolean>();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {
    // console.log('LoginComponentComponent - ngOnInit', this.cadastro)
  }

  /**
   * name
:void     */
  public exibirPainelCadastro(): void {
    this.exibirPainel.emit(true)
  }

  public autenticar():void{
    console.log(this.formulario)
    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    )
  }
}
