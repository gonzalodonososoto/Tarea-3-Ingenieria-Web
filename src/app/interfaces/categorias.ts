export interface Categorias {
    id:number;
    titulo:string;
    color: string;
}

export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "Mundo",
      color: "blue"
    },
    { id:2,
        titulo: "Deportes",
        color: "darkred"
    },
    { id:3,
        titulo: "Entretenimiento",
        color: "green"
    },
    { id:4,
        titulo: "Economia",
        color: "purple"
    },
    { id:5,
        titulo: "Salud",
        color: "darkblue"
    },
    { id:6,
        titulo: "Tecnologia",
        color: "red"
    }


]


