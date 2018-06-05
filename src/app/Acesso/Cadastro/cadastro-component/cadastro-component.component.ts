import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'
import { Usuario } from '../../Models/usuario.model';
import { Autenticacao } from '../../Shared/autenticacao.service';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {

  @Output() exibirPainel: EventEmitter<boolean> = new EventEmitter<boolean>();

    public formulario: FormGroup = new FormGroup({
      'email': new FormControl(null),
      'nome_completo': new FormControl(null),
      'nome_usuario': new FormControl(null),
      'senha': new FormControl(null)
    }) 

  constructor(public AutenticacaoService: Autenticacao) { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit(false)
  }
  public cadastrarUsuario(): void{

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha,
    )
    
    this.AutenticacaoService.cadastroUsuario(usuario)
    .then(() => this.exibirPainelLogin())
  }
}
