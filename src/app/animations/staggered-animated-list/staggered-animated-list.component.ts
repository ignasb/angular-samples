import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-staggered-animated-list',
  templateUrl: './staggered-animated-list.component.html',
  styleUrls: ['./staggered-animated-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0
          }),
          stagger(100, [
            animate('0.5s ease', style({
              opacity: 1
            }))
          ])
        ], { optional: true }),
        query(':leave', [
          style({
            opacity: 1
          }),
          stagger(100, [
            animate('0.5s ease', style({
              opacity: 0
            }))
          ])
        ], { optional: true })
      ]),
    ])
  ]
})
export class StaggeredAnimatedListComponent {
  listItems: any[] = [{ id: 0, title: 'Cat' }, { id: 1, title: 'Dog' }, { id: 3, title: 'Tiger' }];
  availableAnimals = [{ id: 0, title: 'Cat' }, { id: 1, title: 'Dog' }, { id: 3, title: 'Tiger' }, { id: 4, title: 'Aligator' }, { id: 5, title: 'Snake' }];

  getRandomIndex(): number {
    const LENGTH = this.availableAnimals.length - 1;
    return Math.floor(Math.random() * LENGTH)
  }

  removeFromList(id: number): void {
    this.listItems = this.listItems.filter((li) => li.id !== id);
  }

  addRandomAnimal(): void {
    const animal = this.availableAnimals[this.getRandomIndex()];
    this.listItems.push({ id: Math.floor(Math.random() * 100000), title: animal.title });
  }

  trackById(index: number, el: any): number {
    return el.id;
  }
}
