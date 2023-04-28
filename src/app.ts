import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import categoryRouter from "./routes/categories.routes.js";
import donationsRouter from "./routes/donations.routes.js";
dotenv.config();

//servidor
const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.use('/health', (_req, res) => { res.send("OK!") })
app.use('/message', categoryRouter);
app.use(donationsRouter)

// porta e listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));