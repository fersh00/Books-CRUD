import express from "express"
import { connect } from "./config.js"

connect();

const api = express();
//api.use(express.json());

api.listen(8004, () => {
	console.log("listen en Puerto: 8004")
});