import { Router } from "express";
import messageController from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.post("/", messageController.postMessage);
messageRouter.get("/", messageController.getMessages);
messageRouter.put("/", messageController.updateMessage);
messageRouter.delete("/", messageController.deleteMessage);

export default messageRouter;
