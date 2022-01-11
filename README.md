# NETFLIX HOME PAGE CLONE
## Requisitos do sistema

* Node.js na versão v14.17.6 ou superior
* Gerenciador de pacotes npm na versão 6.14.15 ou superior
* IDE a escolha (Utilizada Visual Studio Code)
* Conta no https://www.themoviedb.org

## Descrição do projeto

O projeto consiste em basicamente reproduzir a Home Page da Netflix utilizando-se das tecnologias:

* Node.Js
* CSS
* HTML
* React.Js

## Requisitos Backend

Para conexão com a API do Themoviedb é necessário a criação de uma conta de maneira gratuita. Após a sua criação, será gerada um key única que deverá ser utilizada ao final de cada Request, junto, também, com a categoria deseja de filme. 


## Desafios do Frontend

O maior desafio do Frontend consiste, basicamente, em listas os filmes. Para tal, criei simples função que fez um fetch na api e um array de objetos (json).
Com essa informação, podemos loopar dentro do json e buscar por sua categoria, também pelo seu nome, banner e outras funcionalidades. 

Um outro desafio foi criar na própria Home-page um lugar para os filmes em destaque. Para tal, criei uma função que busca aleatoriamente na API dentro dos filmes originais Netflix (originals), buscando por outras informações como rating, número de séries (seasons) e o ano de lançamento. 

## Rotas da aplicação
```
Originais Netflix: /discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}
Recomendados: /trending/all/week?language=pt-BR&api_key=${API_KEY}
Em alta: /movie/top_rated?language=pt-BR&api_key=${API_KEY}
Ação: /discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}
Comédia: /discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}
Romance: /discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}
Documentários: /discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}
Drama: /discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}

```

## Bibliotecas
Uma biblioteca necessária para o projeto é a instalação do React Icons. Para instalação, pode-se usar:

```
npm install react-icons --save
```

# IMPORTANTE!
O APP NÃO ESTÁ OTIMIZADO PARA MOBILE!

    
