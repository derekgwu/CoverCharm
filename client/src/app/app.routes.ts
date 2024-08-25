// app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; // Import AboutComponent
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }, 
  {path: 'modules', component: ModulesComponent}
];
