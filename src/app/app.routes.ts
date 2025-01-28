import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanComponent } from './pages/artisan/artisan.component';
import { ArtisanFormComponent } from './pages/artisan-form/artisan-form.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { DonneePersComponent } from './pages/donnee-pers/donnee-pers.component';
import { AccessibiliteComponent } from './pages/accessibilite/accessibilite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent
    },{
        path: 'artisan',
        component: ArtisanComponent
    },{
        path: 'artisan/:category',
        component: ArtisanComponent
    },{
        path: 'artisanForm/:id',
        component: ArtisanFormComponent
    },{
        path: 'mentionsLegales',
        component: MentionsLegalesComponent
    },{
        path: 'donneePers',
        component: DonneePersComponent
    },{
        path: 'access',
        component: AccessibiliteComponent
    },{
        path: 'cookies',
        component: CookiesComponent
    },{
        path: '**',
        component: Error404Component
    }
];
