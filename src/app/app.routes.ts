import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanComponent } from './pages/artisan/artisan.component';
import { ArtisanFormComponent } from './pages/artisan-form/artisan-form.component';
import { Error404Component } from './pages/error-404/error-404.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
    },
    {
        path: 'artisan',
        component: ArtisanComponent
    },
    {
        path: 'artisan/:category',
        component: ArtisanComponent
    },
    {
        path: 'artisanForm/:id',
        component: ArtisanFormComponent
    },
    { 
        path: '**',
        component: Error404Component
    }
];
