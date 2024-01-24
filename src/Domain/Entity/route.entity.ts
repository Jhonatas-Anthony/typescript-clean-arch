// Para consolidar essas regras de negocio, usamos uma entidade como uma classe que vai determinar os dados de uma rota
// Essa rota será para a aplicação de monitoramento de veículos, com nome, ponto inicial e final, além de pontos de parada. 

export type Coords = { latitute: number, longitude: number }
export type RoutePublicProps = {
    title: string,
    startPosition: Coords,
    endPosition: Coords,
    points?: Coords[]
}

export class Route {
    public props: Required<RoutePublicProps>
    constructor(
        props: RoutePublicProps
    ) {
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    get gTitle() {
        return this.props.title
    }

    private set sTitle(t: string) {
        this.props.title = t
    }

    updateTitle (t: string){
        //Esse método é necessário para caso nós queiramos:
        // Validar caracteres
        // Verificar Maiuscula e minuscula
        this.sTitle = t
    }
}
