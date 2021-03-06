import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { IndiceComponent } from './indice/indice.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,
    IndiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
