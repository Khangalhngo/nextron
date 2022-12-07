import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { app } from "../../firebase/firebase";
const auth = getAuth(app);
function handleClick(e) {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      alert("signed out");
    })
    .catch((error) => {
      alert(error);
    });
}
const SignOut = () => {
  return (
    <div>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default SignOut;
