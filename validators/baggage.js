import { body } from "express-validator";
import { validate } from "./validate.js";

export const createBaggageValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name should not be empty.")
        .trim()
        .escape(),
    validate,
];