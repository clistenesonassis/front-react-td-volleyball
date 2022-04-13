export interface Video {
  id: string;
  end: number;
  reponse: videoOptions;
}

export interface Videos {
  id: string;
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
