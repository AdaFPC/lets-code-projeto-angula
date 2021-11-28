import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

 

  constructor( private el: ElementRef) {
    
    
   }

 @Input('eventType') set eventType(value:string){
  this.el.nativeElement.className = `event-${value}`
 }
}
