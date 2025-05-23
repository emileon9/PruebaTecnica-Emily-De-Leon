import express from "express";
import cors from "cors";
import { db } from "./DB/conection.js"
import router from "./Routes/Routes.js";


const port = 3000;
const app = express();
app.use(cors({}))
app.use(express.json());
app.use('/home', router)





app.get('/', (req, res) => {
    res.send("Hello World!");
}
)

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});