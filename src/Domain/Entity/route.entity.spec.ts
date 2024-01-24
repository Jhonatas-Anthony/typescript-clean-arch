import { Route, RoutePublicProps } from "./route.entity"

describe('Route Test', () => {
    // Testando o comportamento
    test('constructor', () => {
        const RouteNoPoints: RoutePublicProps = {
            title: 'Rota 1',
            startPosition: { latitute: 15, longitude: 16 },
            endPosition: { latitute: 25, longitude: 26 },
        }

        const route = new Route(RouteNoPoints)
        expect(route.props).toStrictEqual({
            ...RouteNoPoints, points: []
        })

        const RouteWithPoints: RoutePublicProps = {
            title: 'Rota 2',
            startPosition: { latitute: 15, longitude: 16 },
            endPosition: { latitute: 25, longitude: 26 },
            points: [
                { latitute: 15, longitude: 16 },
                { latitute: 20, longitude: 22 },
                { latitute: 25, longitude: 26 }
            ]
        }

        const route2 = new Route(RouteWithPoints)
        expect(route2.props).toStrictEqual(RouteWithPoints)
    })

    // Testando métodos sobre título
    test('methods title', () => {
        const RouteWithPoints: RoutePublicProps = {
            title: 'Rota 2',
            startPosition: { latitute: 15, longitude: 16 },
            endPosition: { latitute: 25, longitude: 26 },
            points: [
                { latitute: 15, longitude: 16 },
                { latitute: 20, longitude: 22 },
                { latitute: 25, longitude: 26 }
            ]
        }

        const route = new Route(RouteWithPoints)
        route.updateTitle('Update title')
        expect(route.gTitle).toBe('Update title')

    })
})