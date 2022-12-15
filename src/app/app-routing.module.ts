import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSugerenciasComponent } from './components/crear-sugerencias/crear-sugerencias.component';
import { ListaSugerenciasComponent } from './components/lista-sugerencias/lista-sugerencias.component';

const routes: Routes = [
  {
    path: '',redirectTo:'list-sugerencias',pathMatch:'full'
  },
  {
    path: 'list-sugerencias',component:ListaSugerenciasComponent
  },
  {
    path: 'create-sugerencias',component:CrearSugerenciasComponent
  },
  {
    path: 'editar-sugerencia/:id',component:CrearSugerenciasComponent
  },
  {
    path: '**',redirectTo:'list-sugerencias',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
