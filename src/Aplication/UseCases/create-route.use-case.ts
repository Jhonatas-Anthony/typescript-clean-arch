// Ao trabalhar com os casos de uso dessa forma, usamos o S do SOLID
// Onde separamos as responsabilidades

import { Coords, Route } from "../../Domain/Entity/route.entity";

class CreateRouteUseCase {
    execute(input: CreateRouteInput) {
        const route = new Route(input)
        return route.toJSON()
    }
}

type CreateRouteInput = {
    title: string;
    startPosition: Coords;
    endPosition: Coords;
    points?: Coords[];
}

// Essa etapa é importante pois sempre devemos retornar algo
// Imagine que na criação de usuário, não devemos retornar a senha ao criar um
// Nesse caso específico, deixamos da maneira que está pois todos os dados não são criticos
type CreateRouteOutput = {
    title: string;
    startPosition: Coords;
    endPosition: Coords;
    points?: Coords[];
}