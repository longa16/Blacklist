# BlackList

## Introduction

This project involves creating a backend application using Node.js, Express and Mongoose to process users' unsubscribe requests via SMS.
## Features

- Add a phone number to the blacklist if the message contains "STOP".
- Retrieve all blacklisted numbers
- Check if a number is blacklisted

## Installation

1. Clone the repository
2. Install dependencies with `npm install`.
3. Create a `.env` file at the root of the project with the following variables:
   ```env
   PORT=3000
   MONGO = mongodb://localhost:27017/Blacklist
