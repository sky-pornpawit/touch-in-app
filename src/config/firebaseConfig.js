import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/messaging'

const config = {
  apiKey: 'AIzaSyBBajrAIcxdN8Z0pT3U6Jl-kJBI4NNGE7c',
  authDomain: 'touch-in-app.firebaseapp.com',
  databaseURL: 'https://touch-in-app.firebaseio.com',
  projectId: 'touch-in-app',
  storageBucket: 'touch-in-app.appspot.com',
  messagingSenderId: '910531456139',
  appId: '1:910531456139:web:4114f0942937715c4e788e',
  measurementId: 'G-TXT2Z9G76G',
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const analytics = firebase.analytics()
export const realtime = firebase.database()
export const message = firebase.messaging()
