# THIS IS BACKEND SIDE FOR PIZZA V2 PROJECT
# PLEASE DO NOT FORGET TO SET STARS
FRONT SIDE YOU CAN GET HERE:<br />
https://github.com/Archakov06/react-pizza-v2<br />
# 1. First you need install nodejs
On Windows:<br />
Visit the official node.js site https://nodejs.org/en/download/ and click on Windows installer to download the necessary software in your system. The installer contains the NPM package. Based on the system you want to install, choose 32-bit installer or 64-installer and proceed.<br />
On Ubuntu:<br />
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
## 2. Docker installation (your need to install docker and docker-compose)
a) Manual for Windows (install Docker Desktop) <br />
https://docs.docker.com/desktop/install/windows-install/<br />
b) Manual For Ubuntu (you may install Desktop or docker and docker-compose separately)
https://docs.docker.com/engine/install/ubuntu/<br />
https://www.youtube.com/watch?v=6j1ISxY5ss4<br />
Ubuntu Docker desktop installation:<br />
https://www.youtube.com/watch?v=Vplj9b0L_1Y&t=245s<br />
## 3. Run 2 docker containers (pgAdmin and postgres)
Run command from (/server folder) where exists docker-compose.yaml<br />
login and passwords see in docker-compose.yaml for postgres and pgAdmin <br />
`docker-compose up -d`
### 4. Go to http://localhost:5050 and enter:
`login: test@gmail.com`<br />
`password: Qwerty123!`<br />
### 5. Register server after getting on pgadmin dashboard:
`name: postgres` or anything you want<br />
Fill Connection tab:<br />
`Hostname/address: postgres`<br />
`port: 5432`<br />
`username: postgres`<br />
`password: Qwerty123`<br />
### 6. Create database pizza
Start server from (/server folder)<br />
`npm run dev`<br />
Stop running server<br />
`Ctrl+C`<br />
Run migrations fill data<br />
`npx sequelize-cli db:seed:all`<br />
Start server<br />
`npm run dev`<br />
Start frontend side from Archakov github<br />
#PLEASE DO NOT FORGET TO SET STARS<br />

