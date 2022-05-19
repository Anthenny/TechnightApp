# Table of contents

- [General](#markdown-header-workflow)
- [Requirements](#markdown-header-requirements)
- [Getting started](#markdown-header-getting-started)
  - [First time running the application](#markdown-header-first-time-running-the-application)
  - [Using the mobile application](#markdown-header-using-the-mobile-application)
  - [Errors](#markdown-header-errors)
- [Database managemens](#markdown-header-database-management)
  - [GUI](#markdown-header-gui)
  - [CLI](#markdown-header-cli)
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
- Expo for the mobile app.
- Emulator preferably an IOS emulator.

# Getting started

Right now you can only launch the mobile application <manually>, to be able to do this u will need to follow the steps below.

## First time running the application

1. Cd in the frontend-dashboard directory and make a directory called config. Inside of this directory u need to make a folder with the name of config.ts.
2. After u've done that u need to copy the code that is inside of dist/dist.local.ts to config.ts.
3. Remove the .local part of the .env.local file in the root and in the backend directory so all thats left is a .env file.
4. Use `make build` in the root directory. This will build the application getting everything u need to use the API, mobile app and the dashboard. When it's done getting the dependencies it will spin up the containers for <development>.
5. After building and spinning up the containers go to http://localhost:5000/,please give the containers the time to startup. If it's succesful u should see `status: succes, message: you did it`
6. After building the fronrend u can go to `http://localhost:3000/` . Proceed to login with email: a.dmin@developers.nl and password: Ditishetsupergeheimewachtwoordvandevelopers2022

## Running for production

1. Run make up.prod in the root directory to spin up the containers for production

## Errors

If you have errors make sure to use `docker ps`. If you see that a container is down or trying to restart use `docker logs -f <container name or ID>`

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
