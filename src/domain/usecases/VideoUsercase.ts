import { FirebaseStoreResponse } from '../../data/protocols/localstore/firebase/store';
import { Video } from '../models';

export interface VideoUsercase {
  get: (type: Type, gender: Gender) => Promise<FirebaseStoreResponse>;
  set: (
    type: Type,
    gender: Gender,
    video: Video,
  ) => Promise<FirebaseStoreResponse>;
}

export type Type = 'training' | 'valid';
export type Gender = 'feminino' | 'masculino';
