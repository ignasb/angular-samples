import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animations2',
  templateUrl: './animations2.component.html',
  styleUrls: ['./animations2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Animations2Component {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data);
  }

}
