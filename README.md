# Mastermind

Goal of this project is learning and implementing ES6 classes, ES6 modules and Webpack to bundle modules together. For additional challenge i decided to implement Model-View-Controller and Publisher-Subscriber patterns as project architecture. At times this was really hard. To wrap my brain around this concepts but with time and lot of studying I successfully separated data logic from presentation logic and made project easier to reason about.

## How to play Mastermind

Try live preview of this project here, [Play Mastermind]().

Game is live via [???].
Mastermind is a code breaking game. Game will randomly generate sequence of color.
Goal of game is to break that code by guessing correct color sequence. There are three game difficulties:

| difficulty | code length | colors |
| :--------: | :---------: | :----: |
|    easy    |      3      |   4    |
|   normal   |      4      |   6    |
|    hard    |      5      |   8    |

When user inputs code break attempt application will give clues for next attempt. Red flag means that user have guessed correct color at correct position. White flag means user have guessed correct color at incorrect position. Game list first red flags then white flags. This why user doesn't know on which position he/she guessed correct color.
Before code break attempt user can undo current colors if he/she clicked wrong one.

For more information about mastermind [read here](<https://en.wikipedia.org/wiki/Mastermind_(board_game)>).

### Highscore feature

When user breaks the code form will popup. With this form user can submit username for highscore table. If user submits empty string the table will display Unknown username in table. Table is sorted by amount of turns that player had before braking code. If there is more then one score with same amount of turns they are sorted by additional condition, time.
Highscores are saved and display with localStorage API.

.

## What have I learned

- NPM - setting project with npm -init.Installing packages, setting up devDependencies, configuration with package.json. Using scripts within package.json.
- ES6 Classes - I prefer unis factory function. With this project I forced my self using other OOP tools.
- ES6 Modules - separating code in smaller chunks and avoiding spagettin code. With modules code is easier to debug, maintain and reson about.
- Webpack bundler - setting up entry and output, loader(css, style), cache busting and plugins(HtmlWebpackPlugin), webpack-merge(separating config files for dev and prod), webpack-dev-server.
- Model-View-Controller pattern.
- Publisher-Subscriber pattern.
- Config file - for game data that is used in multiple places through out project, later if we want to change something we change variable in one place.
- Helpers file - separating independent helper functions from main structure.

## Resources

Webpack, awesome [viedo tutorial](https://www.youtube.com/watch?v=MpGLUVbqoYQ) by Colt Steele. Helped me understand how to set up and configurate project.

MVC and publisher-subscriber patterns are inspired by finale project in [Complete Javascript Course](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann.
