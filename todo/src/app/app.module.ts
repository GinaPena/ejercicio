import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProveedoresService } from './servicios/proveedores.service';

import { AppComponent } from './app.component';
import { ProvedoresComponent } from './proveedores/provedores/provedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProvedoresComponent },
  { path: 'addprovee', component: AddproveeComponent },
  {path: '**', component: InicioComponent} //siempre debe de ir al ultimo
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProvedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
