import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias,ListaDestacadas} from '../../interfaces/noticias';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';
import {ActivatedRoute,Route} from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  ListaNoticias=ListaNoticias;
  ListaDestacadas=ListaDestacadas;
  ListaCategorias=ListaCategorias;
  id:number=0;
  Noticia:any;
  Categoria:any;
  constructor(private ruta:ActivatedRoute) { 
     this.ruta.params.subscribe(datos=>{
          this.id=datos["id"];
          console.log(this.id);  
     })
  }

  ngOnInit(): void {
     
 }
}
