
import express from 'express';
import cors from 'cors';
import db from './database/conection.js';
import productsRoute from './v1/routes/productsRoute.js'
const app = express();
app.use(cors());
app.use(express.json())
db();
const PORT = process.env.PORT || 3000;
app.use("/api/v1/products", productsRoute)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

