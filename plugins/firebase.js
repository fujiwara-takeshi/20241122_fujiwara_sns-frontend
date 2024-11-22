import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDgWIAZ-MusbE4PbBRDDfFHt16DEdv7SQA",
        authDomain: "sns-apprication.firebaseapp.com",
        projectId: "sns-apprication",
        storageBucket: "sns-apprication.firebasestorage.app",
        messagingSenderId: "1036936198006",
        appId: "1:1036936198006:web:1b01cf9228014be17eac57",
        measurementId: "G-2ET2ZS94SW"
    })
}

export default firebase;