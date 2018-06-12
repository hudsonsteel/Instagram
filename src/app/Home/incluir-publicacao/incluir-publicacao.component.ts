import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../../bd.service';
import * as firebase from 'firebase'
import { Progresso } from '../../progresso.service';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {
  public formulario: FormGroup = new FormGroup(
    {
      'titulo': new FormControl(null)
    }
  )
  public email: string
  public imagem: any
  public progressoPublicacao: string = 'pendente'
  public porcentagemUpload: number
  constructor(private serviceBd: Bd, private serviceProgresso: Progresso) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }
  public publicar(): void {
    this.serviceBd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    })

    let continua = new Subject()

    continua.next(true)

    let acompanhamentoUpload = interval(1500).pipe(takeUntil(continua))

    acompanhamentoUpload

      .subscribe(() => {
        this.progressoPublicacao = 'andamento'
        // console.log('sattus', this.serviceProgresso.status)
        // console.log('estado', this.serviceProgresso.estado)

        this.porcentagemUpload = Math.round((this.serviceProgresso.estado.bytesTransferred / this.serviceProgresso.estado.totalBytes) * 100)
        if (this.serviceProgresso.status === 'concluido') {
          this.progressoPublicacao = 'concluido'
          continua.next(false)
          this.progressoPublicacao = 'pendente'
        }
      })


  }

  public preparaImagemUpload(evento: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files
  }
}
