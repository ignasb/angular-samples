import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

enum EAnimationStates {
  Default = 'default',
  Hover = 'hover',
  Active = 'active'
}

@Component({
  selector: 'app-animated-square',
  templateUrl: './animated-square.component.html',
  styleUrls: ['./animated-square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('squareAnimation', [
      state('active', style({
        backgroundColor: 'hsl(100, 50%, 50%)',
      })),
      state('hover', style({
        backgroundColor: 'hsl(150, 50%, 50%)',
      })),
      state('default', style({
        backgroundColor: 'hsl(200, 50%, 50%)'
      })),
      transition('void => default', [
        animate('1s ease-in', keyframes([
          style({
            transform: 'scale3d(1, 1, 1)',
            backgroundColor: 'hsl(200, 0%, 0%)',
            color: 'hsl(0, 100%, 100%)',
            offset: 0
          }),
          style({
            transform: 'scale3d(0.75, 0.75, 0.75)',
            backgroundColor: 'hsl(200, 25%, 25%)',
            color: 'hsl(0, 80%, 80%)',
            offset: 0.5
          }),
          style({
            transform: 'scale3d(1, 1, 1)',
            backgroundColor: 'hsl(200, 50%, 50%)',
            color: 'hsl(0, 60%, 60%)',
            offset: 1
          }),
        ]))
      ]),
      transition('default => hover', [
        animate('5s ease-in', keyframes([
          style({
            transform: 'rotate(0deg) scale3d(1, 1, 1)',
            borderRadius: '0px',
            color: 'hsl(0, 100%, 50%)',
            offset: 0
          }),
          style({
            transform: 'rotate(90deg) scale3d(1.2, 1.2, 1.2)',
            borderRadius: '48px',
            color: 'hsl(100, 100%, 50%)',
            offset: 0.25
          }),
          style({
            transform: 'rotate(0deg) scale3d(1, 1, 1)',
            borderRadius: '96px',
            color: 'hsl(200, 100%, 50%)',
            offset: 0.5
          }),
          style({
            transform: 'rotate(-90deg) scale3d(1.2, 1.2, 1.2)',
            borderRadius: '48px',
            color: 'hsl(100, 100%, 50%)',
            offset: 0.75
          }),
          style({
            transform: 'rotate(0deg) scale3d(1, 1, 1)',
            borderRadius: '0px',
            color: 'hsl(0, 100%, 50%)',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class AnimatedSquareComponent {
  animationState = 'default';

  onMouseEnter() {
    this.animationState = EAnimationStates.Hover;
  }

  onMouseLeave() {
    this.animationState = EAnimationStates.Default;
  }

  onMouseClick() {
    if (this.animationState === EAnimationStates.Active) {
      this.animationState = EAnimationStates.Default;
    } else {
      this.animationState = EAnimationStates.Active;
    }
  }
}
