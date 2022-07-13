import { UserUsercase } from '../../../domain/usecases/UserUsercase';

import { UserRepository } from '../../../data/repository/UserRepository';

import { Firebase } from '../../../infra/firebase/Firebase';
import { AnswerUsercase } from '../../../domain/usecases/AnswerUsercase';
import { AnswerRepository } from '../../../data/repository/AnswerRepository';

export const makeRemoteUser = (): UserUsercase =>
  new UserRepository(new Firebase().db);

export const makeRemoteAnswer = (): AnswerUsercase =>
  new AnswerRepository(new Firebase().db);
