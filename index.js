// const express = require("express").  ------ old method, it import express only when it is called anywhere in the code
import express from 'express'
// to bypass error while running, need to add "type"="module" instead of common js as type in package.json before the keyword.
import connectDB from './config/database.js';

const app = express();

// const for non changeable-variable and let for changable-variable

const PORT = process.env.PORT;

connectDB();

// function printResponse() {
//     console.log("Server is running on port 3000 "); ------------ traditional function decleration

// }

//  const printResponse =() => {
//      console.log("Server is running on port 3000 ");      
//     //    modern function decleration

//  }

// app.listen(3000, printResponse);

app.listen(PORT, () => {
     console.log(`Server is running on ${PORT}`);  
   
 });