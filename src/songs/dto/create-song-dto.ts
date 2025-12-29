import { IsArray, IsDateString, IsEmpty, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly artists: string[]

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}