import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesGalleryRoutingModule } from './jokes-gallery-routing.module';
import { JokesGalleryComponent } from './jokes-gallery.component';
import { DemoMaterialModule } from '../demo-material/demo-material.module';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { FlagComponent } from './flag/flag.component';

@NgModule({
  declarations: [JokesGalleryComponent, JokeDetailsComponent, FlagComponent],
  imports: [
  CommonModule,
    JokesGalleryRoutingModule,
    DemoMaterialModule,
  ],
  entryComponents: [JokeDetailsComponent]
})
export class JokesGalleryModule { }
