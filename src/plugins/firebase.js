import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firestorePlugin } from 'vuefire'
import "firebase/auth";

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyAaRHT1xJAmWa7fPRQO6m2MjQQIPun__fI",
  authDomain: "my-blog-7c08b.firebaseapp.com",
  databaseURL: "https://my-blog-7c08b.firebaseio.com",
  projectId: "my-blog-7c08b",
  storageBucket: "my-blog-7c08b.appspot.com",
  messagingSenderId: "116315728260",
  appId: "1:116315728260:web:41b5688ebac7238a83d5d1",
  measurementId: "G-PCNK97N1JH"

});

export const db = firebaseApp.firestore();
export default firebase;