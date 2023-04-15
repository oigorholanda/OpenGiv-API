import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./routes/messages.routes.js";
dotenv.config();

//servidor
const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.use('/message', messageRouter);

// porta e listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));