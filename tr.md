# Anotações

projeto feito em base no vídeo do full cycle sobre arquitetura limpa com o projeto de monitoramento de veículos:
https://www.youtube.com/watch?v=yLPxkIxbNDg&t=2508s

## Inicio

para iniciar o projeto com node
```npm init -y```

para trabalhar com o typescript no modo desenvolvimento
```npm install typescript --save-dev ```

para começar um manifesto do typescript (executavel) 
```npx tsc --init```



```
Uma boa arquitetura de software permite que nós adiemos nossas desições, as regras de négocio devem permanecer indepententte do framework ou do BD.
```

## Camada De Dominio

Na clean arch, começamos de dentro para fora, na camada de Dominios. Então começamos definindo as entidades, sem usar nada de framework ou ORM.

No arquivo de entity eu criei uma classe com todos os dados necessários, como título, posição inicial... 

As operações que vão acontecer em cima dessa classe são as operações ou comandos, se quisermos definir uma nova rota teriamos que passar os dados atráves de algum lugar, então usamos o construtor dentro da propria classe, uma operação da classe deve estar dentro da classe,. após fazer isso podemos 'apagar' os atributos, pois eles estarão presentes dentro do constructor.

Nas regras de négocio, é uma boa pratica definir sets privados e definir nos metodos da classe, chamado methods.

Os frameworks trazem pra gente um conceito de entidades anemicas, que não deixamos as regras de negocio com as entidades.

Não me importa se os arquivos vão ficar em um txt, em um MYSQL, em um MONGO, nessa etapa a unica coisa que me importa são as regras de negócio. Devemos ser capazes de trocar banco de dados, libs ou frameworks sem nos importar com nada disso. 
## Camada De Aplicação
Agora nós vamos para a camada de aplicação, começando pelos casos de uso

Trabalhando com os casos de uso separados, temos a garantira que vamos isolar a responssabilidade de cada qual, fazendo juz ao S do SOLID - SIngle Responsabily Principle.

Em determinado ponto eu chamo o tipo Coords que está sendo definido uma camada antes, mas no clean arch, camadas exteriores sempre tem acesso as camadas menos inferiores, o contrário não é verdade, camadas interiores não devem ter contato com o 'mundo externo' 

NA camada de aplicação define o que o software vai fazer, se quiseres descobrir o que um software faz, basta olhar o que está presente nesta camada

Nos casos de uso, por exemplo ao criar algo, o meu caso de uso não quer saber como aquela informação foi armazenada, nem onde,  isso não é uma obrigação nem dever dos casos de uso, mesmo que haja a necessidade de armazenar antes de retornar,

Assim nós vamos trabalhar com as 

