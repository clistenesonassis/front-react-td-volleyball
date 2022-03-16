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
    practiceTime: number;
    trainingAmount: number;
    trainingHours: number;
    competitiveProfile: string;
    competitiveLevel: string;
    olympicGames: boolean;
  };
}
