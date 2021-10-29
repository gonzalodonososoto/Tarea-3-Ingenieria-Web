import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias,ListaDestacadas} from '../../interfaces/noticias';
import {ActivatedRoute,Route} from '@angular/router';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';
@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {
  ListaNoticias=ListaNoticias;
  ListaDestacadas=ListaDestacadas;
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
    if(this.id >= 100)
    {
      this.Noticia=ListaDestacadas.find(objeto=>objeto.id==this.id);
      this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria);
    }
    if(this.id < 100)
    {
      this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
      this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria);
    }

  }

}
