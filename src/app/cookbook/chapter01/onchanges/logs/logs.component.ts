import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsComponent implements OnChanges {
  @Input()
  str: string | undefined;

  logs: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    const { str } = changes;
    if (!!str && !!str.currentValue) {
      this.logs.push(str.currentValue);
    }
  }
}
