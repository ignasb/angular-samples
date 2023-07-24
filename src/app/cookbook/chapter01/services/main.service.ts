import { Injectable } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _item = new BehaviorSubject({
    label: 'Service communication',
    count: 0
  });

  item$ = this._item.asObservable();

  constructor() { }

  increment(): void {
    const item = this._item.getValue();
    this._item.next({ ...item, count: item.count + 1 })
  }

  decrement(): void {
    this.item$.pipe(first()).subscribe((item) => {
      this._item.next({ ...item, count: item.count - 1 })
    })
  }

  reset(): void {
    const item = this._item.getValue();
    this._item.next({ ...item, count: 0 })
  }
}
