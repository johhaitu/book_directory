import express from "express";
//import cors from "cors";
import { booksrouter } from "./books.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(booksrouter);

app.listen(PORT, function () {
    console.log("Server listening on port", PORT);
})