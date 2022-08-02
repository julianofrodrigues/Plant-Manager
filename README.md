<h1 align="center"> 🌻Plant-Manager </h1>

# Resumo do projeto
Um App para organizar e cuidar das suas plantas 😁

## Iagem do App abaixo 😬
</p>
<p align="center">
<img src="https://i.imgur.com/ax0hbGi.jpg" style="border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px; height: 500px"/>
<img src="https://i.imgur.com/nznglAE.jpg"/>
<img src="https://i.imgur.com/1SWuXaG.jpg"/>
<img src="https://i.imgur.com/EP3bkVd.jpg"/>
<img src="https://i.imgur.com/jSEJde6.jpg"/>
<img src="https://i.imgur.com/siNXtvA.jpg"/>
<img src="https://i.imgur.com/mvcp84E.jpg"/>
</p>

## 📁 Acesso ao projeto
Para experimenta-lo é bem simples:<br>
-Clone o repositorio
```bash
$ git clone https://github.com/julianofrodrigues/plant-manager.git
```
-Instale o Json Server globalmente
```bash
$ npm install -g json-server
ou
$ yarn add json-server -g
```
-Altere o arquivo api.ts:
```bash
//No baseURL onde esta escrito Seu IP, colocando o seu IP, após a alteração ficará similar ao exemplo abaixo:
baseURL: 'http://192.168.0.1:3333'
```
-Inicie o Json Server
```bash
//No host coloque o seu Ip e a porta pode ser qualquer uma que não esteja em uso:
$ json-server ./src/services/server.json --host 192.168.0.1 --port 3333
```
-Baixe as bibliotecas
```bash
$ expo install
```
-Inicie o App
```bash
$ expo start
```

## ✔️ Técnicas e tecnologias utilizadas

- ``JavaScript``
- ``TypeScript``
- ``React Native``
- ``Json Server``
- ``CSS``