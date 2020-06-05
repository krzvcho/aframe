import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExternalComponent } from './external/external.component';
import { ExampleComponent } from './example/example.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'external',
    component: ExternalComponent,
    data: { title: 'External example' }
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: { title: 'Oryginal example' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
