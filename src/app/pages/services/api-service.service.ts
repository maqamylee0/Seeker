import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public fireStore: AngularFirestore, public fireStorage: AngularFireStorage) { }


  _get(collection, where = null) {
    if ( where !== null ) {
      return this.fireStore.collection(collection, ref => ref.where(where.key, '==', where.value).orderBy('timeStamp', 'desc')).get();
    } else {
      return this.fireStore.collection(collection, ref => ref.orderBy('timeStamp', 'desc')).get();
    }
  }
   // method  to get a single collection from database 
  _getOne(collection, uid) {
     return this.fireStore.collection(collection).doc(uid).get();
  }


    // method to add data to our cloud database

  _add(collection, data, callback) {
    data.timeStamp = + new Date();
    this.fireStore.collection(collection).add(data)
    .then( (ref) => {
      const id = ref.id;
      data.id = id;
      this._edit(collection, id, {id});
      callback({flag: true, data});
   }).catch( error => callback({flag: false, error}));
  }

  // method to add a user to our database

  _addUser(collection, data, callback) {
    data.timeStamp = + new Date();
    this.fireStore.collection(collection).doc(data.uid).set(data)
    .then( (ref) => {
      callback({flag: true, data});
   }).catch( error => callback({flag: false, error}));
  }

  //addJob
  _addJob(collection, data, callback) {
    data.timeStamp = + new Date();
    this.fireStore.collection(collection).doc(data.uid).set(data)
    .then( (ref) => {
      callback({flag: true, data});
   }).catch( error => callback({flag: false, error}));
  }

  //add Profile
  _addProfile(collection, data, callback) {
    data.timeStamp = + new Date();
    this.fireStore.collection(collection).doc(data.uid).set(data)
    .then( (ref) => {
      callback({flag: true, data});
   }).catch( error => callback({flag: false, error}));
  }

  // method to edit data in our database

  _edit(collection, uid, data) {
    this.fireStore.collection(collection)
    .doc(uid)
    .set(data)
    .then( data => { data })
    .catch( error =>  {error});
  }

   // method to delete data from our database
  _delete( collection, uid) {
    this.fireStore.collection(collection)
    .doc(uid)
    .delete()
    .then( result => {result})
    .catch(error => {error});
  }

  // _addjob(collection){
  // this.fireStore.collection(collection).snapshotChanges().pipe(
  //   map(snapshots => {
  //      return snapshots.map(s => {
  //       // if you log s here, you can look through the object
  //       // payload.doc.data() should be the same as what valueChanges returns
  //       // payload.doc.id will be the id
  //       // merge them into a new object
  //       return {...s.payload.doc.data(), id: s.payload.doc.id)}
  //    })
  //   }
  // }
_addjob(collection,data,callback){
  this.fireStore.collection(collection).add(data)
.then( callback
//     console.log("Document written with ID: ", docRedocReff.id);
)
.catch(error => callback)
}
   //method to upload a file to our online bucket
   
  _uploadImageFile( file, folder, callback) {
      let fileRef = this.fireStorage.storage.ref(`${folder}/${+new Date()}.jpg`);
      fileRef.put(file).then((snapshot)  => {
        snapshot.ref.getDownloadURL().then( url => {
          callback({flag: true, url});
        }).catch( error => {
          callback({ flag: false, error});
        });
      }).catch( error => {
        callback({ flag: false, error});
      });
  }

}
