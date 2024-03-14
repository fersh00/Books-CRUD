import express from 'express'

const api = express();

api.listen(8004, () = > {
    console.log("Puerto 8004");
});