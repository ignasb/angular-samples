import { Component } from '@angular/core';
import { cardAnimation } from './animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    cardAnimation('cardAnimationWide', '330px')
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
