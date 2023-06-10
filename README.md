# THIS IS BACKEND SIDE FOR PIZZA V2 PROJECT
# PLEASE DO NOT FORGET TO SET STARS
FRONT SIDE YOU CAN GET HERE:<br />
https://github.com/Archakov06/react-pizza-v2<br />
## 1. Clone project
Run command:<br />
`git clone https://github.com/neptunykt/react-pizza-v2-backend`<br />
`cd react-pizza-v2-backend`<br />
## 2. First you need install nodejs
On Windows:<br />
Visit the official node.js site https://nodejs.org/en/download/ and click on Windows installer to download the necessary software in your system. The installer contains the NPM package. Based on the system you want to install, choose 32-bit installer or 64-installer and proceed.<br />
On Ubuntu:<br />
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
## 3. Docker installation (your need to install docker and docker-compose)
a) Manual for Windows (install Docker Desktop) <br />
https://docs.docker.com/desktop/install/windows-install/<br />
b) Manual For Ubuntu (you may install Desktop or docker and docker-compose separately)
https://docs.docker.com/engine/install/ubuntu/<br />
https://www.youtube.com/watch?v=6j1ISxY5ss4<br />
Ubuntu Docker desktop installation:<br />
https://www.youtube.com/watch?v=Vplj9b0L_1Y&t=245s<br />
## 4. Run 2 docker containers (pgAdmin and postgres)
Run command from (/react-pizza-v2-backend folder) where exists docker-compose.yaml<br />
login and passwords see in docker-compose.yaml for postgres and pgAdmin <br />
On Ubuntu:<br />
`systemctl start docker`<br />
`docker-compose up -d`<br />
On Windows start docker DeskTop and type in command line:<br />
`docker-compose up -d`<br />
### 5. Go to http://localhost:5050 and enter:
`login: test@gmail.com`<br />
`password: Qwerty123!`<br />
### 6. Register server after getting on pgadmin dashboard:
`name: postgres` or anything you want<br />
Fill Connection tab:<br />
`Hostname/address: postgres`<br />
`port: 5432`<br />
`username: postgres`<br />
`password: Qwerty123!`<br />
### 7. Create database pizza
Create database with name:<br />
`pizza`<br />
Start server from (/server folder)<br />
`npm run dev`<br />
Tables created after start<br /> 
Stop running server<br />
`Ctrl+C`<br />
Run migrations from (/react-pizza-v2-backend folder) and fill data:<br />
`npx sequelize-cli db:seed:all`<br />
### 8. Changes in frontend Archakov project
a) You should change backend url at file - src/pages/redux/pizza/asyncActions.ts to:<br />
`const { data } = await axios.get<Pizza[]>(``http://localhost:5000/api/items...`<br />
b) Change images at file - src/components/pizzaBlock/index.tsx output to:<br />
`<img className="pizza-block__image" src={``http://localhost:5000/${imageUrl}``} alt="Pizza" />`<br />
### 9. Start server<br />
`npm run dev`<br />
###10. Get Archakov project:<br />
`git clone https://github.com/Archakov06/.git`<br />
`cd react-pizza-v2`<br />
`npm install`<br />
Start frontend side from Archakov github<br />
`npm start`</br >
# PLEASE DO NOT FORGET TO SET STARS<br />

