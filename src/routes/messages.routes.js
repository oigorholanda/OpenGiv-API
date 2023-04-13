import { Router } from "express";
import messageController from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.post("/message", messageController.postMessage)
messageRouter.get("/message", messageController.getMessage)
messageRouter.put("/message", messageController.updateMessage)
messageRouter.delete("/message", messageController.deleteMessage)

export default messageRouter