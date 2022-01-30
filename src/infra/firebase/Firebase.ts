import firebase from 'firebase';
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
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(config);
    } else {
      this.app = firebase.app(); // if already initialized, use that one
    }

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
