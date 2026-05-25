// Dir. for Things to be taken in the trip and check/verify part
import { Schema, model } from "mongoose";
// only imports those modules from mongoose

const BaggageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const Baggage = model("Baggage", BaggageSchema);

export default Baggage;


