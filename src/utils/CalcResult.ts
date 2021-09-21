import { iResponse } from '../service';
import { iVideo } from './Videos';

export class CalcResult {
  private result: iResponse[];

  private videos: iVideo[];

  constructor(videos: iVideo[], result: iResponse[]) {
    this.result = result;
    this.videos = videos;
  }

  public accuracy(): string {
    let acertos = 0;

    this.result.forEach((e, index) => {
      const value = this.videos[Number(index)].reponse[e.response];
      if (value === 4) {
        acertos += 1;
      }
    });

    return ((acertos * 100) / this.result.length).toFixed(2);
  }

  public efficiency(): string {
    let acertos = 0;
    let erros = 0;

    this.result.forEach((e, index) => {
      const value = this.videos[Number(index)].reponse[e.response];
      if (value === 4) {
        acertos += 1;
      } else if (value === 0) {
        erros += 1;
      }
    });

    return (((acertos - erros) * 100) / this.result.length).toFixed(2);
  }

  public itd(): string {
    const ponto: { [key: number]: number } = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.result.forEach((e, index) => {
      const value = this.videos[Number(index)].reponse[e.response];
      ponto[value] += 1;
    });

    return (
      (1 * ponto[1] +
        2 * ponto[2] +
        3 * ponto[3] +
        4 * ponto[4] +
        5 * ponto[5]) /
      this.result.length
    ).toFixed(2);
  }
}
