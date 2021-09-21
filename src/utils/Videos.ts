export interface iVideo {
  src: string;
  end: number;
  reponse: {
    [key: string]: number;
  };
}

export const Videos: iVideo[] = [
  {
    src: 'https://www.youtube.com/embed/pH3iqGFLYzU',
    end: 6,
    reponse: {
      diagonalForte: 0,
      diagonalColocado: 1,
      corredorForte: 2,
      corredorColocado: 3,
      explorandoBloqueio: 4,
    },
  },
  {
    src: 'https://www.youtube.com/embed/TmNelNHs6N4',
    end: 7,
    reponse: {
      diagonalForte: 2,
      diagonalColocado: 1,
      corredorForte: 0,
      corredorColocado: 3,
      explorandoBloqueio: 4,
    },
  },
  {
    src: 'https://www.youtube.com/embed/pUABTjkpX7I',
    end: 7,
    reponse: {
      diagonalForte: 1,
      diagonalColocado: 0,
      corredorForte: 3,
      corredorColocado: 2,
      explorandoBloqueio: 4,
    },
  },
];
