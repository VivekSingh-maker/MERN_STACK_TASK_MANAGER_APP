1.Overview

The MERN STACK TASK MANAGER Application is a full-stack web app built using  technologies including JavaScript, React, Tailwind CSS, Node.js, Express and MongoDB. This feature-rich task management tool allows users to create and manage tasks efficiently. Users can organize tasks by dragging and dropping them between multiple columns such as To Do, In Progress, Blocked, Review, and Done. Additionally, the application supports user jwt authentication with sign-in, sign-up, and logout functionalities, ensuring secure access and personalized task management for each user.

------------------------------------------------------------------------------------------------------------------------------------

2.Features

User-side features

Sign in

Sign up

Log out

Add Task

View Task

Edit Task

Delete Task

Drag & Drop Task

------------------------------------------------------------------------------------------------------------------------------------
 
3.Tools and Technologies

HTML

CSS

Tailwind CSS

JavaScript

React

Node.js

Express

Restful APIs

MongoDB

------------------------------------------------------------------------------------------------------------------------------------

4.Dependencies

Following are the major dependencies of the project:

react

react-router-dom

axios

react-hook-form

@hookform/resolvers

cookie-parser

bcrypt

cors 

dotenv

jsonwebtoken

express

mongoose

shadcn-ui@latest add button input select label form dialog toast progress card skeleton

------------------------------------------------------------------------------------------------------------------------------------

5.Dev-dependencies

Following are the major dev-dependencies of the project:

nodemon

Concurrently

------------------------------------------------------------------------------------------------------------------------------------

6.Prerequisites

Node.js must be installed on the system.

You should have MongoDB Database.

You should have a code editor (ex: VS Code)

------------------------------------------------------------------------------------------------------------------------------------

7.Installation and Setup

Install all the dependencies.

       npm i “dependency-name”
       
Create a file named “.env” inside the backend folder. Add data from .env file and substitute your credentials there.

Start the application.

       nodemon app.js
       
Go to http://localhost:3000

------------------------------------------------------------------------------------------------------------------------------------

8.Configure Tailwind CSS

npm create vite@latest

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

jsconfig.json File

{

    "compilerOptions": {
    
      // ...
      
      "baseUrl": ".",
      
      "paths": {
      
        "@/*": [
        
          "./src/*"
          
        ]
        
      }
      
      // ...
      
    }
    
}

vite.config.js File

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({

  plugins: [react()],
  
  resolve: {
  
    alias: {
    
      "@": path.resolve(__dirname, "./src"),
      
    },
    
  },
  
});

npx shadcn@latest init

------------------------------------------------------------------------------------------------------------------------------------

9.Backend API

/api/task:

/add-new-task - POST

/get-all-tasks-by-userid/:id - GET

/delete-task/:id - DELETE

/update-task - PUT

/api/user:

/register - POST

/login - POST

/auth - POST

/logout - POST

------------------------------------------------------------------------------------------------------------------------------------

10.UI Features

Sign Up: The Sign Up feature allows new users to create an account and access the task manager application.


Sign In: The Sign In feature allows users to securely access their accounts by entering their registered email/username and password.


Log out: The Log Out feature allows users to securely end their session and return to the login page.


Add a Todo : User can easily add new tasks by providing key information such as the task's title, a detailed description, its current status, and a priority level. The title helps identify the task, while the description allows users to provide additional context or instructions. Users can assign the task a status, such as 'To Do,' 'In Progress,' 'Blocked,' 'Review,' or 'Done,' based on its current stage in the workflow. Additionally, setting a priority level (e.g., low, medium, high) helps users focus on the most important tasks, ensuring efficient task management and smooth project progression.


Edit Todo: Users have the ability to edit tasks at any time. They can modify the task's title, description, status and priority to ensure the information remains accurate and up-to-date.


Delete Todo: User can delete a Todo.


View all Todos: Users can view all tasks either in a list format or on the Kanban board.


Drag & Drop Todo: Users can drag and drop tasks between columns to update their status.

------------------------------------------------------------------------------------------------------------------------------------

11.Useful Links

Project Link

GitHub Repo: https://github.com/VivekSingh-maker/MERN_STACK_TASK_MANAGER_APP.git

Hosted URL: https://velvety-dragon-0569de.netlify.app/

Official Documents Link

npmjs Docs: https://www.npmjs.com/

MongoDb Docs: https://www.mongodb.com/docs/manual/introduction/

React.dev Docs: https://react.dev/learn

Tailwind CSS Installation Docs: https://ui.shadcn.com/docs/cli

Download Link

Nodejs Download: https://nodejs.org/en/download/package-manager

VS Code Download: https://code.visualstudio.com/download

------------------------------------------------------------------------------------------------------------------------------------

12.Contact

Email: vivekpcmsingh@gmail.com

Linkedin: https://www.linkedin.com/in/vivek-singh-a4ab1919



