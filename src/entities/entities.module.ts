import { Module } from '@nestjs/common';

import { GuestsModule } from './modules/guests.module';
import { UsersModule } from './modules/users.module';
import { ReservationModule } from './modules/reservations.module';

@Module({
    imports: [
        GuestsModule,
        UsersModule,
        ReservationModule
    ]
})

export class EntitiesModule { }