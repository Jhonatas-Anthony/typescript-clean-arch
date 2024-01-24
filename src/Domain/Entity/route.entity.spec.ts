import { Coords, Route, RoutePublicProps } from "./route.entity"

describe('Route Test', () => {
    test('Route constructor', () => {
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

    test('Method updateTitle', () => {
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

    test('Method updatePosition', () => {
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
        let startPosition = { latitute: 17, longitude: 120 }
        let endPosition = { latitute: 25, longitude: 30 }

        route.updatePosition(startPosition, endPosition)
        expect(route.gStartPosition).toBe(startPosition)
        expect(route.gEndPosition).toBe(endPosition)
    })

    test('Methods updatePoints', () => {
        const RouteNoPoints: RoutePublicProps = {
            title: 'Rota 4',
            startPosition: { latitute: 15, longitude: 16 },
            endPosition: { latitute: 25, longitude: 26 },
            points: []
        }

        const route = new Route(RouteNoPoints)
        let points: Coords[] = [
            { latitute: 15, longitude: 16 }
        ]
        let lenght: number = points.length
        route.updatePoints(points)
        expect(route.gPoints).toHaveLength(lenght)
        expect(route.gPoints).toStrictEqual(points)
    })
})