import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-slider',
  templateUrl: './simple-slider.component.html',
  styleUrls: ['./simple-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSliderComponent implements AfterViewInit {
  @ViewChild('slides')
  slidesContainer!: { nativeElement: HTMLDivElement; };

  ngAfterViewInit(): void {
    this.slidesContainer.nativeElement.style.left = '0px';
  }

  slide(direction: 'left' | 'right'): void {
    const nextPos = this.getNextPos(direction);
    this.setElementLeftProperty(nextPos);
  }

  getNextPos(direction: 'left' | 'right'): string {
    const SLIDE_WIDTH = 120;
    const SLIDE_COUNT = 3;
    const currentPos = Number.parseInt(this.slidesContainer.nativeElement.style.left)

    if ((currentPos < 0) && direction === 'left') {
      return `${currentPos + SLIDE_WIDTH}px`;
    }

    if ((Math.abs(currentPos) < (SLIDE_WIDTH * SLIDE_COUNT)) && direction === 'right') {
      return `${currentPos - SLIDE_WIDTH}px`;
    }

    return `${currentPos}px`
  }

  setElementLeftProperty(value: string): void {
    this.slidesContainer.nativeElement.style.left = value;
  }
}
