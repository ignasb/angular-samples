import { NgModule } from "@angular/core";
import { ContentProjectionComponent } from "./content-projection/content-projection.component";
import { ContentProjectionSingleSlotComponent } from "./content-projection-single-slot/content-projection-single-slot.component";
import { ContentProjectionMultipleSlotComponent } from './content-projection-multiple-slot/content-projection-multiple-slot.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ConditionalContentDirective, ConditionalContentProjectionComponent, ConditionalContentSecondDirective } from './conditional-content-projection/conditional-content-projection/conditional-content-projection.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    ContentProjectionSingleSlotComponent,
    ContentProjectionMultipleSlotComponent,
    ConditionalContentProjectionComponent,
    ConditionalContentDirective,
    ConditionalContentSecondDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class FeaturesNgModule {

}
