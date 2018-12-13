import firebase from 'firebase/app';
import 'firebase/database';
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };
const fire = firebase.initializeApp(config)
export { fire }