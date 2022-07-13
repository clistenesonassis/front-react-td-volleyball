import { ConfigRepository } from '../../../data/repository/ConfigReporitory';
import { ConfigUsercase } from '../../../domain/usecases/ConfigUsercase';
import { Firebase } from '../../../infra/firebase/Firebase';

export const makeRemoteConfig = (): ConfigUsercase =>
  new ConfigRepository(new Firebase().db);
