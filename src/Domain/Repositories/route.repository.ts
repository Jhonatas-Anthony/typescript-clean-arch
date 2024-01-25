import { Route } from '../Entity/route.entity'

export interface RouteRepositoryInterface {
  insert(route: Route): Promise<void>
  findAll(): Promise<Route[]>
}
