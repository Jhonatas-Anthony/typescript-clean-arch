// Para consolidar essas regras de negocio, usamos uma entidade como uma classe que vai determinar os dados de uma rota
// Essa rota será para a aplicação de monitoramento de veículos, com nome, ponto inicial e final, além de pontos de parada.

export type Coords = { latitute: number; longitude: number }
export type RoutePublicProps = {
  title: string
  startPosition: Coords
  endPosition: Coords
  points?: Coords[]
}

export class Route {
  public props: Required<RoutePublicProps>
  public readonly id: string
  constructor(props: RoutePublicProps, id?: string) {
    this.id = id || crypto.randomUUID()
    this.props = {
      ...props,
      points: props.points || []
    }
  }

  get gTitle() {
    return this.props.title
  }

  get gStartPosition() {
    return this.props.startPosition
  }

  get gEndPosition() {
    return this.props.endPosition
  }

  get gPoints() {
    return this.props.points
  }

  private set sTitle(t: string) {
    this.props.title = t
  }

  private set sStartPosition(t: Coords) {
    this.props.startPosition = t
  }

  private set sEndPosition(t: Coords) {
    this.props.endPosition = t
  }

  private set sPoints(t: Coords[]) {
    this.props.points = t
  }

  updateTitle(t: string) {
    //Esse método é necessário para caso nós queiramos:
    // Validar caracteres
    // Verificar Maiuscula e minuscula
    // Isso se aplica a todos os outros
    this.sTitle = t
  }

  updatePosition(start: Coords, end: Coords) {
    this.sStartPosition = start
    this.sEndPosition = end
  }

  updatePoints(points: Coords[]) {
    this.sPoints = points
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    }

  }
}
