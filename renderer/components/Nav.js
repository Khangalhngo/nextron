import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import React, { useState } from "react";
const Nav = () => {
  const [ner, setNer] = useState("");
  const [pnum, setPnum] = useState("");
  useEffect(() => {
    setNer(window.localStorage.getItem("ner"));
    setPnum(window.localStorage.getItem("pnum"));
  });
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <img src="/images/download.png" />
      </div>
      <div className={styles.navHome}>
        <a href="/next">Home</a>
      </div>
      <div className={styles.userNamepnum}>
        {" "}
        <a href="/userprofile">
          {ner}({pnum})
        </a>
      </div>
      <button className={styles.navbutton}>
        <a href="/addItem">Зар нэмэх</a>
      </button>
    </nav>
  );
};

export default Nav;
