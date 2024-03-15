import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createBook = async (req, res) => {
	try {
		let authorsData = req.body.authors;
		const bookData = req.body.book;

		//Validaciones
		if (!authorsData || !bookData) {
			res.status(400).json({
				msg: 'Authors data or book data is missing',
			})
		}
		if (!Array.isArray(authorsData)) {
			res.status(400).json({
				msg: 'Authors data must ba an array',
			})
		}

		authorsData = authorsData.map(author => {
			return new Author(author);
		})

		const newBook = await Book.create({
			genre: bookData.genre,
			isbn: bookData.isbn,
			title: bookData.title,
			year: bookData.year,
			authors: authorsData,
		});

		res.json(newBook);

	} catch (error) {
		res.status(500).json({
			msg: 'Error creating Book',
			error,
		})
	}
}

const getAllBooks = async (req, res) => {
	const books = await Book.find();

	res.json(books);
};

export { createBook, getAllBooks }