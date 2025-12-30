import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection, Connection } from 'src/common/constants/connection';

const mockSongsService = {
  findAll(){
    return [{id:1,title:'Lasting Lover',artists:["sigla"]}];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongsService,
    // }
    {
      provide: 'CONNECTION',
      useValue: connection,
    }
  ]
})
export class SongsModule { }
