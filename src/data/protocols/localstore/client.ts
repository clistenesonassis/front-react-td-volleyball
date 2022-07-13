/* eslint-disable @typescript-eslint/no-explicit-any */
export type LocalstoreRequest = {
  key?: string;
  value?: string;
};

export interface LocalstoreClient<R = any> {
  request: (data: LocalstoreRequest) => Promise<LocalstoreResponse<R>>;
}

// eslint-disable-next-line no-shadow
export enum LocalstoreStatusCode {
  ok = 200,
  created = 201,
  accepted = 202,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  conflict = 409,
  unprocessableEntity = 422,
  serverError = 500,
  badGateway = 502,
}

export type LocalstoreResponse<T = any> = {
  statusCode: LocalstoreStatusCode;
  body: T;
};
