import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ImagemModel } from './imagem.models';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({ opacity: 0 })),
      state('visivel', style({ opacity: 1 })),
      transition('escondido <=> visivel', animate('1s ease-in')),
      //  transition('visivel => escondido', animate('0.5s ease-in'))

    ])
  ]
})
export class BannerComponentComponent implements OnInit {
  public estado: string = 'visivel'
  public imagens: ImagemModel[] = [
    { estado: 'visivel', url: "/assets/banner-acesso/img_1.png" },
    { estado: 'escondido', url: "/assets/banner-acesso/img_2.png" },
    { estado: 'escondido', url: "/assets/banner-acesso/img_3.png" },
    { estado: 'escondido', url: "/assets/banner-acesso/img_4.png" },
    { estado: 'escondido', url: "/assets/banner-acesso/img_5.png" }
  ]
  constructor() { }

  ngOnInit() {
    // console.log(this.imagens)
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {
    let idx: number 
    for (var i: number = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido'

        idx = i === 4 ? 0 : i + 1
        break
      }
    }
    // console.log(this.imagens[idx])
    this.imagens[idx].estado = 'visivel'
    setTimeout(() => this.logicaRotacao(), 3000);
  }
}
