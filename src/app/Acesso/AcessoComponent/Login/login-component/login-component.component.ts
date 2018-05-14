import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  @Output() public cadastro =  new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('LoginComponentComponent - ngOnInit', this.cadastro)
  }

    /**
     * name
 :void     */
    public exibirPainelCadastro():void  {
      this.cadastro.emit('true')
    console.log('LoginComponentComponent - Cadastrar', this.cadastro)
      
    }

}
