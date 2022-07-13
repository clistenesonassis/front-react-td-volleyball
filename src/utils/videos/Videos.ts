export * from './videos-test-masculino';
export * from './videos-exam-masculino';
export * from './videos-test-feminino';
export * from './videos-exam-feminino';

export interface iVideo {
  src: string;
  end: number;
  reponse: {
    [key: string]: number;
  };
}
