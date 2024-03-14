import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {

	mongoose.connect(process.env.DB_URI);

	const connection = mongoose.connection;

	connection.once('open', () => {
		console.log('Conexion establecida con db');
	});
	connection.once('error', () => {
		console.error('Error de conexion con db');
	});

};

export { connect };