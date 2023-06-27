import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('card-hovered', style({
        width: '220px',
        height: '110px',
        boxShadow: '10px 5px 5px lightgray'
      })),
      state('card-leave', style({
        width: '200px',
        height: '100px',
      })),
      transition('card-leave => card-hovered', [
        animate('0.3s ease', style({
          width: '220px'
        })),
        animate('0.3s ease', style({
          height: '110px'
        })),
        animate('0.3s ease', style({
          boxShadow: '10px 5px 5px lightgray'
        }))
      ]),
      transition('card-hovered => card-leave', [
        group([
          animate('0.3s ease', style({
            width: '200px'
          })),
          animate('0.3s ease', style({
            height: '100px'
          })),
          animate('0.3s ease', style({
            boxShadow: 'none'
          }))
        ])
      ])
    ])
  ]
})
export class AnimationsComponent {
  isCardHovered = false;

  onCardHover(): void {
    this.isCardHovered = true;
  }

  onCardLeave(): void {
    this.isCardHovered = false;
  }
}
