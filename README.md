<h1 align="center"> 🌻Plant-Manager </h1>

## Project Summary
An App to organize and care for your plants 😁

## Application images below 😬

<p>
<img src="https://i.imgur.com/ax0hbGi.jpg" style="width: 400px; height: 650px"/>
<img src="https://i.imgur.com/nznglAE.jpg" style="width: 400px; height: 650px"/>
</P>

<p>
<img src="https://i.imgur.com/1SWuXaG.jpg" style="width: 400px; height: 650px"/>
<img src="https://i.imgur.com/EP3bkVd.jpg" style="width: 400px; height: 650px"/>
</P>
<p>
<img src="https://i.imgur.com/jSEJde6.jpg" style="width: 400px; height: 650px"/>
<img src="https://i.imgur.com/siNXtvA.jpg" style="width: 400px; height: 650px"/>
</P>
<p align="center">
<img src="https://i.imgur.com/mvcp84E.jpg" style="width: 400px; height: 650px"/>
</p>

## 📁 Project Access
To try it is very simple:<br>
-Clone the repository
```bash
$ git clone https://github.com/julianofrodrigues/plant-manager.git
```
-Install Json Server globally
```bash
$ npm install -g json-server
```
or
```bash
$ yarn add json-server -g
```

-Change the api.ts file:<br>
-In the baseURL where your IP is written, putting your IP, after the change it will be similar to the example below:<br>
baseURL: 'http://192.168.0.1:3333'

-Start Json Server<br>
-On the host put your IP and the port can be any that is not in use, follow an example below:
```bash
$ json-server ./src/services/server.json --host 192.168.0.1 --port 3333
```
-Download the libraries
```bash
$ expo install
```
-Start the App
```bash
$ expo start
```

## ✔️ Techniques and technologies used

- ``JavaScript``
- ``TypeScript``
- ``React Native``
- ``Expo``
- ``Json Server``
- ``CSS``
