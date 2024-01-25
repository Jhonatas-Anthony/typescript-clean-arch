import { Coords } from '../../Domain/Entity/route.entity'
import { RouteRepositoryInterface } from '../../Domain/Repositories/route.repository'

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<ListRoutesRouteOutput> {
    const routes = await this.routeRepo.findAll()
    return routes.map(r => r.toJSON())
  }
}

type ListRoutesRouteOutput = {
  id: string
  title: string
  startPosition: Coords
  endPosition: Coords
  points?: Coords[]
}[]
