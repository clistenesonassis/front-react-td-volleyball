import { FirebaseStoreResponse } from '../../data/protocols/localstore/firebase/store';
import { Answer } from '../models';

export interface AnswerUsercase {
  create: (data: Answer) => Promise<FirebaseStoreResponse>;
  getAll: () => Promise<FirebaseStoreResponse<Answer[]>>;
  getBy: (email: string) => Promise<FirebaseStoreResponse<Answer>>;
}
