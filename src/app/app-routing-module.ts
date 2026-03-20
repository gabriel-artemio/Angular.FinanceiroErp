import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth-guard';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Paciente } from './pages/paciente/paciente';

import { Layout } from './layout/layout';
import { Parametrizacao } from './pages/parametrizacao/parametrizacao';

const routes: Routes = [

  // login (sem layout)
  { path: 'login', component: Login },

  // rotas com sidebar
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],
    children: [

      { path: 'home', component: Home },

      // exemplo futuro
      { path: 'pacientes', component: Paciente },
      { path: 'parametrizacao', component: Parametrizacao },

      { path: '', redirectTo: 'home', pathMatch: 'full' }

    ]
  },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}