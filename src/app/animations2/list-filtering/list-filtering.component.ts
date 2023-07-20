import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-filtering',
  templateUrl: './list-filtering.component.html',
  styleUrls: ['./list-filtering.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate('200ms', style({
          transform: 'translateX(-10%)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({ opacity: 0.8 }),
        animate('200ms', style({
          transform: 'translateX(10%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ListFilteringComponent {
  filter: string = '';

  items: string[] = [
    'apple',
    'banana',
    'tomato',
    'carrot',
    'potato'
  ];
  filteredItems: string[] = [];

  constructor() {
    this.filteredItems = [...this.items];
  }

  onSearch(predicate: string): void {
    if (predicate) {
      this.filteredItems = this.items.filter((i) => i.includes(predicate));
      return;
    }

    this.filteredItems = [...this.items];
  }
}
