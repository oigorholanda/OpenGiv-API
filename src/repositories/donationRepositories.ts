import { db } from "../config/database.js";
import { donation } from "../protocols/donations.js";

async function create (donation: donation){
    const data = await db.query(`
    INSERT INTO donations (id, item_id, receiver_id, status)
    VALUES ($1, $2, $3, $4) RETURNING *`,
    [donation.id, donation.item_id, donation.receiver_id, donation.status]
    );

    return data.rows[0];
}

async function listAll () {
    const data = await db.query(`
    SELECT * FROM donations`
    );
    console.log(data);
    
    return data.rows
}

export default {create, listAll}