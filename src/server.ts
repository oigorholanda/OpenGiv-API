import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./routes/messages.routes.js";
dotenv.config();

//servidor
const server = express();
server.use(cors());
server.use(express.json());

// rotas
server.use('/message', messageRouter);

// porta e listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`));