import { animate, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-filtering2',
  templateUrl: './list-filtering2.component.html',
  styleUrls: ['./list-filtering2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listChange', [
      transition('* => *', [
        query('li span', style({
          transform: 'translateY(-10px)',
        })),
        query('li span', stagger('50ms', [animate('200ms', style({
          transform: 'translateY(0px)',
        }))])),
        query('li ', style({
          opacity: 0,
          transform: 'translate(-50px)'
        })),
        query('li ',
          stagger('50ms', [
            sequence([
              animate('500ms ease', style({
                opacity: 0,
              })),
              animate('500ms ease', style({
                transform: 'translate(0px)',
                opacity: 1
              }))
            ])
          ]))
      ])
    ])]
})
export class ListFiltering2Component {
  filter: string = '';

  items: string[] = [
    'mazda',
    'bmw',
    'toyota',
    'mercedes',
    'audi'
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
