import { Component } from '@angular/core';
import { cardAnimation } from './animations';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data);
  }

  onCardHover(): void {
    this.isCardHovered = true;
  }

  onCardLeave(): void {
    this.isCardHovered = false;
  }
}
