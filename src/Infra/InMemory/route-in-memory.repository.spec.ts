import { Route, RoutePublicProps } from '../../Domain/Entity/route.entity'
import { RouteInMemory } from './route-in-memory.repository'

describe('RouteInMemory', () => {
  it('Should insert a new route', async () => {
    const repo = new RouteInMemory()
    const RouteWithPoints: RoutePublicProps = {
      title: 'Rota 3',
      startPosition: { latitute: 15, longitude: 16 },
      endPosition: { latitute: 25, longitude: 26 },
      points: [
        { latitute: 15, longitude: 16 },
        { latitute: 20, longitude: 22 },
        { latitute: 25, longitude: 26 }
      ]
    }
    const route = new Route(RouteWithPoints)
    await repo.insert(route)
    expect(repo.items).toHaveLength(1)
    expect(repo.items).toStrictEqual([route])
  })
})
