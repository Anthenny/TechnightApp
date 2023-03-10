# Table of contents

- [General](#markdown-header-workflow)
- [Requirements](#markdown-header-requirements)
- [Getting started](#markdown-header-getting-started)
  - [First time running the application](#markdown-header-first-time-running-the-application)
  - [Using the mobile application](#markdown-header-using-the-mobile-application)
  - [Running for production](#markdown-header-running-for-production)
  - [Errors](#markdown-header-errors)
- [Database management](#markdown-header-database-management)
- [Folders](#markdown-header-database-management)
  - [Backend folders](#markdown-header-backend-folders)
  - [Frontend dashboard](#markdown-header-frontend-dashboard)
  - [Frontend](#markdown-header-frontend)

# General

This project is created using React Native(mobile app), Next.js(website) and Node.js on the backend.
This app is mostly written in Typescript, if we have time we are supposed to convert the mobile app to Typescript aswell.

# Requirements ☕

- Docker
- Docker-compose
- Able to run make commands
- Emulator preferably an IOS emulator. (It is possible to run the app without an emulator.)

# Getting started

## First time running the application

1. CD into the frontend-dashboard dir and remove the .example part of the config.ts.example file that is located in the config directory.
3. Remove the .local part of the .env.local file in the docker and in the backend directory so all thats left is a .env file.
4. Use `make build` in the root directory. This will build the application getting everything u need to use the API, mobile app and the dashboard. When it's done getting the dependencies it will spin up the containers for <development>.
5. After building and spinning up the containers go to http://localhost:5000/,please give the containers the time to startup. If it's succesful u should see `status: succes, message: you did it`
6. After building the frontend u can go to `http://localhost:3000/` . Proceed to login with email: a.dmin@developers.nl and password: Ditishetsupergeheimewachtwoordvandevelopers2022

## Using the mobile application

Because I'm assuming that no one has the emulator I decided to run the mobile application on a website by default. If you have a emulator installed do the following:

1. Go to the Dockerfile that is located in the frontend directory.
2. If you have an Android emulator run `npm run android`. If you have a IOS emulator run `npm run ios`.
3. Run make build from the root directory, after u've done this for the first time it will be cached.

## Running for production

1. Change the database link from `mongoDevURL` to `mongoProdURL` In the backend/src/server.ts on line 16.
2. Run make up.prod in the root directory to spin up the containers for production

## Errors

If you have errors make sure to use `docker ps`. If you see that a container is down or trying to restart use `docker logs -f <container name or ID>`

# Database management

To manage our database in development I used mongo express.

1. Go to `http://localhost:8081/`.
2. Login with username: admin password: admin12345

# Folders

## Backend folders

All the code is in the src folder. The project is using the MVC structure.

In the utils folder we have a appError and a catchAsync file. The appError allows us to make our own error messages with our own statusCode. Then we have the catchAsync file that allows us to skip the repetative try and catch blocks.

In the middleware folder we have the validateResource file and a corsMiddleware. The validateResource file validates the body,req and params. We tell this function which schema we are using and it will do the rest. In the corsMiddleware file we define what methods and headers this API can receive. We can also define the wesbsites that are allowed to connect to our API.

## Frontend Dashboard (website)

In te components directory u can find the modal that we use to create new participants, navbar, sidebar and the table.
Then we have the context directory where we keep the state of our application. I'm using context to make sure that every component can access information without the use of props.
In the pages directory u can find the full pages/routes. The dashboard directory is accesable in the browser by navigating to /dashboard.

## Frontend (mobile app)

In this project everything is happening in the App.js file in the root directory. We have a navigation container that handles our routes. The initial route is the form page and from there on u can acces the succes page.