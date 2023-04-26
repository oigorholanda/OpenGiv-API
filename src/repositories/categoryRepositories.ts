import prisma from "../config/database.js";
import { category } from "../protocols/category.js";

async function upsert ( category: category ){
    return []

    //* return prisma.categories.upsert({
    //     create:{},
    //     update:{},
    //     where:{}, 
    // })


    // const data = await db.query(`
    // INSERT INTO messages (name, message)
    // VALUES ($1, $2) RETURNING *`,
    // [message.name, message.text]
    // );

    // return data.rows[0];
}

async function listAll () {
    return prisma.categories.findMany()
    // const data = await db.query(`
    // SELECT * FROM messages`
    // );
    // console.log(data.rows);
    
    // return data
}

export default { upsert, listAll}