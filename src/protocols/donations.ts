import { date } from "joi"

export type donation = {
    id?: number,
    item_id: number,
    receiver_id: number,
    status: string,
    created_at: Date,
}