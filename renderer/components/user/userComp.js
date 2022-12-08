import styles from "./userComp.module.css";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase/firebase";
import { useEffect } from "react";
import { db } from "../../../firebase/firebase";

import { async } from "@firebase/util";
import SignOut from "../SignOut";
var localStorage = require("localStorage");
const UserComp = () => {
  const [ner, setNer] = useState("");
  const [ovog, setOvog] = useState("");
  const [pnum, setPnum] = useState("");
  const [email, setHnum] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setNer(window.localStorage.getItem("ner"));
    setOvog(window.localStorage.getItem("ovog"));
    setPnum(window.localStorage.getItem("pnum"));
    setHnum(window.localStorage.getItem("email"));
    setGender(window.localStorage.getItem("gender"));
    setAddress(window.localStorage.getItem("Address"));
  });

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <div className={styles.userPic}>
            <img src="/images/userpro.png" />
          </div>

          <h1>{ner}</h1>
          <h1>Оруулсан зарын тоо</h1>
          <h2>100</h2>
        </div>
        <div className={styles.div2}>
          <table className={styles.tg}>
            <thead>
              <tr>
                <th className={styles.tg0pky}></th>
                <th className={styles.tg0pky}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tg0lax}>Овог</td>
                <td className={styles.tg0lax}>{ovog}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Нэр</td>
                <td className={styles.tg0lax}>{ner}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Утасны дугаар</td>
                <td className={styles.tg0lax}>{pnum}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>E-mail</td>
                <td className={styles.tg0lax}>{email}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Хүйс</td>
                <td className={styles.tg0lax}>{gender}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Хаяг</td>
                <td className={styles.tg0lax}>{address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.div3}>
          <button className={styles.userbutton}>Профайл зургаа солих</button>
          <button className={styles.userbutton}>Нууц үг солих</button>
          <button className={styles.userbutton}>
            Үндсэн мэдээллээ өөрчлөх хүсэлт илгээх
          </button>
          <SignOut />
        </div>
        <div className={styles.div4}> </div>
      </div>
    </div>
  );
};

export default UserComp;
