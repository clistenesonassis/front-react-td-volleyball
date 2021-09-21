export interface iResponse {
  video: number;
  response: string;
  timeToResponse: number;
}

export class Response {
  private static instance: Response;

  private response: iResponse[];

  private constructor() {
    this.response = [];
  }

  public static getInstance(): Response {
    if (!Response.instance) {
      Response.instance = new Response();
    }

    return Response.instance;
  }

  public votar(params: iResponse): boolean {
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

  public answers(): iResponse[] {
    return this.response;
  }
}

export default Response.getInstance();
