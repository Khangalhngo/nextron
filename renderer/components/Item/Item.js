import { useRouter } from "next/router";
import styles from "./item.module.css";

const Item = () => {
  const router = useRouter();
  const title = router.query["title"];
  const desc = router.query["desc"];
  const pnum = router.query["pnum"];
  const price = router.query["price"];

  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <label>Гарчиг</label>
          <div className={styles.Itemthings}>{title}</div>
        </div>
        <div className={styles.div2}>
          <label>Зураг</label>
        </div>
        <div className={styles.div3}>
          <label>Барааны тайлбар</label>
          <div className={styles.Itemthings}>{desc}</div>
        </div>
        <div className={styles.div4}>
          <label>Утасны дугаар</label>
          <div className={styles.Itemthings}>{pnum}</div>
        </div>
        <div className={styles.div5}>
          <label>Үнэ </label>
          <div className={styles.Itemthings}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
