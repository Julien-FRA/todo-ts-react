import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { UserDto } from "../type/user.type";

export const userSignUp = async ({ email, password }: UserDto) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const userSignIn = async ({ email, password }: UserDto) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = () => {
  return auth.signOut();
};
