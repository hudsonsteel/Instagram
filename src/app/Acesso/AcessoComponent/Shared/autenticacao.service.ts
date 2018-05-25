import { Usuario } from '../Models/usuario.model'
import * as firebase from 'firebase'

export class Autenticacao {

    public cadastroUsuario(usuario: Usuario): void {
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                firebase.database()
            })
            .catch((erro: Error) => { console.log(erro) })
    }
}