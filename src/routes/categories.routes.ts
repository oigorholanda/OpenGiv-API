import { Router } from "express";
import categoryController from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.post("/", categoryController.postMessage);
categoryRouter.get("/", categoryController.getMessages);
categoryRouter.put("/", categoryController.updateMessage);
categoryRouter.delete("/:id", categoryController.deleteMessage);

export default categoryRouter;
