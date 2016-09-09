import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path : 'heroes', component: HeroesComponent},
    { path : 'dashboard', component : DashboardComponent},
    { path : 'details/:id', component : DetailsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);