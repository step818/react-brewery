# _React Clone of a Brewery Website_

#### _11th Independent project, 07/3/2019_

#### By _**Stephen Trewick**_

## Program Name _React Clone of a Brewery Website_ 11th Independent Project

## Description

This exercise is designed to demonstrate a website created with the React library with minimal functionality and some styling. In fact, the project has no state and is static help just get the fundamentals down and make a good habit of structuring the UI first, and then adding state to all necessary components after. This website is a mock of a brewery that its main feature is going to be selling beer to patrons. When a patron buys a pint of beer, a button that deduces the amount of available inventory will change the state of the page to display the new number available. For now, it is just static.


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
       
3. Build the application:

       $ npm run build
4. Run the application:

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


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).