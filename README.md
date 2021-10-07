# Mastermind

The goal of this project was learning and implementing ES6 classes, ES6 modules and Webpack to bundle modules together. For additional challenge, I decided to implement Model-View-Controller and Publisher-Subscriber patterns as project architecture. At times this was really hard. To wrap my brain around these concepts, but with time and lot of studying, I successfully separated the data logic from the presentation logic, and made the project easier to reason about.

## How to play Mastermind

Try the live preview of this project here, [Play Mastermind](https://mojotron.github.io/mastermind/), via GitHub pages.

Mastermind is a code breaking game. Game will randomly generate a sequence of colors.
The goal of game is to break that code by guessing the correct color sequence. There are three game difficulties:

| difficulty | code length | colors |
| :--------: | :---------: | :----: |
|    easy    |      3      |   4    |
|   normal   |      4      |   6    |
|    hard    |      5      |   8    |

When the user inputs a code break attempt, the application will give clues for the next attempt. A red flag means that the user has guessed a correct color at a correct position. A white flag means the user has guessed a correct color at an incorrect position. The game lists first red flags and then white flags. This is why the user doesn't know on which position he/she guessed a correct color.
Before a code break attempt, the user can undo the current colors if he/she clicked a wrong one.

For more information about mastermind [read here](<https://en.wikipedia.org/wiki/Mastermind_(board_game)>).

### Highscore feature

When the user breaks the code, a form will popup. With this form, the user can submit a username for the high score table. If the user submits an empty form, the table will display Unknown username in the table. The table is sorted by the amount of turns that the player had before breaking the code. If there is more then one score with the same amount of turns, they are sorted by an additional condition, time passed from starting the game to breaking code.
High score table displays the best 15 code breaks.
High scores are saved and displayed with localStorage API.

.

## What have I learned

- NPM - setting project with npm -init. Installing packages, setting up devDependencies, configuration with package.json. Using scripts within package.json.
- ES6 Classes - I prefer unis factory function. With this project I forced my self using other OOP tools.
- ES6 Modules - separating code in smaller chunks and avoiding spaghetti code. With modules code is easier to debug, maintain and reason about.
- Webpack bundler - setting up entry and output. Css, Style loader, cache busting and plugins(html-webpack-plugin), webpack-merge(separating config files for development and production modes), using webpack-dev-server, extracting css file with mini-css-extract-plugin.
- Model-View-Controller pattern.
- Publisher-Subscriber pattern.
- Config file - for game data that is used in multiple places throughout project, later if we want to change something we change variable in only one place.
- Helpers file - separating independent helper functions from the main structure.

## Resources

Webpack, awesome [video tutorial](https://www.youtube.com/watch?v=MpGLUVbqoYQ) by Colt Steele.

MVC and publisher-subscriber patterns are inspired by finale project in [Complete Javascript Course](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann.

Deploying a subfolder to GitHub Pages, [instructions](https://gist.github.com/cobyism/4730490).
