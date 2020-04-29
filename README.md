# OfficePlace 🖥

OfficePlace is a virtual office space for your team, closing the distance between remote coworkers so that even when you’re working on your own, you’re working together.

### Core Functionality

OfficePlace allows users to create a virtual environment where users can go for accountability and communication. In times like these when working in a physical office is not an option, it's helpful to have a virtual space that emulates an open office space where you can see when your coworkers/peers are present at their desks. The purpose of the app is to close the distance between remote coworkers, so even when you’re working on your own, you’re working together.

### Features

- Virtual accountability - a space where you can see your coworkers and who's active
- User registration and login
- Just one room
- Grid of desks - basic css grid
- Desk indicates if user is in office or not (logged in), and at the desk or not (active) through simple status
- Basic user interaction - send a note

### Stack

- React frontend
- Node backend with Express
- MongoDB with Mongoose

## Installation

Clone the repository

```bash
git clone https://github.com/zhagm/officeplace.git
```

Move into project directory, switch to the most recent branch, and install all dependencies

```bash
cd officeplace
git pull origin m2
npm run install
```

The project requires a couple keys that I've kept secret. You can find a file named server/config/your-keys.js
You can update the keys but I put some test keys so that your app still functions as it should.
your-keys.js is just a placeholder, we'll want to rename it to keys.js in the same file for it to run.

```bash
mv server/config/your-keys.js server/config/keys.js
```

And voila, you should be ready to run!

## Usage

This project is structured into a separate frontend and backend. To run both concurrently you can run the following command:

```bash
npm run dev
```

## Demo

- [Backend server hosted on Heroku](https://officeplace-server.herokuapp.com/)
- [Frontend Demo]() _(not yet deployed)_

## Progress

[Trello board](https://trello.com/invite/b/oPNupdYd/bde1244e3c28a7a5511ed68c4049f09f/officeplace-week-3)

**[Branch m2](https://github.com/zhagm/officeplace/tree/m2)** is the most recently updated branch.

## Useful Resources

- https://www.youtube.com/results?search_query=mern+stack+traversy
- https://www.youtube.com/watch?v=CVClHLwv-4I
- https://www.youtube.com/watch?v=gXkqy0b4M5g
