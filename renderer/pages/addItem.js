import styles from "../styles/addItem.module.css";
import { useEffect } from "react";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import { async } from "@firebase/util";
import { app } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";
import Router from "next/router";
import Nav from "../components/Nav";
function addItem() {
  const [ner, setNer] = useState("");
  const [pnum, setPnum] = useState("");
  useEffect(() => {
    setNer(window.localStorage.getItem("ner"));
    setPnum(window.localStorage.getItem("pnum"));
  });
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [choose, setChoose] = useState("");
  const [status, setStatus] = useState("");
  const [cover, setCover] = useState("");
  const [file, setFile] = useState("");
  const [url, setURL] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [choose2, setChoose2] = useState("");
  const [mail, setMail] = useState("");
  const router = useRouter();
  console.log(address);

  const handleClick1 = async (e) => {
    const curuser = window.localStorage.getItem("users");
    // const docRef = doc(db, "items");
    // await setDoc(docRef, {
    //   title: title,
    //   type: type,
    //   price: price,
    //   choose: choose,
    //   status: status,
    //   url: url,
    //   desc: desc,
    //   address: address,
    //   name: name,
    //   phone: phone,
    //   choose2: choose2,
    //   mail: mail,
    // });
    const docRef = await addDoc(collection(db, "items"), {
      title: title,
      type: type,
      price: price,
      choose: choose,
      status: status,
      url: url,
      desc: desc,
      address: address,
      name: name,
      phone: phone,
      choose2: choose2,
      mail: mail,
    });
    e.preventDefault();
    router.push("/ItemPage");
  };

  return (
    <>
      <Nav />
      <div className="body">
        <Head>
          <title>addItems</title>
        </Head>
        <div className={styles.container}>
          <form>
            <div className={styles.password}>
              <label>?????????? ???????????? :</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>?????????? :</label>
              <input
                type="text"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>?????? :</label>
              <input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.radio}>
              <br></br>
              <input
                className="choose"
                type="radio"
                value="vne tohirno"
                onChange={(e) => {
                  setChoose(e.target.value);
                }}
                name="choose"
              />{" "}
              ?????? ??????????????
              <input
                className="choose"
                type="radio"
                value="solino"
                onChange={(e) => {
                  setChoose(e.target.value);
                }}
                name="choose"
              />{" "}
              ????????????
              <input
                className="choose"
                type="radio"
                value="vnegvi"
                onChange={(e) => {
                  setChoose(e.target.value);
                }}
                name="choose"
              />
              ????????????
            </div>
            <div className={styles.password}>
              <label>????????/???????????? :</label>
              <input
                type="text"
                id="status"
                name="status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>???????? ?????????? :</label>
              <input
                type="file"
                id="cover"
                name="cover"
                value={cover}
                onChange={(e) => {
                  setCover(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>??????????/?????????? :</label>
              <input
                type="file"
                id="file"
                name="file"
                value={file}
                onChange={(e) => {
                  setFile(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>Youtube URL :</label>
              <input
                type="text"
                id="pass"
                name="pass"
                value={url}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.desc}>
              <label>?????????????? :</label>
              <input
                type="text"
                id="pass"
                name="pass"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.choose}>
              <label>?????????????? :</label>
              {/* <input type="text" id="pass" name="pass" value={address} /> */}
              <select
                name="Address"
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  // }}required
                }}
              >
                <option value="??????????????????????">??????????????????????</option>
                <option value="????????????????">????????????????</option>
                <option value="????????-??????????">????????-??????????</option>
                <option value="????????????????????">????????????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????-??????????">????????-??????????</option>
                <option value="????????????????????">????????????????????</option>
                <option value="????????????-??????">????????????-??????</option>
                <option value="??????????????????">??????????????????</option>
                <option value="????????????">????????????</option>
                <option value="????????????????">????????????????</option>
                <option value="????????????">????????????</option>
                <option value="??????????">??????????</option>
                <option value="????????????????????">????????????????????</option>
                <option value="????????????????">????????????????</option>
                <option value="??????????????????">??????????????????</option>
                <option value="??????????????">??????????????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="????????">????????</option>
                <option value="??????????????">??????????????</option>
                <option value="????????????">????????????</option>
              </select>
            </div>
            <div className={styles.password}>
              <label>?????? :</label>
              <input
                type="text"
                id="pass"
                name="pass"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.password}>
              <label>???????? :</label>
              <input
                type="text"
                id="pass"
                name="pass"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.radio1}>
              <input
                className="choose"
                type="radio"
                value="utas, chat"
                onChange={(e) => {
                  setChoose2(e.target.value);
                }}
                name="choose"
              />{" "}
              <label>????????, ????????????</label>
              <br></br>
              <input
                className="choose"
                type="radio"
                value="zuwhun utas"
                onChange={(e) => {
                  setChoose2(e.target.value);
                }}
                name="choose"
              />{" "}
              <label>???????????? ????????????</label>
            </div>
            <div className={styles.password}>
              <label>???????? ???????? :</label>
              <input
                type="text"
                id="pass"
                name="pass"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              ></input>
            </div>
            <p className={styles.ptag}>
              ???????????? ?????????? ?????????????????? ?????????? ??????{" "}
              <a href="/userprofile" className={styles.mail}>
                ?????????????? ??????
              </a>{" "}
              ?????? ???????? ????!
            </p>

            <div className={styles.button1}>
              <button type="button" onClick={() => Router.back()}>
                ??????????
              </button>
            </div>
            <div className={styles.button2}>
              <button type="button" onClick={handleClick1}>
                ??????????????
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default addItem;
