import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias,ListaDestacadas} from '../../interfaces/noticias';
import {ActivatedRoute,Route} from '@angular/router';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';
@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.scss']
})
export class VerNoticiasComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  ListaDestacadas=ListaDestacadas;
  ListaCategorias=ListaCategorias;
  id:number=0;
  idCategoria:any;
  Noticia:any;
  Categoria:any;

  ngOnInit(): void {
    for(this.id=1; this.id<=150; this.id++) {
      if(this.id >= 100)
      {
        this.Noticia=ListaDestacadas.find(objeto=>objeto.id==this.id);
        this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Categoria);
      }
      else
      {
        this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
        this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Categoria);
      }
    }
  }
}
