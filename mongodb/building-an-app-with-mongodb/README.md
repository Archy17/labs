# Criando uma Aplicação com MongoDB

## Agenda

* Introdução a stack MEAN
* O que é uma API REST?
* Criando nossa API REST
* Definindo nosso *Data Model*
* Autenticação da vida real usando Stormpath
* Particularidades do JavaScript
* Escreva seus testes primeiro
* Veja o código de uma aplicação

## Introdução a stack MEAN

### MEAN Stack

A stack MEAN pode ser considerada como uma versão moderna da stack LAMP

* M = MongoDB / Mongoose: o bando de dados NoSQL mais popular
* E = Express: um leve framework para aplicações web
* A = AngularJS: framework robusto para criação de aplicações web ricas com HTML5 e JavaScript
* N = NodeJS: Interpretador JavaScript Server-Side

## O que é uma API REST?

* REST = "Representation State Transfer"
* Uma alternativa mais leve a API's baseadas em XML
* Usa um modelo *client-server*, onde o servidor atua como um servidor HTTP
* O cliente envia verbos HTTP (GET, POST, PUT, DELETE) por uma URL e parâmetros que são *urlencoded*
* A URL nos informa qual objeto devemos modificar
* O Servidor responde com um código (200, 404, 500...) informando o resultado e um JSON válido