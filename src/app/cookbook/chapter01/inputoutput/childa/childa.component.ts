import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildaComponent {
  @Input()
  item: any;

  @Output()
  countChange: EventEmitter<number> = new EventEmitter();

  increment(): void {
    this.item.count += 1;
    this.emit();
  }

  decrement(): void {
    this.item.count -= 1;
    this.emit();
  }

  reset(): void {
    this.item.count = 0;
    this.emit();
  }

  emit(): void {
    console.log(this.item.count);
    this.countChange.emit(this.item.count);
  }
}
