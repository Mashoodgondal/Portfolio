import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        name: String,
        email: String,
        message: String,
    }, {
    timestamps: true,
}
)
const visiter = mongoose.models.contect || mongoose.model("contect", contactSchema)
export default visiter;