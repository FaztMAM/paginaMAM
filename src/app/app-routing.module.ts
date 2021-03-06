import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { IndiceComponent } from './indice/indice.component';

const routes: Routes = [
  { path: 'home', component: IndiceComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
