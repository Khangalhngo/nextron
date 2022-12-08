import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/item.module.css";
import { Router, useRouter } from "next/router";
import { auth } from "../../firebase/firebase";
import { async } from "@firebase/util";
import { app } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
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
    // const db = firebase.firestore();
    function writeItemData(
        title,
        type,
        price,
        choose,
        status,
        cover,
        file,
        url,
        desc,
        address,
        name,
        phone,
        choose2,
        mail
  ) {
    // set(ref(db, "users/" + pnum), {
    //   firstname: ner,
    //   lastname: ovog,
    //   phone_number: pnum,
    //   email: email,
    //   gender: gender,
    //   BirthYear: year,
    //   BirthDay: day,
    //   BirthMonth: month,
    //   Address: address,
    // });
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/Itempage");
  };
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
              required
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
                          required
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
                          required
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
            />Үнэгүй
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
              }}required
            ></input>
                  </div>
            <div className={styles.choose}>
            <label>Байршил :</label>
            {/* <input
              type="text"
              id="pass"
              name="pass"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}required
            ></input> */}
                      <select name="Address" id="address">
                          {/* value = {address} */}
                          <option value="ub">Улаанбаатар</option>
                          <option value="a">Архангай</option>
                          <option value="ba">Баян-Өлгий</option>
                          <option value="bayn">Баянхонгор</option>
                          <option value="bu">Булган</option>
                          <option value="goa">Говь-Алтай</option>
                          <option value="gos">Говьсүмбэр</option>
                          <option value="da">Дархан-Уул</option>
                          <option value="dog">Дорноговь</option>
                          <option value="do">Дорнод</option>
                          <option value="du">Дундговь</option>
                          <option value="za">Завхан</option>
                          <option value="or">Орхон</option>
                          <option value="uw">Өвөрхангай</option>
                          <option value="um">Өмнөговь</option>
                          <option value="su">Сүхбаатар</option>
                          <option value="se">Сэлэнгэ</option>
                          <option value="tu">Төв</option>
                          <option value="uv">Увс</option>
                          <option value="ho">Ховд</option>
                          <option value="hu">Хөвсгөл</option>
                          <option value="he">Хэнтий</option>
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
              }}required
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
              }}required
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
                  </div >
                  <p>Холбоо барих мэдээллээ солих бол <a href="/userprofile" className={styles.mail}>Профайл цэс</a> рүү орно уу!</p>
          <div className={styles.button1}>
            <button type="button" onClick={handleClick1}>
              Буцах
            </button>
            
          </div>
          <div className={styles.button2}>
            <button type="button" onClick={handleClick}>
              Нийтлэх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default addItem;
