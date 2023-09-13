import { useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./firebase"


export function useCurrentUser() {

    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

        return () => unsubscribe()
    }, [])

    return currentUser;
}