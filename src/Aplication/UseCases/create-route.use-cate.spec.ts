import { RouteInMemory } from "../../Infra/InMemory/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe('Create Route Use Case', () => {
    it('Should create new route', async () => {
        const repo = new RouteInMemory()
        const createUseCase = new CreateRouteUseCase(repo)
        const output = await createUseCase.execute({
            title: 'Route 1',
            startPosition: { latitute: 10, longitude: 10 },
            endPosition: { latitute: 10, longitude: 10 },
        })

        expect(output).toStrictEqual({
            title: 'Route 1',
            startPosition: { latitute: 10, longitude: 10 },
            endPosition: { latitute: 10, longitude: 10 },
            points: []
        })

        expect(repo.items).toHaveLength(1)
    })
})