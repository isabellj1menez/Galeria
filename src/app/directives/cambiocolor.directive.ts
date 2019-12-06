import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCambiocolor]'
})
export class CambiocolorDirective {

  private possibleColors:Array<string>=["salmon", "aqua", "blueviolet", "goldenrod", "red", "green" ]

  //decorador 
@HostBinding('style.color')colorBinding:string;

  //HOSTLISTENER escuchar un elemento al que hace referencia
  @HostListener("click")
  CambiaColor(){
    console.log('Se ejecuto el HostListener');
    this.el.nativeElement.style.background ="red"
  }

  @HostListener("mouseover")
  CambiarColors(){
    this.el.nativeElement.style.background = null
    const colorPick = Math.floor(Math.random()*this.possibleColors.length)
    this.colorBinding = this.possibleColors[colorPick]
  }

  // @HostListener("mouseout")
  // CambiarColortext(){
  //   this.el.nativeElement.style.background ="green"
  // }

  constructor( private el:ElementRef) {
  console.log(this.el.nativeElement );
  console.log(this.el);
  
   }

}
