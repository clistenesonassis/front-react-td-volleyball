import firebase from 'firebase';
import { User } from '../../domain/models/User';
import {
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../protocols/localstore/firebase/store';

export class UserRepository {
  constructor(private db: firebase.firestore.Firestore) {
    this.db = db;
  }

  public async create(user: User): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('users')
      .doc(user.email)
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

  public async get(email: string): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('users')
      .doc(email)
      .get()
      .then(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.notFound,
      }));
  }
}
