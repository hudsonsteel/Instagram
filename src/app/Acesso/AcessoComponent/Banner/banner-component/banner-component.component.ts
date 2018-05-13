import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({ opacity: 0 })),
      state('visivel', style({ opacity: 1 })),
      transition('escondido => visivel', animate('2s ease-in')),
      transition('visivel => escondido', animate('0.5s ease-in'))

    ])
  ]
})
export class BannerComponentComponent implements OnInit {
  public estado: string = 'visivel'

  constructor() { }

  ngOnInit() {
  }
  public toggleEstado() :void{
    this.estado = this.estado === 'visivel'? 'escondido': 'visivel'
  }
}
