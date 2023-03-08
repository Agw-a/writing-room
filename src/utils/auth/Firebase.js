import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'



const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCIrzrFnQ9E1MFI5efvCn7XvMQ6mA_Vamc",
    authDomain: "writing-booth.firebaseapp.com",
    projectId: "writing-booth",
    storageBucket: "writing-booth.appspot.com",
    messagingSenderId: "214155822418",
    appId: "1:214155822418:web:4565323fe65cdad2fbe68b"
});


export const authConfig = getAuth(firebaseConfig)
export default firebaseConfig;