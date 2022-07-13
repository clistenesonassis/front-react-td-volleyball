import firebase from 'firebase';
import { Answer } from '../../domain/models';
import { AnswerUsercase } from '../../domain/usecases/AnswerUsercase';
import {
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../protocols/localstore/firebase/store';

export class AnswerRepository implements AnswerUsercase {
  constructor(private db: firebase.firestore.Firestore) {
    this.db = db;
  }

  public async create(answer: Answer): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('answers')
      .doc()
      .set(answer)
      .then(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.serverError,
      }));
  }

  public async getAll(): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('answers')
      .get()
      .then(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.ok,
      }))
      .catch(e => ({
        body: e,
        statusCode: FirebaseStoreStatusCode.serverError,
      }));
  }

  public async getBy(email: string): Promise<FirebaseStoreResponse> {
    return this.db
      .collection('answers')
      .where('owner', '==', email)
      .get()
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
