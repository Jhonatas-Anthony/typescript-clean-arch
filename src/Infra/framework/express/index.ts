import express, { Express, Request, Response } from 'express'
import { CreateRouteUseCase } from '../../../Aplication/UseCases/create-route.use-case'
import { RouteInMemory } from '../../InMemory/route-in-memory.repository'
import { ListAllRoutesUseCase } from '../../../Aplication/UseCases/list-all-routes.use-case'

const app: Express = express()
app.use(express.json())
const port = process.env.PORT || 3000
const routeRepository = new RouteInMemory()

app.post('/routes', async (request: Request, response: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepository)
  const output = await createUseCase.execute(request.body)
  response.status(201).json(output)
})

app.get('/routes', async (_request: Request, response: Response) => {
  const listAll = new ListAllRoutesUseCase(routeRepository)
  const output = await listAll.execute()
  response.json(output)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})