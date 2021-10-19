import firebase from 'firebase';
import { User } from '../../domain/models/User';
import {
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../protocols/localstore/firebase/store';

export class UserRepository {
  private db: firebase.firestore.Firestore;

  constructor(db: any) {
    this.db = db;
  }

  public async create(user: User): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('user')
      .doc('test')
      .set(user)
      .then(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.serverError,
      }));
  }
}
