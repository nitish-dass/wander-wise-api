import { body } from "express-validator";
import { validate } from "./validate.js";

export const createOrUpdateBaggageValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name should not be empty.")
        .trim()
        .escape(),
    body("completed")
        .optional()
        .isBoolean()
        .withMessage("Complete should be either true or false"),
    validate,
];