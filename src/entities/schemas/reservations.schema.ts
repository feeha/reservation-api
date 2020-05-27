import * as mongoose from 'mongoose';

export const ReservationSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    pickUpDate: { type: Date, required: true },
    pickUpTime: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    stops:
        [
            { stopnam: String }
        ],
    dropOffLocation: { type: String, required: true },
    noOfPassengers: { type: Number, required: true },
    luggageCount: { type: Number, required: true },
    childern:
        [
            { child: String },
            { noOfChild: Number }
        ],
    handicapAccess: { type: Boolean, required: true }
});