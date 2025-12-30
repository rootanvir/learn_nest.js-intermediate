import { Controller, Get, Put, Patch, Delete, Post, Body, HttpException, HttpStatus, Param, ParseArrayPipe, ParseIntPipe, Inject } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import type { Connection } from 'src/common/constants/connection';
@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection : Connection,
    ) {
        console.log(`THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        }
        catch (e) {
            throw new HttpException('server error !', HttpStatus.NOT_FOUND, {
                cause: e,
            },)
        }
    }
    @Get(':id')
    findOne(
        @Param('id',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}), )
        id: Number,
    ) {
        return `fetch song on the based on id ${typeof id}`;

    }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
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

