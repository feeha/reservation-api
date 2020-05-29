import { Controller, Post, Get, Body, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { ReservationService } from './../services/reservations.service';
import { Reservation } from './../interfaces/reservations.interface';
import { ReservationDto } from './../dtos/reservations.dto';

@Controller('reservation')
export class ReservationController {
    constructor(private readonly reservationService: ReservationService) { }


    @Post('/create')
    async create(@Body() reservationdto: ReservationDto) {
        return this.reservationService.create(reservationdto);
    }

    @Get('/list')
    async findAll(): Promise<Reservation[]> {
        return this.reservationService.findAll();
    }

    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.reservationService.find(id);
    }

    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() reservationDto: ReservationDto) {
        return await this.reservationService.update(id, reservationDto);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return await this.reservationService.delete(id);
    }
}