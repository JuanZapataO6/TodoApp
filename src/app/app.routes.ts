import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {LabsComponent} from './pages/labs/labs.component';


export const routes: Routes = [
    {
        path: '',
        component : HomeComponent

    },
    {
        path: 'login',
        component : LoginComponent

    },
    {
        path: 'labs',
        component : LabsComponent

    }
];
