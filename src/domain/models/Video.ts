export interface Video {
  src: string;
  end: number;
  reponse: videoOptions;
}

export interface Videos {
  src: string;
  end: number;
  reponse: {
    [key: string]: number;
  };
}

interface videoOptions {
  diagonalForte: number;
  diagonalColocado: number;
  corredorForte: number;
  corredorColocado: number;
  explorandoBloqueio: number;
}
