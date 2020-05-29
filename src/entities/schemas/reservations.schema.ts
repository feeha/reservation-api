import * as mongoose from 'mongoose';

const ChildernSchema = new mongoose.Schema({
    child: { type: String, required: false },
    count: { type: String, required: false }
});

export const ReservationSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    pickUpDate: { type: Date, required: true },
    pickUpTime: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    stops: [{ stopname: String }],
    dropOffLocation: { type: String, required: true },
    noOfPassengers: { type: Number, required: true },
    luggageCount: { type: Number, required: true },
    childern: [ ChildernSchema ],
    handicapAccess: { type: Boolean, required: true }
});