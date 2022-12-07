import styles from "./userComp.module.css";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase/firebase";
import { useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import SignOut from "../SignOut";
var localStorage = require("localStorage");
const UserComp = () => {
  const [object, setObject] = useState();
  const [curuserstateuid, setCurUserState] = useState("hooson");

  useEffect(() => {
    const curuseruid = window.localStorage.getItem("users");
    setCurUserState(curuseruid);
  });
  // console.log(curuserstateuid);
  // const signedUsersDocRef = doc(db, "users", curuserstateuid);
  // console.log(signedUsersDocRef);

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = getDoc(signedUsersDocRef);
  // console.log("Document data:", docSnap.data());

  // getDoc(doc(db, "users", curuserstateuid)).then((docSnap) => {
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  //   // setObject(docSnap.data());
  // });
  const [signedUserData, setSignedUserData] = useState({});
  const fetchSignedUserDoc = async () => {
    const docRef = doc(db, "users", curuserstateuid);

    window.localStorage.setItem("docRef", JSON.stringify(docRef));
    const docReff = window.localStorage.getItem("docRef");
    try {
      const docSnap = await getDoc(docReff);
      console.log(docSnap);
      setSignedUserData(docSnap);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(
  //   "--------------------------------------------------------------------------------------------",
  //   signedUserData
  // );
  useEffect(() => {
    fetchSignedUserDoc();
  }, []);
  // if (docSnap.exists()) {

  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <div className={styles.userPic}>
            <img src="/images/userpro.png" />
          </div>

          <h1>{signedUserData.firstname}</h1>
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
                <td className={styles.tg0lax}>{signedUserData.lastname}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Нэр</td>
                <td className={styles.tg0lax}>{signedUserData.firstname}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Утасны дугаар</td>
                <td className={styles.tg0lax}>{signedUserData.phone_number}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>E-mail</td>
                <td className={styles.tg0lax}>{signedUserData.email}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Хүйс</td>
                <td className={styles.tg0lax}>{signedUserData.gender}</td>
              </tr>
              <tr>
                <td className={styles.tg0lax}>Хаяг</td>
                <td className={styles.tg0lax}>{signedUserData.Address}</td>
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
