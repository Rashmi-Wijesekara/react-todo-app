import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCLVTDumIwQDlUGWzw-KiVIfKtfRsBx72A",
	authDomain: "todo-app-befc5.firebaseapp.com",
	projectId: "todo-app-befc5",
	storageBucket: "todo-app-befc5.appspot.com",
	messagingSenderId: "1072453058890",
	appId: "1:1072453058890:web:8227113ca83e150a07c1b3",
	measurementId: "G-K6EZC5N67N"
})

const db = firebaseApp.firestore()
export default db