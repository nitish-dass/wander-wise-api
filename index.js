// const express = require("express").  ------ old method, it import express only when it is called anywhere in the code
import express from 'express'
// to bypass error while running, need to add "type"="module" instead of common js as type in package.json before the keyword.
import connectDB from './config/database.js';
import HANDLERS from './handlers/index.js';
import errorMiddleware from './middlewares/error.js';
import { authMiddleware } from './middlewares/auth.js';
import cors from cors;

const app = express();

// const for non changeable-variable and let for changable-variable

const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIOMS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(authMiddleware);
app.use("/", HANDLERS);   //end point pahila aauxa tei vayera handlers errorMiddleware vanda mathi rakheko
app.use(errorMiddleware);   //just load gareko , not executable tei vayera function vayera pani () use na gareko


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