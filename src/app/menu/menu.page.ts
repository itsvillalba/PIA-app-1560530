import { Component, OnInit } from '@angular/core';
import {Menu} from './menu.model'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  filterTerm: string;
  
negocios: Menu[] =[

{
  id:1,
  nombre:'il Bonle',
  imagen:'https://i.ytimg.com/vi/eOXHlDWJPcM/maxresdefault.jpg',
  descripcion: 'Hoy tenemos 2x1!',
  precio: '$75.00'
},

{id:2,
  nombre: 'Mariscos "El Ostión"',
  imagen:'https://cdn.shopify.com/s/files/1/0899/2262/articles/restaurantes-de-mariscos-y-otras-opciones-para-comer-en-cuaresma.jpg?v=1552671997',
  descripcion: 'Ricos mariscos para este fin de semana' ,
  precio: '$60.00'
},
{
  id:3,
  nombre: 'Carnes SOMAR',
  imagen:'https://saboryestilo.com.mx/wp-content/uploads/2020/01/tips-para-hacer-la-mejor-carne-asada-1200x720.jpg',
  descripcion: 'Las mejores carnes para su parrilla!',
  precio: '$80.00'
},

{
  id:4,
  nombre: 'Helados Snowday',
  imagen:'https://www.dondeir.com/wp-content/uploads/2016/07/helados1.jpg',
  descripcion: 'Deliciosos helados para refrescar su paladar',
  precio: '$15.00'
}


]

  constructor() { }

  ngOnInit() {
  }

  getReceta(idNegocios: number)
  {
    return {...this.negocios.find(
      (negocios: Menu) => {
        return negocios.id === idNegocios
      }
    )};
  }

  getRecetas()
  {
return [...this.negocios];
  }

}
