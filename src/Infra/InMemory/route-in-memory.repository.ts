import { Route } from '../../Domain/Entity/route.entity'
import { RouteRepositoryInterface } from '../../Domain/Repositories/route.repository'

export class RouteInMemory implements RouteRepositoryInterface {
  items: Route[] = []
  async insert(route: Route): Promise<void> {
    this.items.push(route)
  }
}
