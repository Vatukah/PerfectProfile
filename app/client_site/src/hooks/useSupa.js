import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const useSupa=()=> useContext(AuthContext);