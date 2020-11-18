# Story Squad Team D

[![Maintainability](https://api.codeclimate.com/v1/badges/0a3a11c6f1e83568a5cf/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Labs26-StorySquad-FE-TeamB/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0a3a11c6f1e83568a5cf/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Labs26-StorySquad-FE-TeamB/test_coverage)

[<img src="https://avatars2.githubusercontent.com/t/4044276?s=280&v=4" width="200" />](https://avatars2.githubusercontent.com/t/4044276?s=280&v=4)

You can find the deployed project at: [AWS Amplify](https://d.storysquad.dev/)

## Project Overview

[Frontend video](https://youtu.be/RwdSUOyeXG0)
<br>
[Backend video](https://youtu.be/K5k19qWKHbI)
<br>
[Product Roadmap](https://www.notion.so/Story-Squad-Roadmap-2682f21ae48b420cbb0caafa3f500b5e)
<br>
[UX Design](https://www.figma.com/file/WaHXdLK2NASoFWYVMZLVNt/Story_Squad?node-id=962%3A211)
<br>
[Trello Board](https://trello.com/b/WgtYKaGA/story-squad-anisha)
<br>
[Architecture Layout](https://whimsical.com/428nXLpzshbbb32xF67Lu4)
<br>

---

Welcome to Story Squad! We are an interactive learning platform targeted at grade school children, and we help build reading comprehension as well as artistic, writing, and analytical/critical thinking skills through weekly competitions.

Each week features a new chapter in an exciting novel, written and serialized specifically for Story Squad by author and educator Graig Peterson. Children are provided with prompts based on the chapter they've just read, and participants are then divided into teams of two. Students create art and fanfiction to match the prompt, before going head to head in a bracket-style tournament.

In addition to growing their literary and artistic skills, students learn team building and critical thinking skills through a unique voting system, where each child must weight their own work against their teammate in order to increase their odds of winning. Badges and points incentivize winning and encourage participation.

Story Squad is a paid service; parents are required to create the account for their children and pay a monthly subscription fee in order for their children to compete. This brings the platform into compliance with COPPA and ensures a long future for the project.

### Key Features

- A Custom, Serialized Novel geared toward children in 3rd-6th grade
- Parental Controls which allow parents to add and customize child accounts

<br>

## Tech Stack

### Front end built using:

React

- First Class Performance with Virtual DOM
- Lightweight Library resulting in low bundle size/improved load times
- Easy cross-platform development via progressive web app
- Simple routing
  <br>

Ant Design

- A set of high-quality React components out of the box
- Powerful theme customization
- Whole package of design resources and development tools

React Plotly

- Easy to use to embed D3 charts
- This React component takes the chart type, data and styling as Plotyly.JSON in its data and layout props, then draws the chart using Plotly.js.

Redux state management

- Redux helps you write applications that behave consistently,
- Centrilize your application's state and logic
- The Redux DevTools make it easy to trace bugs

### [Backend](https://story-squad-be-d.herokuapp.com/) built using:

Express

- Built in routing and middleware
- Useful add-ons such as helmet and CORS

Swagger Editor Documentation

- Defines and documents RESTful APIs

## API's

### JWT & BCrypt

JSON Web Tokens are an industry standard authentication solution. Paired with BCrypt for hashing passwords, this allows secure local password authentication without reliance on third party solutions.

### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. Must create a .env file containing the following:

```
*  REACT_APP_API_URI // This is the URL for your deployed back end on Heroku
*  REACT_APP_CLIENT_ID // Must ask for this value
*  REACT_APP_OKTA_ISSUER_URI // Must ask for this value
```

## Testing

Jest

- Simple testing
- Mocking of dependencies
- Promotes consistent unit testing

## Installation Instructions

Clone repo

```
git clone https://github.com/Lambda-School-Labs/story-squad-fe-d

cd story-squad-fe-d
```

Install Dependencies

```
npm install
```

Run Test

```
npm test
```

Clone and download the [backend](https://story-squad-be-d.herokuapp.com/)

Follow backend [set up guides](https://github.com/Lambda-School-Labs/story-squad-be-d)
<br>
<br>
Run the application locally

```
npm start
```

## Other Scripts

```
* build - creates a build of the application
* dev - runs the development server
* test - runs tests as defined in *.spec.ts files
* lint - format and correct errors with prettier
```

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://story-squad-be-d.herokuapp.com/api-docs/) for details on the backend of our project.

<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Contributors

### Labs 28 Contributors
| [Christian Arneson](https://github.com/christiano39) | [Bea Del Rosario](https://github.com/beaadelrosario) | [Hailey Hansard](https://github.com/haileyhansard) | [Parker Williams](https://github.com/parkster246) | [Anisha Sunkerneni](https://github.com/ars394) |
|:-------:|:-------:|:-------:|:-------:|:-------:|
| <img src="https://avatars0.githubusercontent.com/u/42501550?s=400&u=c750fce5d90c0da17190ba4306fed6f6281f3123&v=4" width = "100" />| <img src="https://avatars3.githubusercontent.com/u/65781305?s=400&v=4" width = "100" />| <img src="https://avatars2.githubusercontent.com/u/64794287?s=400&u=98bf493959a7ff873fa9f9245e017c1cbb6133a6&v=4" width = "100" />| <img src="https://avatars2.githubusercontent.com/u/66083410?s=400&u=631b0914244cd1f7d1834751e4a4374b9bfbb200&v=4" width = "100" />| <img src="https://avatars1.githubusercontent.com/u/54909619?s=400&u=f9628c8197fc856a939a4d7f3914b29a7cae8eb0&v=4" width = "100" />|
| Web | Web | Web | Web | Project Manager |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/christiano39) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/beaadelrosario) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/haileyhansard) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/parkster246) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ars394) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/christianthedev/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/beadelrosario/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/haileyhansard/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/parker-williams-dev/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anishasunkerneni/) |

[See Previous Contributors](labs27-contributors.md)


