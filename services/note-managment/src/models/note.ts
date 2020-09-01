import { Document, Model, model, Schema } from "mongoose";

export interface INote extends Document {
    author: string
    date: Date
    text: string
}

const noteSchema: Schema = new Schema({
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: true,
    },
})

const Note: Model<INote> = model("Note", noteSchema);

export default Note;