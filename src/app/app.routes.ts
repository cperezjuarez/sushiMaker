import { Routes } from '@angular/router';
import { MakerComponent } from './components/maker-component/maker-component';
import { ResumenComponent } from './components/resumen-component/resumen-component';

export const routes: Routes = [
    {path: '', component: MakerComponent},
    {path: 'resumen', component: ResumenComponent}
];