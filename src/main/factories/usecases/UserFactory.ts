import { UserUsercase } from '../../../domain/usecases/UserUsercase';

import { UserRepository } from '../../../data/repository/UserRepository';

import { Firebase } from '../../../infra/firebase/Firebase';

export const makeRemoteUser = (): UserUsercase =>
  new UserRepository(new Firebase().db);
