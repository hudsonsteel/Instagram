import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {
    constructor(private serviceProgresso: Progresso) { }
    public publicar(publicacao: any): void {
        console.log('Chegamos até o serviçõ publicar Bd', publicacao)


        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((resposta: any) => {

                let nomeImagem = resposta.key

                firebase.storage()
                    .ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED
                        //Acompanhamento
                        , (snapShot: any) => {
                            this.serviceProgresso.status = 'andamento'
                            this.serviceProgresso.estado = snapShot
                            //  console.log('Snapshot capturado no On:',snapShot)
                        }
                        , (erro) => {
                            this.serviceProgresso.status = 'erro'

                            // console.log(erro)
                        },
                        () => {
                            this.serviceProgresso.status = 'concluido'

                            // console.log('upload completo')
                        }

                    )

                console.log(resposta.key)
            })
    }

    public consultaPublicacoes(email: string): any {
        console.log(email)
        firebase.database().ref(`publicacoes/${btoa(email)}`)
            .once('value')
            .then((snapshot) => {
                //console.log(snapshot.val())
                let publicacoes: Array<any> = [];
                snapshot.forEach((childSnapshot: any) => {

                    let publicacao = childSnapshot.val()

                    //Consultar  a URL da imagem
                    firebase.storage()
                        .ref()
                        .child(`imagens/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            publicacao.url_imagem = url
                            publicacoes.push(publicacao)
                        })

                    console.log(publicacoes)
                })
            })


        return ''
    }
}