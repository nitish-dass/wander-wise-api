import { Schema, model } from "mongoose";

const activityScheme = new Schema({
    name: {
        type: String,
        reqired: true,
    },
    time: { 
        type: String,
        required: true,
    },
    notes: [String],
});

const itinerarySchema = new Schema({
    trip: { 
        type: Schema.Types.ObjectId,
        ref: "Trip",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    activities: [activityScheme],
    date: {
        type: Date,
        required: true,
    },
},
{
    timestamps: true,
}
);

const Itinerary = model("Itinerary", itinerarySchema);
export default Itinerary;