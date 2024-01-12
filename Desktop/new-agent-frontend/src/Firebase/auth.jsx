
import firebaseApp from "./initialization";
import {
    getAuth,
} from "firebase/auth";


const auth = getAuth(firebaseApp);

export default auth