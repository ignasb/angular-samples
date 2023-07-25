import { Component } from '@angular/core';
import { ChildaViewComponent } from './childa/childa.component';

@Component({
  selector: 'app-templatevariable',
  templateUrl: './templatevariable.component.html',
  styleUrls: ['./templatevariable.component.scss']
})
export class TemplatevariableComponent {
  addItem(child: ChildaViewComponent): void {
    child.items.push('item');
  }
}
