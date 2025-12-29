import { Controller, Get, Put, Patch, Delete, Post, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService :SongsService){

    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }
    @Get(':id')
    findOne() {
        return 'fetch song on based on id';
    }

    @Post()
    create(@Body() createSongDTO:CreateSongDTO){
        return this.songsService.create(createSongDTO);
    }

    @Put(':id')
    update() {
        return 'update song based on id';
    }

    @Delete(':id')
    delete() {
        return 'delete based on id';
    }
}

