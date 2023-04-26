import prisma from "../config/database.js";
import { donation } from "../protocols/donations.js";

async function create (donation: donation){
    return []

    /*
    * const data = prisma.donations.upsert({
        create:{
            donation.item_id
        },
        update:{},
        where:{}}


    // INSERT INTO donations (id, item_id, receiver_id, status)
    // VALUES ($1, $2, $3, $4) RETURNING *,
    // [donation.id, donation.item_id, donation.receiver_id, donation.status]
    );

    return data;
 */
}

async function listAll () {
    return prisma.donations.findMany()
}

export default {create, listAll}