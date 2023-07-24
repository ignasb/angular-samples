import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-schildb',
  templateUrl: './schildb.component.html',
  styleUrls: ['./schildb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchildbComponent {

  constructor(private mainService: MainService) {
  }

  increment(): void {
    this.mainService.increment();
  }

  decrement(): void {
    this.mainService.decrement();
  }

  reset(): void {
    this.mainService.reset();
  }
}
