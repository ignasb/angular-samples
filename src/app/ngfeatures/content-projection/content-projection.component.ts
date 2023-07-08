import { AfterContentChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentProjectionComponent implements AfterContentChecked {
  selectedValue = "mazda";

  cars = [
    "mazda", "vw", "nissan"
  ]

  ngAfterContentChecked(): void {
    console.log('After content checked.')
  }

  onSelectChange(value: any): void {
    console.log(value);
  }
}
