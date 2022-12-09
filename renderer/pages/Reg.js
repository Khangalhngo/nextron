import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Router, useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import { async } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase";
// import { collection, doc, addDoc } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
// import firebase from "../../firebase/firebase";
// import firebase from "firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
function Reg() {
  const [ner, setNer] = useState("");
  const [ovog, setOvog] = useState("");
  const [password, setPass] = useState("");
  const [pnum, setPnum] = useState("");
  const [email, setHnum] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/Login");
  };
  const auth = getAuth(app);
  const handleClick1 = async (e) => {
    e.preventDefault();
    if (validation() == true) {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).then(async (UserImpl) => {
          const docRef = doc(db, "users", UserImpl.user.uid);
          await setDoc(docRef, {
            firstname: ner,
            lastname: ovog,
            phone_number: pnum,
            email: email,
            gender: gender,
            BirthYear: year,
            BirthDay: day,
            BirthMonth: month,
            Address: address,
          });
        });
        router.push("/Login");
      } catch (e) {
        alert(e.message);
      }
    } else {
      console.log("ALDAAAAAAAAAAAAAAAAAA");
    }
  };
  return (
    <div className="body">
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.container}>
        <form>
          <div className={styles.username}>
            <label>Овог</label>
            <input
              type="text"
              value={ovog}
              onChange={(e) => {
                setOvog(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className={styles.password}>
            <label>Нэр</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={ner}
              onChange={(e) => {
                setNer(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.password}>
            <label>Утасны дугаар</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={pnum}
              onChange={(e) => {
                setPnum(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.password}>
            <label>E-mail</label>
            <input
              type="text"
              id="emal"
              name="email"
              value={email}
              onChange={(e) => {
                setHnum(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.genderr}>
            <label>Хүис</label>
            <br></br>
            <input
              className="gender"
              type="radio"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="gender"
            />{" "}
            Male
            <input
              className="gender"
              type="radio"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name="gender"
            />{" "}
            Female
          </div>

          <div className={styles.password}>
            <label>Нууц үг</label>
            <input
              type="password"
              id="pass"
              name="pass"
              value={password}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.password}>
            <label>Хаяг</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.date}>
            <input
              type="text"
              className="inputDate"
              value={year}
              placeholder="Он"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              id="Year"
              name="Year"
              required
              pattern="[0-9]+$"
            />
            <input
              type="text"
              className="inputDate"
              placeholder="Сар"
              value={month}
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              id="month"
              name="month"
              required
              pattern="[0-9]+$"
            />
            <input
              type="text"
              className="inputDate"
              placeholder="Өдөр"
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
              id="day"
              name="day"
              required
              pattern="[0-9]+$"
            />
          </div>
          <div className={styles.button1}>
            <button type="button" onClick={handleClick1}>
              Register
            </button>
          </div>
          <div className={styles.button2}>
            <button type="button" onClick={handleClick}>
              back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  function validation() {
    if (
      year >= 1900 &&
      year <= 2022 &&
      day >= 1 &&
      day <= 31 &&
      month <= 12 &&
      month >= 1
    ) {
      return true;
    } else {
      console.log("Aldaa");
      return false;
    }
  }
}

export default Reg;
