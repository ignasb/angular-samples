import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggerComponent {
  _str: string = '';

  @Input()
  set str(s: string) {
    if (s) {
      this._str = s;
      this.logs.push(s);
    }
  }
  get str(): string {
    return this._str;
  }

  logs: string[] = [];

}
