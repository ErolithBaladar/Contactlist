import { useState } from "react";
import './App.css'
import Authenticate from "./Authenicate.jsx";
import SignUpForm from "./SignUpForm.jsx";
export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}