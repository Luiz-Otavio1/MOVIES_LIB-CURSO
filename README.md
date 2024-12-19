# Projeto Filmes com React e API do TMDB

Este projeto consiste em uma aplicação de filmes construída com **React**, consumindo a API do **TMDB (The Movie Database)**. A aplicação permite visualizar filmes populares, buscar por filmes específicos e acessar detalhes de cada filme. Utiliza **React Router** para navegação e **React Hooks** para gerenciamento de estado e efeitos colaterais.

## Funcionalidades

- Exibição de filmes populares.
- Busca de filmes por nome.
- Exibição de detalhes de um filme ao ser clicado.
- Navegação entre páginas utilizando React Router.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router**: Para gerenciamento de navegação entre páginas.
- **React Hooks**: Para gerenciamento de estado e efeitos colaterais.
- **TMDB API**: API pública para obtenção de dados sobre filmes.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, instale a partir do [site oficial do Node.js](https://nodejs.org/).

### Passos

1. **Clone o repositório**:
   git clone https://github.com/matheusmhq/tmdb-react-js.git
   cd movies_lib


Instale as dependências:

npm install
Crie um arquivo .env na raiz do projeto e adicione sua chave da API do TMDB:

REACT_APP_TMDB_API_KEY=Sua_Chave_Api

Inicie o projeto:
npm start

Estrutura do Projeto
src: Contém todos os arquivos principais da aplicação.
components: Componentes reutilizáveis, como o Card de filme, o formulário de busca, etc.
pages: Páginas da aplicação, como a página inicial e a página de detalhes do filme.
services: Arquivo para interagir com a API do TMDB.
App.js: Componente principal que define as rotas utilizando React Router.
index.js: Ponto de entrada da aplicação React.
Exemplos de Rotas
/: Página inicial com filmes populares.
/search: Página de busca de filmes.
/movie/:id: Página de detalhes de um filme, acessada ao clicar em um filme.
Contribuindo
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias no projeto.