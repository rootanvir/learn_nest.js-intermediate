import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: any[] = [];

  create(song: any) {
    this.songs.push(song);
    return song; // or return this.songs if you want the full list
  }

  findAll() {
    throw new Error('Error in db will fetching record');

    return this.songs;
  }
}