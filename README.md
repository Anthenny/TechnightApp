# Table of contents

- [General](#markdown-header-workflow)
- [Requirements](#markdown-header-requirements)
- [Getting started](#markdown-header-getting-started)
  - [First time running the application](#markdown-header-first-time-running-the-application)
  - [Errors](#markdown-header-errors)
  - [Database](#markdown-header-database)
  - [Backend folders](#markdown-header-backend-folders)

# General

This project is created using React Native on the frontend and Node.js on the backend.
The frontend (website) is created using next.js, the mobile app is made with react-native and the backend is made with node.js. This app is mostly written in Typescript, if we have time we are supposed to convert the mobile app to Typescript aswell.

# Requirements ☕

- Docker
- Docker-compose
- Able to run make commands
- Expo for the mobile app.
- Simulator preferably an IOS simulator.

# Getting started

The mobile app is made for tablets. In specific the iPad 9th generation.

## First time running the application

1. Cd in the backend directory and use `make build`. This will build the application getting everything u need to use the API, mobile app and the dashboard. When it's done getting the dependencies it will spin up the containers.
2. After building and spinning up the containers go to http://localhost:5000/ , please give the containers the time to startup.

## Errors

If you have errors make sure to use `docker ps`. If you see that a container is down or trying to restart use `docker logs -f <container name or ID>`

## Database

In this project use MongoDB combined with express and mongoose.

This project uses Mongo-Express, this allows us to have a web-based MongoDB admin interface. To see this go to http://localhost:5000/ .

We can also use the CLI. To do this run `docker exec -it mongo mongo -u "admin" -p "admin12345"`. This should give u a welcome message. From here on out we can use mongo commands such as `show dbs` and `use <db_name_here>`

## Backend folders

All the code is in the src folder. The project is using the MVC structure.

In the utils folder we have a appError and a catchAsync file. The appError allows us to make our own error messages with our own statusCode. Then we have the catchAsync file that allows us to skip the repetative try and catch blocks.

In the middleware folder we have the validateResource file and a corsMiddleware. The validateResource file validates the body,req and params. We tell this function which schema we are using and it will do the rest. In the corsMiddleware file we define what methods and headers this API can receive. We can also define the wesbsites that are allowed to connect to our API.
