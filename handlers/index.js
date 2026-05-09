import { Router } from "express"
import BAGGAGE_ROUTER from "./baggage.js"

const HANDLERS = Router()

HANDLERS.use("/baggages", BAGGAGE_ROUTER)

export default HANDLERS;
