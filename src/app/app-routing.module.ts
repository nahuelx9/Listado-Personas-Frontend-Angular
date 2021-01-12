import { FormularioComponent } from './formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : PersonasComponent},
  {path: 'personas',component : PersonasComponent, children:[
    {path: 'agregar', component : FormularioComponent},
    {path: ':idPersona', component : FormularioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
