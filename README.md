# THIS IS BACKEND SIDE FOR PIZZA V2 PROJECT
# PLEASE DO NOT FORGET TO SET STARS
FRONT SIDE YOU CAN GET HERE:
https://github.com/Archakov06/react-pizza-v2
# 1. First you need install nodejs
On Windows:
Visit the official node.js site https://nodejs.org/en/download/ and click on Windows installer to download the necessary software in your system. The installer contains the NPM package. Based on the system you want to install, choose 32-bit installer or 64-installer and proceed.
On Ubuntu:
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
## 2. Docker installation (your need to install docker and docker-compose)
a) Manual for Windows (install Docker Desktop) 
https://docs.docker.com/desktop/install/windows-install/
b) Manual For Ubuntu (you may install Desktop or docker and docker-compose separately)
https://docs.docker.com/engine/install/ubuntu/
https://www.youtube.com/watch?v=6j1ISxY5ss4
Ubuntu Docker desktop installation:
https://www.youtube.com/watch?v=Vplj9b0L_1Y&t=245s
## 3. Run 2 docker containers (pgAdmin and postgres)
Run command from (/server folder) where exists docker-compose.yaml
login and passwords see in docker-compose.yaml for postgres and pgAdmin 
`docker-compose up -d`
### 4. Go to http://localhost:5050 and enter:
`login: test@gmail.com`
`password: Qwerty123!`
### 5. Register server after getting on pgadmin dashboard:
`name: postgres` or anything you want
Fill Connection tab:
`Hostname/address: postgres`
`port: 5432`
`username: postgres`
`password: Qwerty123`
### 6. Create database pizza
Start server from (/server folder)
`npm run dev`
Stop running server
`Ctrl+C`
Run migrations fill data
`npx sequelize-cli db:seed:all`
Start server
`npm run dev`
Start frontend side from Archakov github
#PLEASE DO NOT FORGET TO SET STARS

