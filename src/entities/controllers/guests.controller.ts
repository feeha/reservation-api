import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GuestsService } from './../services/guests.service';
import { GuestsDto } from './../dtos/guests.dto';
import { Guests } from './../interfaces/guests.interface';

@Controller('guests')
export class GuestsController {
    constructor(private readonly guestsService: GuestsService) { }

    @Post('/create')
    async create(@Body() guestsdto: GuestsDto) {
        return this.guestsService.create(guestsdto);
    }
    @Get('/list')
    async findAll(): Promise<Guests[]> {
        return this.guestsService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.guestsService.find(id);
    }
}