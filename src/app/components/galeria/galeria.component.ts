import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private Imagenes =[
      "assets/IMG/IMG_01.jpg", "assets/IMG/IMG_02.jpg", "assets/IMG/IMG_03.jpg","assets/IMG/IMG_04.jpg", "assets/IMG/IMG_05.jpg", "assets/IMG/IMG_06.jpg", "assets/IMG/IMG_07.jpg", "assets/IMG/IMG_08.jpg", "assets/IMG/IMG_09.jpg", "assets/IMG/IMG_10.jpg", "assets/IMG/IMG_11.jpg", "assets/IMG/IMG_12.jpg", "assets/IMG/IMG_13.jpg", "assets/IMG/IMG_14.jpg", "assets/IMG/IMG_15.jpg"
  ]


}
