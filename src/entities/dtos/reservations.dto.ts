import { IsEmail, IsNumber, IsString, Min, Max, IsBoolean, Length } from 'class-validator';

class ChildernDto {
   @IsString() readonly child: String;
   @IsNumber() @Min(1) @Max(10) readonly count: Number;
}

export class ReservationDto {

   @IsString() @Length(5,200) readonly serviceType: string;
   @IsString() readonly pickUpDate: Date;
    @IsString() readonly pickUpTime: string;
    @IsString() readonly pickUpLocation: string;
     readonly stops:
    [
        { readonly stopname: string }
    ];
    @IsString() readonly dropOffLocation: string;
    @IsNumber() @Min(1) @Max(10) readonly noOfPassengers: number;
    @IsNumber() @Min(1) @Max(10) readonly luggageCount: number;
    readonly childern: [ ChildernDto];
    @IsBoolean() readonly handicapAccess: boolean;
}
