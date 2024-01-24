projeto feito em base no vídeo do full cycle sobre arquitetura limpa com o projeto de monitoramento de veículos


para iniciar o projeto com node
npm init -y

para trabalhar com o typescript no modo desenvolvimento
npm install typescript --save-dev 

para começar um manifesto do typescript (executavel) 
npx tsc --init

Uma boa arquitetura de software permite que nós adiemos nossas desições, as regras de négocio devem permanecer indepententte do framework ou do BD.

Na clean arch, começamos de dentro para fora, na camada de dominios. Então começamos definindo as entidades, sem usar nada de framework ou ORM.

No arquivo de entity eu criei uma classe com todos os dados necessários, como título, posição inicial... 

As operações que vão acontecer em cima dessa classe são as operações ou comandos, se quisermos definir uma nova rota teriamos que passar os dados atráves de algum lugar, então usamos o construtor dentro da propria classe, uma operação da classe deve estar dentro da classe,. após fazer isso podemos 'apagar' os atributos, pois eles estarão presentes dentro do constructor.

Nas regras de négocio, é uma boa pratica definir sets privados e definir nos metodos da classe, chamado methods.

Os frameworks trazem pra gente um conceito de entidades anemicas, que não deixamos as regras de negocio com as entidades.

Não me importa se os arquivos vão ficar em um txt, em um MYSQL, em um MONGO, nessa etapa a unica coisa que me importa são as regras de negócio. 
