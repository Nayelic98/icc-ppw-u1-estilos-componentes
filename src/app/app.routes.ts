import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SignalBox } from './features/signal-box/signal-box';

export const routes: Routes = [
  {
    path: '',
    component: EstilosPage
  },
  {
    path: 'estilos',
    component: EstilosPage
  },
  {
    path:'',
    component: SignalBox
  }

];