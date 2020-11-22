# Find documentation

The `component`, `store` and `styles` directories have their own documented `README.md`. Each `component` has its documentation in the `README.md` of the directory containing the `component`.

For Vue 3 docs [click here](https://v3.vuejs.org/guide/introduction.html).

# Docker

This application is dockerised for both development and production environments. This makes it easier to setup the application on different machines as there is no need to install node.js and other dependancies for the app. All you need is docker installed on your machine.

To construct a dev ops approach with Vue, Docker and Azure, [this link looks promising](https://www.freecodecamp.org/news/how-you-can-do-continuous-delivery-with-vue-docker-and-azure-2f1e31fff832/)

## Run in Production Mode

This application is dockerised. If you run `Dockerfile`, the application will run in **production mode**.

```{bash}
$ docker build -t client .
$ docker run -p 8080:80 -it --rm --name client client
```

## Run in Development Mode

This application is dockerised. If you run `Dockerfile-dev`, the application will run in **development mode** with *hot reload*.

```{bash}
$ docker build -t client -f Dockerfile-dev .
$ docker run -p 8080:8080 -it --rm --name client client
```
