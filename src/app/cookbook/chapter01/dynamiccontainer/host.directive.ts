import { Directive, ViewContainerRef } from "@angular/core";

@Directive({ selector: '[hostDirective]' })
export class HostDirective {
  constructor(public vcr: ViewContainerRef) { }
}
