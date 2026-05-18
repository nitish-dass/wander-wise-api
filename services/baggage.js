import { NotFoundError } from "../errors/not-found.js";
import Baggage from "../models/baggage.js";

export const create = async (data) => {     //(data => { name: "jacket" })
    const baggage = await Baggage.create(data);  
    return baggage;
}

export const getAll = async () => {
    const baggages = await Baggage.find();
    return baggages;
}

export const getOne = async (_id) => {
    const baggage = await Baggage.findById(_id);
    if(!baggage) {
        throw new NotFoundError("Baggage not found!")
    }
    return baggage;
}
