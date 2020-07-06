import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createUser(
    name: string,
    gender: string,
    birthday: any,
    weight: any
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`users/${id}`).set({
      id,
      name,
      gender,
      birthday,
      weight,
  });
}
}
