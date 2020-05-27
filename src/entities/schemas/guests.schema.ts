import * as mongoose from 'mongoose';

export const GuestsSchema = new mongoose.Schema ({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    phoneNumb: {type: Number, required: true },
    email: {type: String, required: true },
});