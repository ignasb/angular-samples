import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FadeInComponent {
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
}
