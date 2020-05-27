import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Guests } from './../interfaces/guests.interface';
import { GuestsDto } from './../dtos/guests.dto';

@Injectable()
export class GuestsService {
    constructor(@Inject('GUESTS_MODEL') private readonly guestsModel: Model<Guests>) { }

    async create(guestsDto: GuestsDto): Promise<Guests> {
        const createGuests = new this.guestsModel(guestsDto);
        return await createGuests.save();
    }
    async findAll(): Promise<Guests[]> {
        return await this.guestsModel.find().exec();
    }
    async find(id: string): Promise<Guests> {
        return await this.guestsModel.findById(id);
    }
}