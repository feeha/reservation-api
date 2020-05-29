import { Controller, Post, Get, Body, Param, Patch, Delete, } from '@nestjs/common';
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
    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() usersDto: UsersDto) {
        return this.UsersService.update(id, usersDto);
    }
    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return await this.UsersService.delete(id);
    }
}