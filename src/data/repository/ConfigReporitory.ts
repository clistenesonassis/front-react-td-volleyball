import firebase from 'firebase';
import { Config } from '../../domain/models';
import { ConfigUsercase } from '../../domain/usecases/ConfigUsercase';
import {
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../protocols/localstore/firebase/store';

export class ConfigRepository implements ConfigUsercase {
  constructor(private db: firebase.firestore.Firestore) {
    this.db = db;
  }

  public async get(): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('config')
      .doc('app')
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

  public async set(config: Config): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('config')
      .doc('app')
      .set(config)
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
