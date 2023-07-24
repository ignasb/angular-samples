import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildbComponent {
  @Input()
  item: any;
}
