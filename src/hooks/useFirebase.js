import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
                // console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const handleGithubLogin = () => {
    //   signInWithPopup(auth, githubProvider)
    //     .then((result) => {
    //       setUser(result.user);
    //       setError("");
    //     })
    //     .catch((error) => {
    //       setError(error.message);
    //     });
    // };

    // const handleUserRegister = (email, password) => {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message;
    //     });
    // };

    // const handleUserLogin = (email, password) => {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //     })
    //     .catch((error) => {
    //       const errorMessage = error.message;
    //     });
    // };

    return {
        handleGoogleLogin,
        user,
        handleLogout,
    };
};

export default useFirebase;