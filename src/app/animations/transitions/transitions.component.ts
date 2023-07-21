import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transitions',
  templateUrl: './transitions.component.html',
  styleUrls: ['./transitions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionsComponent implements AfterViewInit {
  @ViewChild('basicInput')
  inputElement!: { nativeElement: HTMLInputElement };

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data);
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.addEventListener('transitionend', (ev) => {
      console.log(`${ev.propertyName}-${ev.pseudoElement || 'EMPTY'}-${ev.elapsedTime}`);
    })
  }
}
