# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Challenge

Use the provided create-react-app basic template to design a simple fitness class booking system.

You must use the following API (no token required): https://wod-with-me-backend-test.herokuapp.com/api

The endpoints you need to be concerned with are:
- `/classes`
- `/classes/id/:id`

You can design the look application however you want (CSS frameworks allowed).
You may also use any npm libraries you want.

The way you use the libraries, structure your code/directories/files and design the look of the application will all the taken into consideration when evaluation the quality of your project.

Make sure to keep consistent with:
- Which libraries you use
- How you structure your code
- How you design the look of the application
- How you use the API
- How you write your function and name your variables. Comments are welcome.
- How often you commit and how you write your commit descriptions.

## Deliverables
1. The application should be fully working with no console errors
2. You should be able to view all the classes ordered by date and time
3. You should be able to hover over a class to see the description
4. You should be able to click on a class to see the details of the class (on a separate page)
5. You should be able to move forwards and backwards week by week
6. You should be able to search for classes by name or location (bonus points if you implement fuzzy search and make this performant)
7. The website should be mobile responsive

## Bonus
1. When you hover over a class to see the description you should render the HTML in the string
2. When you search for a class you should be able to find it using fuzzy search (partial or misspelled search)
3. The search should be case insensitive
The search should be performant. Don't make a request on each keystroke and use a caching strategy to reduce API calls.


If you need design inspiration look at the following website: https://booking.holmesplace.ch/en
