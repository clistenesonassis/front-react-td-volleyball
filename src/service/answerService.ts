import { VideoAnswer } from '../domain/models';

class ResponseImpl {
  private static instance: ResponseImpl;

  private response: VideoAnswer[];

  private constructor() {
    this.response = [];
  }

  public static getInstance(): ResponseImpl {
    if (!ResponseImpl.instance) {
      ResponseImpl.instance = new ResponseImpl();
    }

    return ResponseImpl.instance;
  }

  public clearVotes(): void {
    this.response = [];
  }

  public votar(params: VideoAnswer): boolean {
    let already = false;
    this.response.forEach(item => {
      if (item.video === params.video) already = true;
    });

    if (already) {
      console.log(
        'não foi possível realizar a votação, pois o mesmo já existe.',
      );
      return false;
    }

    this.response.push(params);
    console.log('respostas: ', this.answers());
    return true;
  }

  public answers(): VideoAnswer[] {
    return this.response;
  }
}

export default ResponseImpl.getInstance();
