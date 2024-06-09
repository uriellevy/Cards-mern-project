import { Schema } from "mongoose";
import { IImage } from "../../interfaces/User";
const imageSchema = new Schema<IImage>({
    url: { type: String, required: true, minlength: 2, maxlength: 200 },
    alt: { type: String, required: true, minlength: 2, maxlength: 20 },
}, { _id: false });
export default imageSchema;