import { Router } from "express"
import BAGGAGE_ROUTER from "./baggage.js"
import USER_ROUTER from "./user.js";
import AUTH_ROUTER from "./auth.js";

const HANDLERS = Router()

HANDLERS.use("/baggages", BAGGAGE_ROUTER);  // /baggages is an end point(created), when called opens baggage_router
HANDLERS.use("/users", USER_ROUTER);
HANDLERS.use("/auth", AUTH_ROUTER);

export default HANDLERS;
