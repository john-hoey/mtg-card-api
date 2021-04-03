import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // { path: '**', component: FourOhFourComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
