import { toast } from "react-toastify";
import firebase from "../config/firebase";
import { setuserProfileData } from "./firestoreService";

export function signInWithEmail(creds) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

export function signOutFirebase() {
  return firebase.auth().signOut();
}

export async function registerInFirebase(creds) {
  //verifyAuth will be called
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    await result.user.updateProfile({
      displayName: creds.displayName,
    });
    return await setuserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}

export async function socialLogin(selectedProvider) {
  let provider;
  if (selectedProvider === "facebook") {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if (selectedProvider === "google") {
    provider = new firebase.auth.GoogleAuthProvider();
  }
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    if (result.additionalUserInfo.isNewUser) {
      await setuserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = firebase.auth().currentUser;
  return user.updatePassword(creds.newPassword1);
}