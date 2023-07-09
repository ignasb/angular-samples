import { ChangeDetectionStrategy, Component, ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[projectedConditionalContent]'
})
export class ConditionalContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
  }
}

@Component({
  selector: 'app-conditional-content-projection',
  templateUrl: './conditional-content-projection.component.html',
  styleUrls: ['./conditional-content-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionalContentProjectionComponent {
  isFirstEnabled = false;

  @ContentChild(ConditionalContentDirective) content!: ConditionalContentDirective;

  toggleFirst(): void {
    this.isFirstEnabled = !this.isFirstEnabled;
  }


}
