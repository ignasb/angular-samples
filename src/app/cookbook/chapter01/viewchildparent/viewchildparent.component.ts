import { Component, ViewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-viewchildparent',
  templateUrl: './viewchildparent.component.html',
  styleUrls: ['./viewchildparent.component.scss']
})
export class ViewchildparentComponent {
  // @ViewChild('viewchild'): selects by template variable
  @ViewChild(ViewchildComponent) // selects by class
  child!: ViewchildComponent;

  addItem(): void {
    this.child.items.push('ITEM');
  }
}
