// Ao trabalhar com os casos de uso dessa forma, usamos o S do SOLID
// Onde separamos as responsabilidades

import { Coords, Route } from '../../Domain/Entity/route.entity'
import { RouteRepositoryInterface } from '../../Domain/Repositories/route.repository'

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput) {
    const route = new Route(input)
    await this.routeRepo.insert(route)
    return route.toJSON()
  }
}

type CreateRouteInput = {
  title: string
  startPosition: Coords
  endPosition: Coords
  points?: Coords[]
}

// Essa etapa é importante pois sempre devemos retornar algo
// Imagine que na criação de usuário, não devemos retornar a senha ao criar um
// Nesse caso específico, deixamos da maneira que está pois todos os dados não são criticos
type CreateRouteOutput = {
  id: string
  title: string
  startPosition: Coords
  endPosition: Coords
  points?: Coords[]
}
