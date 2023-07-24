import { Component } from '@angular/core';

@Component({
  selector: 'app-settergetter',
  templateUrl: './settergetter.component.html',
  styleUrls: ['./settergetter.component.scss']
})
export class SettergetterComponent {
  str: string = '';

  generateString(): void {
    this.str = (Math.random() + 1).toString(36).substring(7);
  }
}
