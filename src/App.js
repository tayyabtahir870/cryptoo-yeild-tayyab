import { Route, Routes, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Pages/Home";
import Signup from "./Components/Elements/Signup";
import { ToastContainer, toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Login from "./Components/Elements/Login";
import Passward from "./Components/Elements/Passward";
import Contact from "./Components/Elements/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("auth");
  //   if (authToken) {
  //     navigate("/home");
  //   }
  // }, [navigate]);

  const handleAction = (id) => {
    const authenticate = getAuth();
    if (id === 2) {


      let emailCheck=document.getElementById("emailcheck").value;
      let emailPattern=id=/^[a-z]{1,}[0-9]{1,}@[a-z]{1,}.[a-z]{1,}/gm
      if(!emailPattern.test(emailCheck)){
        console.log("invailid email")
        toast.error("Email first Alphabet must be in capital, use Specail character")
      }

      let passCheck=document.getElementById("passcheck").value;
      let pasPattern=/^[a-z]{1,}[A-Z]{1,}[0-9]{1,}/

      if(!pasPattern.test(passCheck)){
      
        console.log("invalid passward")
        toast.error("Passward first Letter start must be in small alphabet")
        return
      }

      createUserWithEmailAndPassword(authenticate, email, password)
        .then((response) => {
          navigate("/login");
          sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
          addDoc(collection(db, "users"), {
            name: name,
            email: email,
            password: password,
            contact: contact,
            address: address,
          });
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }

    if (id === 1) {
     

      signInWithEmailAndPassword(authenticate, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }
  };
  const passwardRset = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("verify");
      })
      .catch((error) => {
       
       
      });
  };
  const submit = (e) => {
    addDoc(collection(db, "contact"), {
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };
  return (
    <div>
      <ToastContainer />

      <Routes>
        <Route
          path="/contact"
          element={
            <Contact
              setName={setName}
              setEmail={setEmail}
              setSubject={setSubject}
              setMessage={setMessage}
              submit={() => submit()}
            />
          }
        />
        <Route
          path="/passward"
          element={
            <Passward passwardReset={passwardRset} setEmail={setEmail} />
          }
        />
        <Route index path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <Signup
              setEmail={setEmail}
              setPassword={setPassword}
              setContact={setContact}
              password={password}
              setAddress={setAddress}
              setName={setName}
              handleAction={() => handleAction(2)}
              title={"Register"}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
              title={"Login"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
