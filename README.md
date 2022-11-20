# Star Wars Autocompletion bar

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project is created to search and autocomplete the names of your favorite characters of star warsm using https://swapi.dev/ the star wars API.

## Technologies

This project is created with:

- Yarn version: 1.22.19
- Node version: 16.14.0
- React version: ^18.2.0

For more insights on the libraries and versioning used for this project, please go to the package.json file in this repo.

## Setup

**Before running this project, please create a .env file in the root folder, just as the .env.test file, use the same variables too.**
If you want to point or use another API, you can do it by changing the API_URL variable in your .env file (you'd have to match or modify the types and response of the swapi API).

To run this project, install it locally using npm:

```
$ cd your-project-folder
$ yarn install or npm install
$ yarn start or npm start
```

## TODO

- The Swapi API does not support actual autocompletion, only search, so this autocomplete bar will only work with the first API page.
