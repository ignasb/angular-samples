import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-button-animation',
  templateUrl: './simple-button-animation.component.html',
  styleUrls: ['./simple-button-animation.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        // height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '200px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', animate('2s', keyframes([
        style({ opacity: 0.1, offset: 0.1 }),
        style({ opacity: 0.6, offset: 0.2 }),
        style({ opacity: 1, offset: 0.5 }),
        style({ opacity: 0.2, offset: 0.7 })
      ])))
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SimpleButtonAnimationComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationStart(e: any): void {
    // console.log(e);
  }

  onAnimationDone(e: any): void {
    // console.log(e);
  }
}
