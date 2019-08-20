# Template for MERN monolith apps

### This template is a combination of the most common libs that I use and it contains the basic build configuration to deploying. You can choose your own stack from the list of libs below.
### Note that this monolith template is made only for easy-in-deploy for the Heroku!

Libs and biolerplates are included in the dependencies for the frontend:
  - CRA (the whole boilerplate)
  - Redux libs (redux,redux-saga,redux-form,react-redux)
  - classnames
  - eslint
  - formik
  - i18next (including i18next-browser-languagedetector and i18next-xhr-backend)
  - ramda
  - lodash
  - formik (with yup validation)
  - typescript (cause my CRA is based on ts)
  - reselect
  - cross-env
  - mkdirp-promise

Libs are included in the devDependencies for the frontend:
  - enzyme (and huge number of libs with it)
  - eslint (and huge number of libs with it)
  - husky
  - lint-staged
  - prettier
  - redux-mock-store
  - concurrently

Libs and biolerplates are included in the dependencies for the backend:
  - Express-generator
  - @hapi/joi
  - cookie-parser
  - cors
  - cross-env
  - dotenv
  - express-rate-limit
  - helmet
  - jimp
  - jsonwebtoken
  - lodash
  - mongo-sanitize
  - mongoose
  - morgan
  - multer
  - nodemailer (with nodemailer-express-handlebars)
  - rimraf

Libs are included in the devDependencies for the backend:
  - nodemon

## Installation

Install all dependencies and devDependencies.

```sh
$ npm run install:all
```

Start the whole project on your local machine

```sh
$ npm run start:local
```

Start the whole project on your server

```sh
$ npm run start
```

## Architecture Sollutions

### Frontend:
The frontend architecture is based on:
- [arch.js](https://blog.maddevs.io/best-architecture-for-the-react-project-149b377b379d)
- [redux-ducks](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7)

The backend architecture is based on:
- [mvc](https://habr.com/ru/post/181772/)

## Development
This template offers you the type of development where you can independently develop the frontend part and the backend part:
  - To develop the frontend part I'm using CRA with the proxy to the port on the backend where I have my REST API. Or simply you can mock your requests in the file client/src/services/api/rest.js.
  - To develop the backend part you can simply develop your REST API as a usual express app. SPA build is being served from the folder server/public and the controller for that is in folder server/controllers/spa!
  - To deploy the app I use my own copy script which takes your CRA build and paste it to the served folder server/public.

## All Useful Scripts:

#### Prepare all necessary dependencies for the Heroku in the heroku-prebuild phase:
```sh
$ npm run heroku-prebuild
```  
#### Build the whole app for the Heroku in build phase:
```sh
$ npm run build
```  
#### Build the CRA:
```sh
$ npm run build:client
```  
#### Build the whole app and start it in your local computer:
```sh
$ npm run start:local
``` 
#### Start the server in the production mode:
```sh
$ npm run start
```  
#### Copy builded SPA static files and paste them to the server:
```sh
$ npm run copy
``` 
#### Start CRA in development mode:
```sh
$ npm run start:client
``` 
#### Start Server in development mode:
```sh
$ npm run server:dev
``` 
#### Stop nodejs processes:
```sh
$ npm run stop
``` 