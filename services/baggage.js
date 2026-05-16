import Baggage from "../models/baggage.js";

export const create = async (data) => {     //(data => { name: "jacket" })
    const baggage = await Baggage.create(data);  
    return baggage;
}
