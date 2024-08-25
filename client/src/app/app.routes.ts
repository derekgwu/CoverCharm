// app.routes.ts
import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about/about.component'; // Import AboutComponent

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SampleComponent },
  { path: 'about', component: AboutComponent }, // Add the about route
];
