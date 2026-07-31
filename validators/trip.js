import { body } from "express-validator";
import { validate } from "./validate.js";
import { ValidationError } from "../errors/validation.js";

export const createTripValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),
  body("startDate")
    .trim()
    .notEmpty()
    .withMessage("Start date is required")
    // .isDate()
    .toDate()
    .withMessage("Start date must be a date"),
  body("endDate")
    .trim()
    .notEmpty()
    .withMessage("End date is required")
    // .isDate()
    .toDate()
    .withMessage("End date must be a date")
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new ValidationError("End date must be after start date");
      }
      return true;
    }),
  body("destinations")
    .notEmpty()
    .withMessage("Destinations are required")
    .isArray()
    .withMessage("Destinations must be an array")
    .custom((value) => {
      return value.every((destination) => typeof destination === "string");
    })
    .withMessage("Destinations must be an array of strings"),
  body("budget.total")
    .trim()
    .notEmpty()
    .withMessage("Total budget is required")
    .isNumeric()
    .withMessage("Total budget must be a number"),
  body("budget.expenses")
    .optional()
    .isArray()
    .withMessage("Expenses must be an array"),
  body("budget.expenses.*")
    .optional()
    .custom((value) => typeof value === "object" && value !== null)
    .withMessage("Each expense must be an object"),
  body("budget.expenses.*.name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Expense name is required"),
  body("budget.expenses.*.amount")
    .optional()
    .trim()
    .isNumeric()
    .withMessage("Expense amount must be a number"),
  body("budget.expenses.*.date")
    .optional()
    .isISO8601()
    .withMessage("Expense date must be a date")
    .toDate(),
  validate,
];

export const updateTripValidator = [
  body("title").trim().optional().notEmpty().withMessage("Title is required"),
  body("startDate")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("Start date is required")
    .isDate()
    .withMessage("Start date must be a date"),
  body("endDate")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("End date is required")
    .isDate()
    .withMessage("End date must be a date")
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new ValidationError("End date must be after start date");
      }
      return true;
    }),
  body("destinations")
    .optional()
    .isArray()
    .withMessage("Destinations must be an array"),
  body("destinations.*")
    .trim()
    .optional()
    .notEmpty()
    .withMessage("Destination is required"),
  body("budget.total")
    .trim()
    .optional()
    .isNumeric()
    .withMessage("Total budget must be a number"),
  body("budget.expenses")
    .optional()
    .isArray()
    .withMessage("Expenses must be an array"),
   body("budget.expenses.*")
    .optional()
    .custom((value) => typeof value === "object" && value !== null)
    .withMessage("Each expense must be an object"),
  body("budget.expenses.*.name")
    .optional()
    .notEmpty()
    .withMessage("Expense name is required"),
  body("budget.expenses.*.amount")
    .optional()
    .isNumeric()
    .withMessage("Expense amount must be a number"),
    body("budget.expenses.*.date")
    .optional()
    .isISO8601()
    .withMessage("Expense date must be a date")
    .toDate(),
  validate,
];