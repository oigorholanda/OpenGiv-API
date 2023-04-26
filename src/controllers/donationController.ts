import { Request, Response } from "express";
import { donation } from "../protocols/donations.js";
import donationRepositories from "../repositories/donationRepositories.js";

function newDonation(req: Request, res: Response) {
     const donation = req.body as donation
     try {
          const data = donationRepositories.create(donation)
          return res.status(201).send(`Doação registrada ${data}`)
     } catch (error) {
          return res.status(500).send(`Erro no bando de dados ${error}`)
     }

}

function listAll(req: Request, res: Response) {
     const donation = req.body as donation
     try {
          const data = donationRepositories.create(donation)
          return res.status(201).send(`Doação registrada ${data}`)
     } catch (error) {
          return res.status(500).send(`Erro no bando de dados ${error}`)
     }

}


export default { newDonation, listAll }