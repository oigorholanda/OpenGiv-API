import Joi from "joi";

export const donationSchema = Joi.object({
    name: Joi.string().required(),
    item_id: Joi.string().required(),
    receiver_id: Joi.string().required(),
    status: Joi.string().required(),
})