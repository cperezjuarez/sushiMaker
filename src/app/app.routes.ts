import { Routes } from '@angular/router';
import { MakerPage } from './pages/maker-page/maker-page';
import { ResumenPage } from './pages/resumen-page/resumen-page';
import { HistorialPage } from './pages/historial-page/historial-page';

export const routes: Routes = [
    {path: '', redirectTo:'/maker', pathMatch:'full'},
    {path: 'maker', component: MakerPage},
    {path: 'resumen', component: ResumenPage},
    {path: 'historial', component: HistorialPage}
];