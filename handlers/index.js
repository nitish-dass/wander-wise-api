import { Router } from "express"
import BAGGAGE_ROUTER from "./baggage.js"

const HANDLERS = Router()

HANDLERS.use("/baggages", BAGGAGE_ROUTER);  // /baggages is an end point(created), when called opens baggage_router

export default HANDLERS;
