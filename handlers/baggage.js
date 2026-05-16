import { Router } from "express";
import { create } from "../services/baggage.js";
import { createBaggageValidator } from "../validators/baggage.js";

const BAGGAGE_ROUTER = Router();

BAGGAGE_ROUTER.post("/", createBaggageValidator, async (req, res, next) => {
    try {
        const baggage = await create(req.body);  // create({name: "jacket"})
        res.status(201).json({ data: baggage });
    } catch (error) {
        next(error);
    }
});

export default BAGGAGE_ROUTER;