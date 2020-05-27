import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reservation } from './../interfaces/reservations.interface';
import { ReservationDto } from './../dtos/reservations.dto';

@Injectable()
export class ReservationService {
    constructor(@Inject('RESERVATION_MODEL') private readonly reservationModel: Model<Reservation>) { }

    async create(reservationDto: ReservationDto): Promise<Reservation> {
        const createReservation = new this.reservationModel(reservationDto);
        return await createReservation.save();
    }
    async findAll(): Promise<Reservation[]> {
        return await this.reservationModel.find().exec();
    }
    async find(id: string): Promise<Reservation> {
        return await this.reservationModel.findById(id);
    }
}