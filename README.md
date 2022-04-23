![The G2i Logo](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/g2i-web-150px.png 'The G2i logo')

# Trivia Game Coding Challenge

G2i's Code Challenge implementation of a Trivia app in React using advanced techniques and industry best practices.

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Installation](#installation)
- [Starting the game](#starting-the-game)
- [Contributing](#contributing)
- [License](#license)

## About The Project

Check [G2i Code Challenge](https://gist.github.com/severnsc/e09f4f8742b7dd91af9c422d6f210a57) for all the details about requirements and wireframes.

## Built With

- [React](https://reactjs.org/)
- [Context API](https://reactjs.org/docs/context.html#api)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/docs)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Installation

1. Clone the repo

```sh
git clone https://github.com/hugo-marcelo/react-trivia.git
```

2. Install NPM packages

```sh
npm install or yarn
```

3. Start the application

```sh
npm start or yarn start
```

4. Run the tests

```sh
npm run test or yarn test
```

## Starting the game

- The user need to select the difficulty of the game:

  - Easy
  - Hard
  - Harder

- The different between the difficulty is that when the user choose difficulty hard or harder there is a timer for each question.
- The user need to select true or false as a result for each question.
- If there is timer and the time ends, the answer will mark as wrong.
- There is an option to exit the game any time by clicking on the Restart button.
- The game end after answering all te 10 questions.
- At the end of the game the user navigate to the result page the inform the user with all the question that got answer right or wrong.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](/LICENSE.md 'LICENSE') for more information.
