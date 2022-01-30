export interface iReducer {
  video?: boolean;
  options?: boolean;
  counterdown?: boolean;
  currentVideo?: number;
  score?: number;
  end?: boolean;
  user?: {
    name: string;
    birthDate: string;
    email: string;
    phone: string;
    gender: string;
    city: string;
    state: string;
    hand: string;
    practiceTime: string;
    trainingAmount: string;
    trainingHours: string;
    competitiveProfile: string;
    competitiveLevel: string;
    olympicGames: string;
  };
}
