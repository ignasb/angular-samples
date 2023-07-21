import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { defaultListItemAnimation } from './list-filtering.animations';

@Component({
  selector: 'app-list-filtering',
  templateUrl: './list-filtering.component.html',
  styleUrls: ['./list-filtering.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        useAnimation(defaultListItemAnimation, {
          params: {
            opacity: 1,
            transform: 'translate(-10%)',
            time: '200ms'
          }
        })
      ]),
      transition(':leave', [
        style({ opacity: 0.8 }),
        useAnimation(defaultListItemAnimation, {
          params: {
            opacity: 0,
            transform: 'translateX(10%)',
            time: '200ms'
          }
        })
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
