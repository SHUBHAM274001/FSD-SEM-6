import express from "express";
import { deleteUser, changePass, findUser, createUser } from "./controller/curd.js";
import {apiError} from "./middleware/apiError.js";

const app = express();
const PORT = 8080;

app.use(express.json());


app.post("/register", createUser);
app.get("/users/:email", findUser);
app.put("/users/:email", changePass);
app.delete("/users/:email", deleteUser);

app.use(apiError)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});