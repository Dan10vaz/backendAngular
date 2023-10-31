import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import db from './database/conection.js';
import productsRoute from './v1/routes/productsRoute.js'
import usersRoute from './v1/routes/usersRoute.js'
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json())
db();
const PORT = process.env.PORT || 3000;
app.use("/api/v1/products", productsRoute)
app.use("/api/v1/users", usersRoute);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

