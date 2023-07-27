import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
  @Input()
  set appStructuralDirective(index: number) {
    if (index % 2 === 0) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else
      this.vcr.clear();
  }

  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) { }
}
