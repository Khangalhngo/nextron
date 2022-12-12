import Card from "./Card";
import styles from "./itemList.module.css";
import { useRouter } from "next/router";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Link from "next/link";
const ItemList = () => {
  // const router = useRouter();
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
      console.log(doc.data());
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
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/ItemPage",
      query: { title: title },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input />
          <button>Хайх</button>
        </div>
      </div>
      <div className={styles.filterButton}>
        <button>Шүүлт</button>
      </div>
      <a href="#" className={styles.suuldnemegdsen}>
        Сүүлд нэмэгдсэн
      </a>
      <div className={styles.items}>
        <div>
          {data &&
            data?.length > 0 &&
            data?.map((p) => {
              return (
                <div className={styles.card} key={p.phone}>
                  <Link
                    href={{
                      pathname: "/ItemPage",
                      query: {
                        title: p.title,
                        desc: p.desc,
                        price: p.price,
                        pnum: p.phone,
                      },
                    }}
                  >
                    <div className={styles.cardText}>
                      <h1>{p.title}</h1>
                    </div>
                  </Link>
                  <br></br>
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
      </div>
    </div>
  );
};

export default ItemList;
