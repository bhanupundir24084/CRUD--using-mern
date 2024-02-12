# Instruction for MERN Stack CRUD App

## Introduction
This instruction manual provides a comprehensive guide for setting up and utilizing a CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The MERN stack is a popular choice for developing full-stack web applications due to its flexibility and efficiency.

## Technologies Used
1. React js for fronted.
2. Node js and Express js for api.
3. MongoDB Database for Store Data.

## Prerequisites
1. Install Node.js and npm. and npm installed globally.
2. Install IDE [text editor]

## Installation
1. Navigate to the project directory.
2. go to Server Directory and Run. [npm install]    
3. go to Client Directory and Run. [npm install]

## Update Mongo Connection URI and PORT NO
1. go to .env file
2. update MONGO URI and PORT NO

## Running the App
1. Start the server by running 'npm start' in the server directory.
    running: http://localhost:8000/

2. Start the React client by running 'npm start'i in the client directory.
    running: http://localhost:3000/


## Usage
1. Access the app through a web browser.
2.  Test CRUD Operatios for different entities. the url are given as . [client side]
    http://localhost:3000/create
   
    http://localhost:3000/display
    
    http://localhost:3000/update/:id

3. Our App api:
   
    http://localhost:8000/create
    http://localhost:8000/display
    http://localhost:8000/update/id
    http://localhost:8000/get-notifications
    http://localhost:8000/get-single-data'


## Troubleshooting 
    if, your network is changed. may be mongodb not connected. and it give error like:

    Could not  Connect to any  servers in your in your MongoDB Atlas cluster. One common common reason is that you're trying to access the database from an IP that isn't whiltelisted.

    solution: add current ip in cloud mongodbserver or paste your own connection string.

