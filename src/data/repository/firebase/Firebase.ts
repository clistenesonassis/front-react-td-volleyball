import firebase from 'firebase';
import { firebaseConfig } from '../../../infra/config/firebase';

class FirebaseService {
  private db;

  constructor() {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
    });

    this.db = firebase.firestore();
  }

  public registerUser(): Promise<any> {
    return this.db.collection('users').add({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
  }
}

export default new FirebaseService();
