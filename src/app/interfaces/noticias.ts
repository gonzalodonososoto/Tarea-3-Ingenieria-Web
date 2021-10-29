export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaDestacadas:Array<Noticias>=[
  { id:100,
    idCategoria:3,
    titulo:"El juego de calamar se convierte en la serie mas visitada de Netflix",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque."
  },
  { id:101,
    idCategoria:1,
    titulo:"Murio el rinoceronte mas viejo",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "conquer template is provided by templatemo for free of charge. You can use this template for any kind of website. No credit link is required. All images by Unsplash. Thank you for visiting our website. please come again!"
  },
  { id:102,
    idCategoria:2,
    titulo:"Ciclismo- El regreso de Chris Froomen",
    autor:"autor noticia 3",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque."
  },

]

export let ListaNoticias:Array<Noticias>=[
{ id:1,
  idCategoria:1,
  titulo:"Noticia",
  autor:"autor noticia",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis "
},

{ id:2,
    idCategoria:2,
    titulo:"Noticia",
    autor:"autor noticia",
    fecha:Date().toString(),
    imagen:"imagen2.png",
    texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis "
},

{ id:3,
  idCategoria:3,
  titulo:"Noticia",
  autor:"autor noticia",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis "
},

{ id:4,
  idCategoria:4,
  titulo:"Noticia",
  autor:"autor noticia",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis "
},

{ id:5,
  idCategoria:5,
  titulo:"Noticia",
  autor:"autor noticia",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis"
},

{ id:6,
  idCategoria:6,
  titulo:"Noticia",
  autor:"autor noticia",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Ut ac odio scelerisque ante ornare commodo. Sed faucibus lui libero, in tincidunt purus pretium quis"
},
];
