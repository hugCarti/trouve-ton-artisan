import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ArtisanFormComponent } from './artisan-form/artisan-form.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
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
