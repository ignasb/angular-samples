import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainService } from '../main.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-schilda',
  templateUrl: './schilda.component.html',
  styleUrls: ['./schilda.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchildaComponent {
  item$: any;
  count$: any;
  label$: any;

  constructor(private mainService: MainService) {
    this.item$ = this.mainService.item$;
    this.count$ = this.item$.pipe(map(({ count }) => count));
    this.label$ = this.item$.pipe(map(({ label }) => label));
  }
}
