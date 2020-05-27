import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsersService } from './../services/users.service';
import { UsersDto } from './../dtos/users.dto';
import { Users } from './../interfaces/users.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @Post('/create')
    async create(@Body() usersdto: UsersDto) {
        return this.UsersService.create(usersdto);
    }
    @Get('/list')
    async findAll(): Promise<Users[]> {
        return this.UsersService.findAll();
    }
    @Get('/:id')
    async find(@Param('id') id: string) {
        return this.UsersService.find(id);
    }
}