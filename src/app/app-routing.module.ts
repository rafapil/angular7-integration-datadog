import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './pages/pages.module#PagesModule',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
