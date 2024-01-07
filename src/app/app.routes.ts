import { Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [
    {
        path: 'pipes', component: PipesComponent,
    },
    {
        path: 'directives', component: DirectivesComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'pipes'
    }
];
