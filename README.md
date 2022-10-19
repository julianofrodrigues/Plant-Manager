<h1 align="center"> 🌻Plant-Manager </h1>

# Project Summary
An App to organize and care for your plants 😁

## Layout 😬
<p>The layout consists of two types of navigation, with welcome for new users, and two lists of plants, one to include plants and another with your list of plants already registered.</p>

<details> <summary> Click Here to see screenshots </summary>
  <h2>Welcome</h2>
  
  ![Welcome](https://i.imgur.com/ax0hbGi.jpg) 
  
  <h2> Name </h2>
  
  ![Name](https://i.imgur.com/nznglAE.jpg) 
  
  <h2> Register </h2>
  
  ![Register](https://i.imgur.com/1SWuXaG.jpg) 
  
  <h2> Registered </h2>
  
  ![Registered](https://i.imgur.com/EP3bkVd.jpg) 
  
  <h2> List </h2>
  
  ![List](https://i.imgur.com/jSEJde6.jpg)
  
   <h2> Detail </h2>
  
  ![Detail](https://i.imgur.com/siNXtvA.jpg)
  
  
   <h2> Reminder </h2>
  
  ![Reminder](https://i.imgur.com/mvcp84E.jpg)
</details>

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
