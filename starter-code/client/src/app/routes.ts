import { Routes } from '@angular/router';
import {DishesComponent} from './dishes/dishes.Component'
export const routes: Routes = [
    { path: '', component: DishesComponent },
    // { path: 'dishes/:id', component: SingleDishesComponent },
    { path: '**', redirectTo: '' }
];
