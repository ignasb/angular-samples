import { Component, Inject, OnInit } from '@angular/core';
import { DiClass, DiClassToken } from './di-class';

@Component({
  selector: 'app-di-token-sample',
  templateUrl: './di-token-sample.component.html',
  styleUrls: ['./di-token-sample.component.scss']
})
export class DiTokenSampleComponent implements OnInit {

  constructor(@Inject(DiClassToken) private diClass: typeof DiClass) { }

  ngOnInit(): void {
    const diItem = new this.diClass('Test1', 1);
    console.log(diItem);
  }
}
