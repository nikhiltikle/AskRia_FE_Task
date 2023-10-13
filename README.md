# Askria Frontend Task

This project offers you the ability to create a application form template and a static homepage UI. You can see a live demo [here](https://delightful-mooncake-de4c1e.netlify.app/tasktwo) of homepage UI.

## Tech Stack

1. `React.Js`(18.2.0)
2. `Typescript`(4.9.5)
3. `React-router-dom`(6.16.0)
4. `uuid`
5. `Antd`
6. `Stoplight prism` for mock API
7. `Context API` for state management

## Requirement to run an application on local

1. You must have installed Node Package Manager (NPM) on your machine
2. Create a `.env` file in the root directory of an application
3. Copy content from `.env.example` file and paste it into `.env` file
4. Assign `PUT` and `GET` API URL in env variable in `.env` file

## Steps to start an application on local

1. Move into the root directory of an application
2. Run `npm run run:prism` (You will get API URLs after running this script)
3. Run `npm install`
4. Run `npm start`. This will run an application on a local server. You can open this by opening or clicking [http://localhost:3000/](http://localhost:3000/) in your browser

## Features we added

1. User can create application form template with multiple options.
2. A static homepage UI (You can see this UI by opening or clicking for localhost [http://localhost:3000/tasktwo](http://localhost:3000/tasktwo) for live demo [https://delightful-mooncake-de4c1e.netlify.app/tasktwo](https://delightful-mooncake-de4c1e.netlify.app/tasktwo)

## Limitations

1. Currently, we don't have validations in application form
2. We have UI only for laptop screens
3. We are using mock API
