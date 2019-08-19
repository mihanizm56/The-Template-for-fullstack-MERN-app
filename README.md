# Template for MERN monolith apps

This template is a combination of the most common libs that I use 
and it contains the basic build configuration to deploying

This template is built on CRA (v2) and express-generator.

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

# All you need is to choose your stack from the list 
# and add/remove some other libs !

### Installation

Install the dependencies and devDependencies.

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

### Development
This template offers you the type of development where you can independently develop the frontend part and the backend part.
To develop


### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
