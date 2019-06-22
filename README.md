# A starter kit for building websites with Django 🐍 and React ⚛️

## Default Tools

These are the default tools used in this starter kit:

### Backend

* [Django](https://www.djangoproject.com/)
* [Django REST Framework](https://www.django-rest-framework.org/)
* [WhiteNoise](http://whitenoise.evans.io/en/stable/)
* [Gunicorn](https://gunicorn.org/)
* [Pipenv](https://docs.pipenv.org/en/latest/)

### Frontend

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [TypeScript](https://www.typescriptlang.org)
* [React Router](https://reacttraining.com/react-router/)
* [Jest](https://jestjs.io/)
* [Yarn](https://yarnpkg.com/en/)
* [Styled Components](https://www.styled-components.com/)

## Getting Started

1. Clone this repository:

        git clone https://github.com/mkolodny/django-react-starter-kit <your-project-name>
1. Install [Pipenv](https://docs.pipenv.org/en/latest/#install-pipenv-today)
1. Install the backend dependencies:

        cd <your-project-directory>
        pipenv install
1. Install [Yarn](https://yarnpkg.com/en/docs/install)
1. Install the frontend dependencies:

        cd <your-project-directory>/frontend
        yarn install
1. (Optional) If you don't want to release your project under the MIT License, [change](https://choosealicense.com/) or [remove](https://choosealicense.com/no-permission/) the `LICENSE` file at the root of this repository.

## Directory Structure

This is the starter kit's high-level directory structure:

```
manage.py
Pipfile
backend/
  urls.py
  settings.py
  app/
    views.py
    models.py
    serializers.py
frontend/
  package.json
  src/
    index.tsx
    store.ts
    components/
    reducers/
    images/
```

## Running the App

### Development

In one terminal window/tab, run the frontend:

```
cd <your-project-directory>/frontend
yarn start 
```

Then, in another terminal window/tab, run the backend:

```
cd <your-project-directory>
pipenv shell
./manage.py runserver
```

### Production

I usually use [Heroku](https://www.heroku.com/) to get apps running in production. To get this starter kit running in production using Heroku, (after [signing up for Heroku](https://signup.heroku.com/) and [installing the command-line tool](https://devcenter.heroku.com/articles/heroku-cli)) run:

```
heroku apps:create
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python
git push heroku master
```

Thank you to Aatish Neupane for [this great blog post](https://librenepal.com/article/django-and-create-react-app-together-on-heroku/) about getting Django and React playing nicely together on Heroku.


## License

This starter kit is released under the [MIT License](https://tldrlegal.com/license/mit-license).

*Note: If you don't want to release your project under the MIT License, change or remove the `LICENSE` file at the root of this repo before publishing it.*
