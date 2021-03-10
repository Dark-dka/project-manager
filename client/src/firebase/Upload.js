import firebase from "firebase";
import { FirebaseConfig } from "./FirebaseConfig";

const storage = firebase.storage();
const storageRef = storage.ref();

export const UploadFile = (file, id) =>
  new Promise((resolve, reject) => {
    const fileRef = storageRef.child(id + '/' + file.name);
    fileRef
      .put(file)
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const CreateDownloadUrl = (id, name) =>
  new Promise((resolve, reject) => {
    var fileRef = storageRef.child(id + '/' + name);

    // Get the download URL
    fileRef
      .getDownloadURL()
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      });
  });
