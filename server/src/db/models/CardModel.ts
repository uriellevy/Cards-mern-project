import mongoose from "mongoose";
import cardSchema from "../schemas/Card-schema";

const Card = mongoose.model("Card", cardSchema);
export default Card;