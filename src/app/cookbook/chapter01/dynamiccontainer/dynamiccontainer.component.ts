import { Component, ViewChild } from '@angular/core';
import { HostDirective } from './host.directive';
import { Subject, mergeMap, takeUntil } from 'rxjs';
import { DynamicContainerService } from './dynamic.container.service';
import { ComponentsLoaderService } from './components.loader.service';

@Component({
  selector: 'app-dynamiccontainer',
  templateUrl: './dynamiccontainer.component.html',
  styleUrls: ['./dynamiccontainer.component.scss']
})
export class DynamiccontainerComponent {
  @ViewChild(HostDirective, { static: true })
  hostDirective!: HostDirective;
  private destroySubject = new Subject();

  constructor(private componentsLoaderService: ComponentsLoaderService) { }

  ngOnInit() {
    const vcr = this.hostDirective.vcr;

    this.componentsLoaderService.activeComponent$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(ac => this.componentsLoaderService.loadComponent(vcr, ac))
      ).subscribe();
  }

  loadAComponent(): void {
    this.componentsLoaderService.activeComponent$.next('A');
  }

  loadBComponent(): void {
    this.componentsLoaderService.activeComponent$.next('B');
  }

  loadCComponent(): void {
    this.componentsLoaderService.activeComponent$.next('C');
  }
}
