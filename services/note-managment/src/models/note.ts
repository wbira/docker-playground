import { Document, Model, model, Schema } from "mongoose";

export interface INote extends Document {
    author: string
    date: Date
    noteId: String
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
    noteId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
})

const Note: Model<INote> = model("Note", noteSchema);

export default Note;