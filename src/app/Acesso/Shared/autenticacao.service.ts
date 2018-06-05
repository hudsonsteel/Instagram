import { Usuario } from '../Models/usuario.model'
import * as firebase from 'firebase'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()

export class Autenticacao {
    public token_id: string

    constructor(private router: Router) {

    }

    public cadastroUsuario(usuario: Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                // delete usuario.senha
                // delete usuario.nome_completo
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((erro: Error) => { console.log(erro) })
    }

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            })
            .catch((erro: Error) => console.log(erro))
    }
    public autenticado(): boolean {
        if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')
        }

        if(this.token_id === undefined)
        {
            this.sair()
        }
        return this.token_id !== undefined
    }
    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                this.token_id = undefined
                localStorage.removeItem('idToken')
                this.router.navigate(['/'])
            })
    }
}