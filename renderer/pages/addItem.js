import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/item.module.css";
import { useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import { async } from "@firebase/util";
import { app } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Router from "next/router";
function addItem() {
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
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push("/Itempage");
  // };
  const handleClick1 = (e) => {
    e.preventDefault();
    router.push("/Itempage");
  };
  return (
    <div className="body">
      <Head>
        <title>addItem</title>
      </Head>
      <div className={styles.container}>
        <form>
          <div className={styles.password}>
            <label>Зарын гарчиг :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              // required
            ></input>
          </div>
          <div className={styles.password}>
            <label>Төрөл :</label>
            <input
              type="text"
              //   id="pass"
              //   name="pass"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              // required
            ></input>
          </div>
          <div className={styles.password}>
            <label>Үнэ :</label>
            <input
              type="text"
              //   id="pass"
              //   name="pass"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              // required
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
            Үнэ тохирно
            <input
              className="choose"
              type="radio"
              value="solino"
              onChange={(e) => {
                setChoose(e.target.value);
              }}
              name="choose"
            />{" "}
            Солино
            <input
              className="choose"
              type="radio"
              value="vnegvi"
              onChange={(e) => {
                setChoose(e.target.value);
              }}
              name="choose"
            />
            Үнэгүй
          </div>
          <div className={styles.password}>
            <label>Шинэ/хуучин :</label>
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
            <label>Нүүр зураг :</label>
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
            <label>Зураг/Видео :</label>
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
          <div className={styles.password}>
            <label>Тайлбар :</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              // required
            ></input>
          </div>
          <div className={styles.choose}>
            <label>Байршил :</label>
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
              <option value="Улаанбаатар">Улаанбаатар</option>
              <option value="Архангай">Архангай</option>
              <option value="Баян-Өлгий">Баян-Өлгий</option>
              <option value="Баянхонгор">Баянхонгор</option>
              <option value="Булган">Булган</option>
              <option value="Говь-Алтай">Говь-Алтай</option>
              <option value="Говьсүмбэр">Говьсүмбэр</option>
              <option value="Дархан-Уул">Дархан-Уул</option>
              <option value="Дорноговь">Дорноговь</option>
              <option value="Дорнод">Дорнод</option>
              <option value="Дундговь">Дундговь</option>
              <option value="Завхан">Завхан</option>
              <option value="Орхон">Орхон</option>
              <option value="Өвөрхангай">Өвөрхангай</option>
              <option value="Өмнөговь">Өмнөговь</option>
              <option value="Сүхбаатар">Сүхбаатар</option>
              <option value="Сэлэнгэ">Сэлэнгэ</option>
              <option value="Төв">Төв</option>
              <option value="Увс">Увс</option>
              <option value="Ховд">Ховд</option>
              <option value="Хөвсгөл">Хөвсгөл</option>
              <option value="Хэнтий">Хэнтий</option>
            </select>
          </div>
          <div className={styles.password}>
            <label>Нэр :</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              // required
            ></input>
          </div>
          <div className={styles.password}>
            <label>Утас :</label>
            <input
              type="text"
              id="pass"
              name="pass"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              // required
            ></input>
          </div>
          <div className={styles.radio}>
            <input
              className="choose"
              type="radio"
              value="utas, chat"
              onChange={(e) => {
                setChoose2(e.target.value);
              }}
              name="choose"
            />{" "}
            Утас, чатаар
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
            Зөвхөн утсаар
          </div>
          <div className={styles.password}>
            <label>Мэйл хаяг :</label>
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
          <p>
            Холбоо барих мэдээллээ солих бол{" "}
            <a href="/userprofile" className={styles.mail}>
              Профайл цэс
            </a>{" "}
            рүү орно уу!
          </p>
          <div className={styles.button1}>
            <button type="button" onClick={() => Router.back()}>
              Буцах
            </button>
          </div>
          <div className={styles.button2}>
            <button type="button" onClick={handleClick1}>
              Нийтлэх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addItem;
