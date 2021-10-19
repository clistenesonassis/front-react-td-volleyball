import firebase from 'firebase';
import {
  FirebaseStoreRequest,
  FirebaseStoreResponse,
  FirebaseStoreStatusCode,
} from '../../data/protocols/localstore/firebase/store';
import { firebaseConfig } from '../config/firebase';

export class Firebase {
  public db;

  private app;

  constructor() {
    const config = {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
    };

    // Initialize Cloud Firestore through Firebase
    this.app = firebase.initializeApp(config);

    this.db = firebase.firestore(this.app);
  }

  // public request = async (
  //   data: FirebaseStoreRequest,
  // ): Promise<FirebaseStoreResponse> => {
  //   switch (data.method) {
  //     case 'post':
  //       return this.db
  //         .collection('user')
  //         .doc('test')
  //         .set(data.body)
  //         .then(e => ({ body: e, statusCode: FirebaseStoreStatusCode.ok }))
  //         .catch(e => ({
  //           body: e,
  //           statusCode: FirebaseStoreStatusCode.serverError,
  //         }));
  //     default:
  //       return {
  //         body: 'Serviço inválido.',
  //         statusCode: FirebaseStoreStatusCode.notFound,
  //       };
  //   }
  // };
}
