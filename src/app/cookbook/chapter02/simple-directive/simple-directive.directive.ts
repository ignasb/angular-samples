import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSimpleDirective]'
})
export class SimpleDirectiveDirective {
  @Input()
  textColor!: string;

  @HostListener('click')
  onClick(): void {
    if (this.el.nativeElement.style.color === this.textColor) {
      this.el.nativeElement.style.removeProperty('color');
    } else {
      this.el.nativeElement.style.color = this.textColor;
    }
  }

  constructor(private el: ElementRef) {
    console.log(el);
  }

}
