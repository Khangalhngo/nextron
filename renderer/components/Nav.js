import styles from "../styles/Home.module.css";
const Nav = () => {
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
        <a href="/userprofile">Хэрэглэгчийн нэр болон утасны дугаар</a>
      </div>
      <button className={styles.navbutton}>
        <a href="/addItem">
          Зар нэмэх
          </a>
      </button>
    </nav>
  );
};

export default Nav;
