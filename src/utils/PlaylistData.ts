import dispatch from '../data/store/reducer/dispatch';
import { Videos } from '../domain/models';
import {
  VideosExamFeminino,
  VideosExamMasculino,
  VideosTestFeminino,
  VideosTestMasculino,
} from './videos/Videos';

type Gender = 'feminino' | 'masculino';

class PlaylistData {
  private static instance: PlaylistData;

  private playlist: Videos[];

  constructor() {
    this.playlist = [];
  }

  public static getInstance(): PlaylistData {
    if (!PlaylistData.instance) {
      PlaylistData.instance = new PlaylistData();
    }

    return PlaylistData.instance;
  }

  public get() {
    return this.playlist;
  }

  /**
   * Pegar uma playlist.
   * @param quantidade Quantidade de videos que a playlist deve possuir.
   */
  public getPlaylist(amount: number, gender: Gender): Videos[] {
    const data =
      gender === 'feminino'
        ? new Array(...VideosExamFeminino)
        : new Array(...VideosExamMasculino);
    this.playlist = [];

    // se a quantidade de videos solicitado for maior que a quantidade total, então retorna um error.
    if (amount > data.length) return [];

    let count = amount;

    while (count) {
      const random = Math.floor(Math.random() * count);

      const video = data.splice(random, 1);
      this.playlist.push(...video);
      count -= 1;
    }

    dispatch.Playlist(new Array(...this.playlist));

    return this.playlist;
  }

  /**
   * Pegar uma playlist.
   * @param quantidade Quantidade de videos que a playlist deve possuir.
   */
  public getPlaylistTeste(amount: number, gender: Gender): Videos[] {
    const data =
      gender === 'feminino'
        ? new Array(...VideosTestFeminino)
        : new Array(...VideosTestMasculino);
    this.playlist = [];

    // se a quantidade de videos solicitado for maior que a quantidade total, então retorna um error.
    if (amount > data.length) return [];

    let count = amount;
    while (count) {
      const random = Math.floor(Math.random() * count);

      const video = data.splice(random, 1);
      this.playlist.push(...video);
      count -= 1;
    }

    dispatch.Playlist(new Array(...this.playlist));

    return this.playlist;
  }
}

export default PlaylistData.getInstance();
