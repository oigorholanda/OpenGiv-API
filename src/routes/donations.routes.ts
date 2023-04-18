import { Router } from "express";
import donationController from "../controllers/donationController.js";

const donationsRouter = Router();

donationsRouter.post('/donation', donationController.newDonation)

export default donationsRouter