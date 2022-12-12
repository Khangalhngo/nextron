import { useState, useEffect } from "react";
import styles from "./itemList.module.css";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

const Card = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [pnum, setPnum] = useState("");
  const [data, setData] = useState([]);
  const [isFirstCycle, setIsFirstCycle] = useState(true);
  const usingDocs = async () => {
    const arraymo = [];
    const querySnapshot = await getDocs(collection(db, "items"));
    // console.log("here", querySnapshot[1]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      // setData(doc.data());
      arraymo.push(doc.data());
    });

    if (arraymo && arraymo?.length > 0) {
      return arraymo;
    }
  };
  useEffect(() => {
    usingDocs()
      .then(function (result) {
        setData(result);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <div >
      {data &&
        data?.length > 0 &&
        data?.map((p) => {
          return (
            <div className={styles.card} key={p.phone}>
              <div className={styles.cardText}>
                <h1>{p.title}</h1>
              </div>
              <div className={styles.cardText}>
                <a>Төрөл: {p.type}</a>
              </div>
              <div className={styles.cardText}>
                <a>Шинэ/Хуучин: {p.status}</a>
              </div>

              <div className={styles.cardText}>
                <a>Үнэ: {p.price}</a>
              </div>

              <div className={styles.cardText}>
                <a>Оруулсан: {p.name}</a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
