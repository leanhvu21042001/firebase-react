import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
  const handleSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const email = formData.get("email");
    const password = formData.get("password");

    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <form onSubmit={handleSignIn}>
      <input type="Email ..." />
      <input type="Password ..." />
      <button type="submit">Submit</button>
    </form>
  );
};
