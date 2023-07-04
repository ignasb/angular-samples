import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideAnimation', [
      state('active', style({
        color: 'rgb(51, 51, 51)',
        backgroundColor: 'green'
      })),
      state('hovered', style({
        transform: 'scale3d(1.05, 1.05, 1.05)',
        backgroundColor: 'rgb(0, 120, 120)',
        color: 'white'
      })),
      transition('default => active', [
        style({
          transform: 'translateX(-200px)',
          opacity: 0
        }),
        animate('0.2s ease', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition('active => hovered', [
        animate('0.3s 0s ease-out', style({
          transform: 'scale3d(1.05, 1.05, 1.05)',
          backgroundColor: 'rgb(0, 120, 120)',
          color: 'white'
        }))
      ]),
      transition('hovered => active', [
        animate('0.3s 0s ease-out', style({
          transform: 'scale3d(1, 1, 1)',
          color: 'rgb(51, 51, 51)',
          backgroundColor: 'green'
        }))
      ]),
      transition('hovered => default', [
        animate('0.3s 0s ease-out', style({
          backgroundColor: 'white',
          color: 'black'
        }))
      ])
    ])
  ]
})
export class FadeInComponent {
  slideState = 'default';

  @ViewChild('A')
  compA!: { nativeElement: HTMLDivElement; };

  @ViewChild('B')
  compB!: { nativeElement: HTMLDivElement; };

  active(card: 'A' | 'B'): void {
    if (card === 'A') {
      this.compB.nativeElement.style.opacity = '0';
      this.compB.nativeElement.style.left = '-80px';
      this.compB.nativeElement.classList.remove('fadein__card--active');

      this.compA.nativeElement.style.opacity = '1';
      this.compA.nativeElement.style.left = '0px';
      this.compA.nativeElement.classList.add('fadein__card--active');
    }

    if (card === 'B') {
      this.compA.nativeElement.style.opacity = '0';
      this.compA.nativeElement.style.left = '-80px';
      this.compA.nativeElement.classList.remove('fadein__card--active');

      this.compB.nativeElement.style.opacity = '1';
      this.compB.nativeElement.style.left = '0px';
      this.compB.nativeElement.classList.add('fadein__card--active');
    }
  }

  onMouseEnter(): void {
    this.slideState = 'hovered'
  }

  onMouseClick(): void {
    if (this.slideState === 'active') {
      this.slideState = 'hovered';
    } else {
      this.slideState = 'active';
    }
  }

  onMouseLeave(): void {
    this.slideState = 'default';
  }
}
