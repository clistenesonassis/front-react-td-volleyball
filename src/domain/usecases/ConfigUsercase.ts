import { FirebaseStoreResponse } from '../../data/protocols/localstore/firebase/store';
import { Config } from '../models';

export interface ConfigUsercase {
  get: () => Promise<FirebaseStoreResponse>;
  set: (config: Config) => Promise<FirebaseStoreResponse>;
}
