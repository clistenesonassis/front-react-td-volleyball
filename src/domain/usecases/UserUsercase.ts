import { FirebaseStoreResponse } from '../../data/protocols/localstore/firebase/store';
import { User } from '../models/User';

export interface UserUsercase {
  create: (data: User) => Promise<FirebaseStoreResponse>;
}
