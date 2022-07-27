import { Videos } from '../../models';

export type iReducer = Partial<Reducer>;

export interface Reducer {
  video: boolean;
  options: boolean;
  counterdown: boolean;
  currentVideo: number;
  score: number;
  end: boolean;
  config: Partial<ReducerConfig>;
  user: Partial<ReducerUser>;
  answers: ReducerAnswers[];
  playlist: Videos[];
}

export interface ReducerAnswers {
  videoId: string;
  response: string;
  duration: number;
}

interface ReducerConfig {
  hasRating: boolean;
  trainingVideos: number;
  validVideos: number;
}

interface ReducerUser {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
  state: string;
  hand: string;
  practiceTime: number;
  trainingAmount: number;
  trainingHours: number;
  competitiveProfile: string;
  competitiveLevel: string;
  olympicGames: boolean;
}
