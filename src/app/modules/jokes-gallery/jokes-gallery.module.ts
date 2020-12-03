import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesGalleryRoutingModule } from './jokes-gallery-routing.module';
import { JokesGalleryComponent } from './jokes-gallery.component';
import { DemoMaterialModule } from '../demo-material/demo-material.module';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [JokesGalleryComponent, JokeDetailsComponent],
  imports: [
    CommonModule,
    JokesGalleryRoutingModule,
    DemoMaterialModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [JokeDetailsComponent]
})
export class JokesGalleryModule { }
