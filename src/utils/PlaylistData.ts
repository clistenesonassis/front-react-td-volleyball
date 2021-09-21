import { Videos, iVideo } from './Videos';

class PlaylistData {
  private static instance: PlaylistData;

  private data: iVideo[];

  private playlist: iVideo[];

  constructor() {
    this.data = Videos;
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
  public getPlaylist(amount: number): iVideo[] {
    // se a quantidade de videos solicitado for maior que a quantidade total, então retorna um error.
    if (amount > this.data.length) return [];

    let count = amount;
    const dataVideo = this.data;
    while (count) {
      const random = Math.floor(Math.random() * count);

      const video = dataVideo.splice(random, 1);
      this.playlist.push(...video);
      count -= 1;
    }

    console.log('return aqui: ', this.playlist);

    return this.playlist;
  }
}

export default PlaylistData.getInstance();
