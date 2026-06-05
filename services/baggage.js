import { NotFoundError } from "../errors/not-found.js";
import Baggage from "../models/baggage.js";
import { getOne as getTrip } from "./trip.js"; //alias- nickname

export const create = async (data, userId, tripId) => {     //(data => { name: "jacket" })
    /**
     * Before creating baggage, we need to first check
     * whether or not the trip exists
     */
    await getTrip(tripId, userId);  //checks trip exists or not
    const baggage = await Baggage.create({...data, user: userId, trip: tripId });  
    return baggage;
}

export const getAll = async (userId, tripId) => {
    const baggages = await Baggage.find({ user: userId, trip: tripId });
    return baggages;
}

export const getOne = async (_id, userId, tripId) => {
    const baggage = await Baggage.findOne({_id, user: userId, trip: tripId});
    if(!baggage) {
        throw new NotFoundError("Baggage not found!")
    }
    return baggage;
}

export const update = async (_id, data, userId, tripId) => {
    const baggage = await Baggage.findOneAndUpdate(
        { _id, user: userId, trip: tripId },
         data,
          { returnDocument: 'after' }
        );
    if(!baggage) throw new NotFoundError("Baggage not found!");
    return baggage;
}

export const destroy = async (_id, userId, tripId) => {
    const baggage = await Baggage.findOneAndDelete({ _id, user: userId, trip: tripId })
    if(!baggage) throw new NotFoundError("Baggage not found!");
    return baggage;
}