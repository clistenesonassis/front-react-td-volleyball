/* eslint-disable camelcase */
export interface Answer {
  owner: string;
  answer: VideoAnswer[];
}

export interface VideoAnswer {
  video: number;
  response: string;
  timeToResponse: number;
}
