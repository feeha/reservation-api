import { Document } from 'mongoose';

export interface Reservation extends Document {
    
    readonly serviceType: string;
    readonly pickUpDate: Date;
    readonly pickUpTime: string;
    readonly pickUpLocation: string;
    readonly stops:
    [
        { readonly stopname: string }
    ];
    readonly dropOffLocation: string;
    readonly noOfPassengers: number;
    readonly luggageCount: number;
    readonly childern:
    [
        { child: String },
        { noOfChild: Number }
    ];
    readonly handicapAccess: boolean;
}