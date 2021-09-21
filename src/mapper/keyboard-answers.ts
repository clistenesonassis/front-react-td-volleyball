const mapperKeys: { [key: string]: string } = {
  a: 'diagonalForte',
  s: 'diagonalColocado',
  d: 'corredorForte',
  f: 'corredorColocado',
  j: 'corredorColocado',
  k: 'corredorForte',
  l: 'diagonalColocado',
  ç: 'diagonalForte',
  ' ': 'explorandoBloqueio',
  miss: 'miss',
};

export function validResponse(key: string): string | undefined {
  return mapperKeys[key];
}
