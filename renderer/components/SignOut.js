import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { app } from "../../firebase/firebase";

const auth = getAuth(app);
const SignOut = () => {
  const router = useRouter();
  function handleClick(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("signed out");

        localStorage.clear();
        router.push("/Login");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default SignOut;
