import { iVideo } from './Videos';

export const VideosTestFeminino: iVideo[] = [
  {
    src: 'https://www.youtube.com/watch?v=3oKtzpVfyQU&list=PLMWefn24zThzw5POL6S2_dwP9WHn00dt3&index=1',
    end: 12,
    reponse: {
      diagonalForte: 0,
      diagonalColocado: 1,
      corredorForte: 2,
      corredorColocado: 3,
      explorandoBloqueio: 4,
    },
  },
  {
    src: 'https://www.youtube.com/watch?v=MiOpRVc2nf4&list=PLMWefn24zThzw5POL6S2_dwP9WHn00dt3&index=2',
    end: 12,
    reponse: {
      diagonalForte: 2,
      diagonalColocado: 1,
      corredorForte: 0,
      corredorColocado: 3,
      explorandoBloqueio: 4,
    },
  },
  {
    src: 'https://www.youtube.com/watch?v=zNBrlK6-jTM&list=PLMWefn24zThzw5POL6S2_dwP9WHn00dt3&index=3',
    end: 14,
    reponse: {
      diagonalForte: 1,
      diagonalColocado: 0,
      corredorForte: 3,
      corredorColocado: 2,
      explorandoBloqueio: 4,
    },
  },
];
