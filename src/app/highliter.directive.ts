import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  public backgroundcolor:string;
  @Input() defaultColor:string;
  @Input() highlightcolor:string;
  constructor() {
    this.backgroundcolor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
    console.log('inside mouse enter');
    this.backgroundcolor=this.highlightcolor;
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundcolor=this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundcolor;
  }

}
