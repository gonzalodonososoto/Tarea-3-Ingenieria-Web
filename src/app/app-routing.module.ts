import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiaComponent} from './componentes/detalle-noticia/detalle-noticia.component';
import {VerNoticiasComponent} from './componentes/ver-noticias/ver-noticias.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent},
  {path:"verNoticias",component:VerNoticiasComponent},
  {path:"servicioalcliente",component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
