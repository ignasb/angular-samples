import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnchangesComponent {
  str: string = '';

  generateString(): void {
    this.str = (Math.random() + 1).toString(36).substring(7);
  }
}
