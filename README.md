<p align="center">
  <img width="60" height="80" src="https://media.tenor.com/images/a35bf9ff94bd56039e5b2bf93acd4ad7/tenor.gif" />
  <strong>API COM TODAS AS MENSAGENS DE DARK SOULS 3</strong>
  <img width="60" height="80" src="https://media.tenor.com/images/a35bf9ff94bd56039e5b2bf93acd4ad7/tenor.gif" />
</p>

# Sobre o projeto

### Link da API: https://messages-darksouls3.up.railway.app

O projeto se trata de uma API que entrega todas as mensagens traduzidas em pt-br contidas no jogo Dark Souls 3. O conteúdo da API é dividito por categorias, você pode buscar uma categoria específica através de parâmetros da URL, onde caso o parâmetro seja válido, ele se torna um endpoint que entrega as mensagens contidas naquela categoria. Além disso, você também pode, após a categoria, também passar um ID específico de uma mensagem, que caso também seja válido, se tornará outro endpoint trazendo a mensagem relacionada ao ID informado.

# Conteúdo

## 🔑 Acessos de endpoint

• Acessar categoria, ex:
```
https://messages-darksouls3.up.railway.app/categoria
```

• Acessar mensagem de categoria, ex:
```
https://messages-darksouls3.up.railway.app/categoria/id
```

## 📜 Lista de categorias / id

| Categorias | Índices |
   |---|---|
| modelos | 0 ~ 16 |
| conjuncoes | 0 ~ 9 |
| criaturas | 0 ~ 69 |
| objetos | 0 ~ 37 |
| tecnicas | 0 ~ 25 |
| acoes | 0 ~ 20 |
| geografia | 0 ~ 16 |

# Instalações e testes

## 📋 Pré-requisitos

É essencial que você tenha o ```Node.js``` em sua máquina para rodar a aplicação.

## 🔧 Instalação da aplicação

1°- Faça um clone do repositório utilizando os comandos:
```
$git clone https://github.com/gabriel-cheng/api-mensagens-dark-souls
```

2°- Dentro do diretório clonado, instale as dependências necessárias para que a aplicação consiga ser executada:
```
$npm install
```
3°- Dentro do diretório clonado, rode o seguinte comando para iniciar a aplicação:
```
$nodemon ./src/index.js
```
ou
```
$npm run dev
```
ou
```
$yarn dev
```

É recomendado que você tenha o ```Docker``` e o ```docker-compose``` em sua máquina e utilize-os para rodar a aplicação com as versões de dependências utilizadas no desenvolvimento.

## 🔧 Instalação do Docker(opcional)

1°- Acesse o site do Docker e baixe tanto o docker desktop, quanto o docker-compose:
```
$docker: https://docs.docker.com/desktop/install/windows-install/
```
```
$docker-compose: https://docs.docker.com/compose/install/
```

2°- Após ambos instalados e configurados devidamente, é só rodar o seguinte comando:
```
$user docker-compose up
```

# Ferramentas

## 🛠️ Construído com

* [Node.js](https://nodejs.org/en/) - Plataforma utilizada para o desenvolvimento do Back-end
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Utilizado para desenvolver funcionalidades
* [Docker](https://www.docker.com/) - Criação de containers da aplicação
* [Docker-compose](https://docs.docker.com/compose/) - Utilizado para orquestração de containers

# Créditos

## ✒️ Autor

* **Gabriel Carvalho** - *Desenvolvedor FullStack* - >> [Acessar Portfólio](https://gabrielcarvalho.tech) <<
