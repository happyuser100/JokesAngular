import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesGalleryComponent } from './jokes-gallery.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';


const routes: Routes = [
  { path: "", component: JokesGalleryComponent },
  { path: "details", component: JokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesGalleryRoutingModule { }
