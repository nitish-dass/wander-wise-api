import { validationResult } from "express-validator";
import { validationError } from "express-validator";

/**
 * Validate the request body using express-validator
 * This middleware checks validation results after validators have run
 */

export const validate = { req, res, next } => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next( new validationError("Validation error", errors.array()))
    }
    next();
};
