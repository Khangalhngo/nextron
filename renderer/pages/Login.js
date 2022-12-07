import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Router, useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase";
// import { AuthContext } from "../../context/AuthContext";
var localStorage = require("localStorage");
function Login() {
  // const { signedUser } = useContext(AuthContext);
  const [email, getEmail] = useState("");
  const [password, getPass] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/Reg");
  };
  const auth = getAuth(app);
  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((signedUser) => {
        // Signed in
        const user = signedUser.user;
        // console.log(user);
        window.localStorage.setItem("users", user.uid);
        const curuser = window.localStorage.getItem("users");
        console.log(curuser.email);
        alert("success login");
        // ...
        router.push("/next");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div className="body">
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/download.png" />
        </div>

        <div className={styles.username}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              getEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={password}
            onChange={(e) => {
              getPass(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.button1}>
          <button type="button" onClick={Login}>
            Login
          </button>
        </div>
        <div className={styles.button2}>
          <button type="button" onClick={handleClick}>
            REGISTER
          </button>
        </div>
        <div className={styles.button3}>
          <button type="button">Нууц үгээ мартсан</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
