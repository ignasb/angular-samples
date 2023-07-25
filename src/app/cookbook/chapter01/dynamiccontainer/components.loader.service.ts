import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { DynamicContainerService } from './dynamic.container.service';
import { BehaviorSubject, from, map } from 'rxjs';

export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}

@Injectable({
  providedIn: 'root'
})
export class ComponentsLoaderService {
  activeComponent$: BehaviorSubject<string> = new BehaviorSubject('A');

  // DEPRECATED: ComponentFactoryResolver
  constructor(private cfr: ComponentFactoryResolver) { }

  // ViewContainerRef createComponent takes component directly without resolved factory.
  private forChild(vcr: ViewContainerRef, cl: ComponentLoader) {
    return from(cl.loadChildren()).pipe(
      map((component) => vcr.createComponent(component))
    )
  }

  private childA() {
    return () => import('./dynamicchilda/dynamicchilda.component').then(
      m => m.DynamicchildaComponent
    );
  }

  private childB() {
    return () => import('./dynamicchildb/dynamicchildb.component').then(
      m => m.DynamicchildbComponent
    );
  }

  private childC() {
    return () => import('./dynamicchildc/dynamicchildc.component').then(
      m => m.DynamicchildcComponent
    );
  }

  loadComponent(vcr: ViewContainerRef, activeComponent: string) {
    vcr.clear();

    const getComponent: any = () => {
      if (activeComponent === 'A') {
        return this.childA();
      }

      if (activeComponent === 'B') {
        return this.childB();
      }

      if (activeComponent === 'C') {
        return this.childC();
      }

      return this.childA();
    }

    return this.forChild(vcr, {
      loadChildren: getComponent()
    })
  }
}
