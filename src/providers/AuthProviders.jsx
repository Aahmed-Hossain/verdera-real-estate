/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";
import { axiosSecure } from "../hooks/useAxiosSecure";
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signin with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign in with github
  // const githubLogin = () => {
  //     setLoading(true)
  //     return signInWithPopup(auth, githubProvider)
  // }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // update user profile
  const handleUpdateProfile = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };
  // set obserber
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ user, currentUser });
      const userEmail = currentUser?.email || user?.email;
      const lodggedUser = { email: userEmail };
      setUser(currentUser);
      if (currentUser) {
        axiosSecure.post("/jwt", lodggedUser).then((res) => {
          console.log("token response", res.data);
        });
      } else {
        axiosSecure.post(`/logout`, lodggedUser).then((res) => {
          setUser(null);
          console.log(res.data);
        });
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user ]);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    googleLogin,
    handleUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
