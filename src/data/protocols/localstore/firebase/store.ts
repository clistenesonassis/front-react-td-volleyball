/* eslint-disable @typescript-eslint/no-explicit-any */
export type FirebaseStoreRequest = {
  method: HttpMethod;
  body?: any;
};

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch';

export interface FirebaseStoreClient<R = any> {
  request: (data: FirebaseStoreRequest) => Promise<FirebaseStoreResponse<R>>;
}

// eslint-disable-next-line no-shadow
export enum FirebaseStoreStatusCode {
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

export type FirebaseStoreResponse<T = any> = {
  statusCode: FirebaseStoreStatusCode;
  body: T;
};
