// Para consolidar essas regras de negocio, usamos uma entidade como uma classe que vai determinar os dados de uma rota
// Essa rota será para a aplicação de monitoramento de veículos, com nome, ponto inicial e final, além de pontos de parada. 

export type Coords = { latitute: number, longitude: number }

export type RoutePublicProps = {
    title: string,
    startPosition: Coords,
    endPosition: Coords,
    points: Coords[]
}

class Route {
    /* title: string;
    startPosition: Coords;
    endPosition: Coords;
    points: Coords[]; */

    constructor(
        /* public title: string,
        public startPosition: Coords,
        public endPosition: Coords,
        public points: Coords[] */
        public props: RoutePublicProps,
    ) { }
    // Aqui definimos métodos como:
    private set title(value: string) {
        this.props.title = value
    }

    
}

//exemplo para criar uma nova rota

/* new Route('Rota 1', { latitute: 15, longitude: 16 }, { latitute: 25, longitude: 26 }, [
    { latitute: 15, longitude: 16 },
    { latitute: 20, longitude: 22 },
    { latitute: 25, longitude: 26 }
]) */

const rota = new Route({
    title: 'Rota 1',
    startPosition: { latitute: 15, longitude: 16 },
    endPosition: { latitute: 25, longitude: 26 },
    points: [
        { latitute: 15, longitude: 16 },
        { latitute: 20, longitude: 22 },
        { latitute: 25, longitude: 26 }
    ]
})

// com o set, inves de fazer: 
//rota.props.title = 'algo'
// podemos
//rota.title = 'algo'