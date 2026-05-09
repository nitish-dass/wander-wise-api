import Baggage from "../models/baggage.js";

export const create = async (data) => {
    const baggage = await Baggage.create(data);
    return baggage;
}
