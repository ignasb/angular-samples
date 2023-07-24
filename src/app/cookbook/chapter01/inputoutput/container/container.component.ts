import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  activeItem = {
    isActive: true,
    label: 'Active Item Label',
    count: 0
  };

  onCountChange(count: number): void {
    this.activeItem = {
      ...this.activeItem,
      count
    };
    console.table(this.activeItem);
  }
}
