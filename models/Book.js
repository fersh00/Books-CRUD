import mongoose from "mongoose";
import { authorSchema } from "./Author";

const bookSchema = new mongoose.Schema({
	title: String,
	year: Number,
	genre: String,
	isbn: String,
	authors: [authorSchema],
});


export default mongoose.model('Book', bookSchema);