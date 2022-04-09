import firebase from 'firebase';
import {
  Gender,
  Type,
  VideoUsercase,
} from '../../domain/usecases/VideoUsercase';
import {
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../protocols/localstore/firebase/store';
import { Video } from '../../domain/models';

export class VideoRepository implements VideoUsercase {
  constructor(private db: firebase.firestore.Firestore) {
    this.db = db;
  }

  public async get(type: Type, gender: Gender): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('videos')
      .doc(type)
      .collection(gender)
      .get()
      .then(res => ({
        body: res,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(err => ({
        body: err,
        statusCode: FirebaseStoreStatusCode.serverError,
      }));
  }

  public async set(
    type: Type,
    gender: Gender,
    video: Video,
  ): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('videos')
      .doc(type)
      .collection(gender)
      .doc()
      .set(video)
      .then(res => ({
        body: res,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(err => ({
        body: err,
        statusCode: FirebaseStoreStatusCode.serverError,
      }));
  }
}
