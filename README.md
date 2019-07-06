# _React Clone of a Brewery Website_

#### _11th Independent project, 07/3/2019_

#### By _**Stephen Trewick**_

## Program Name _React Clone of a Brewery Website_ 11th Independent Project

## Description

This exercise is designed to be a hub for DIY and "How-to" projects uploaded by users and searchable for other patrons to view. Using Angular CLI, this is practice in setting up ng, routing to nested components, sending data down with inputs, passing actions up with EventEmitters, and filtering data with pipes. The page will have a section for uploading projects, where a series of forms will be filled out until the overall form is submitted in to a database. Users will be able to search for relevant projects on how to do or make a project and the respective "how-to's" will display their title. Then a user can click the title to get to the details of the step-by-step instructable.


![Brewery Component Tree](/src/assets/images/Brewery-Component-Tree.jpg)

### Specs

| Spec | Input | Output |
| :-----------------    | :------------------ | :-------------- |
| User can add a project to a database by creating an instance of their project | _Input:_ Title, category, difficulty, number of steps, [array with each step] is enter in each specified form. | _Output:_ A saved formatted and styled project that is easy for anyone to read. |
| Returns each project for a searched category | _Input:_ "Automotive" | _Output:_ A list of project titles that have been uploaded by previous users that fall under the "automotive" category. |
| When user enters '5' for number of steps, user will be able to write step 1 through 5 in order and seperately | _Input:_ "5" | _Output:_ First form displays, user types, clicks next, second form displays, ... 5th form displays, user writes final step, clicks submit, and project is saved. |
| A project can be editted by a project owner | _Input:_ User clicks edit button and updates the number of steps and adds a few more | _Output:_ New, updated project will be saved. |

## Setup/Installation Requirements

* _You can check out the repository link in my github pages [Link to repository](https://github.com/step818/react-brewery)_

#### Install, build and run the application
1. Navigate to the application root directory:

       $ cd react-brewery
2. Install the required packages:

       $ npm install
3. Acquire your _own_ Firebase credentials and place them in the appropriate files, with the appropriate variable names.

       You'll need an apiKey, authDomain, databaseURL, and messagingSenderId 
4. Build the application:

       $ npm run build
5. Run the application:

       $ npm run start

#### Test the application
1. Execute the tests with Jasmine and Karma:

       $ npm run test


## Support and contact details

_stephent818@gmail.com_

## Support and contact details

If you have any feedback or concerns, please contact Stephen Trewick.

## Technologies Used

_Windows 10.1, Visual Studio Code _

### License
*Licensed under the GPL License*
Copyright (c) 2019 **_Stephen Trewick_**



# HowTo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).