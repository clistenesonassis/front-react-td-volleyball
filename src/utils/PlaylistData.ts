import {
  iVideo,
  VideosExamFeminino,
  VideosExamMasculino,
  VideosTestFeminino,
  VideosTestMasculino,
} from './videos/Videos';

type Gender = 'feminino' | 'masculino';

class PlaylistData {
  private static instance: PlaylistData;

  private playlist: iVideo[];

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
  public getPlaylist(amount: number, gender: Gender): iVideo[] {
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

    return this.playlist;
  }

  /**
   * Pegar uma playlist.
   * @param quantidade Quantidade de videos que a playlist deve possuir.
   */
  public getPlaylistTeste(amount: number, gender: Gender): iVideo[] {
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

    return this.playlist;
  }
}

export default PlaylistData.getInstance();
