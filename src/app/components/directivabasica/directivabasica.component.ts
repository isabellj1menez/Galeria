import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivabasica',
  templateUrl: './directivabasica.component.html',
  styles: []
})
export class DirectivabasicaComponent implements OnInit {
  public cambiodevalor:number = 1;

  constructor() { }

  ngOnInit() {
  }

  public incrementar(){
    if(this.cambiodevalor<3){
      this.cambiodevalor += 1
      console.log(this.cambiodevalor);
    }
  }

  public decrementar(){
    if(this.cambiodevalor>1){
      this.cambiodevalor -= 1
      console.log(this.cambiodevalor);
    }
  }


}
