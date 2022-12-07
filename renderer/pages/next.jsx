import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import ItemList from "../components/list/itemList";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase/firebase";

// import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
const auth = getAuth(app);
function Next() {
  // const { signedUser } = useContext(AuthContext);
  const [users, setUser] = useState(null);
  // console.log("this is ", signedUser);
  // const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...

    console.log("hello", user);
  } else {
    console.log("you are logged out");
    // No user is signed in.
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log("hello", user);
      setUser(user);
      // const uname = user.firstname;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("you are logged out");
      setUser(null);
    }
  });
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <h1></h1>
      <ItemList />
    </div>
  );
}

export default Next;
