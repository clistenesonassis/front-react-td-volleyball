import { VideoRepository } from '../../../data/repository/VideoRepository';
import { VideoUsercase } from '../../../domain/usecases/VideoUsercase';
import { Firebase } from '../../../infra/firebase/Firebase';

export const makeRemoteVideo = (): VideoUsercase =>
  new VideoRepository(new Firebase().db);
