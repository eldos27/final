import { useState } from "react";

import fire from "../../firebase/fire";
import firebase from "firebase/app";
import React from "react";
import { makeStyles } from "@material-ui/core";

const firestore = fire.firestore();

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    width: "20%",
    padding: "10px ",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    borderRadius: "0 10px 10px 0",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "2vw",
    "&:hover": {
      color: "black",
      //   fontSize: "18px",
    },
  },
  mainEmaildiv: {
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundImage: `url(${"https://cdna.artstation.com/p/assets/images/images/036/457/414/large/nik-tucek-twenty-one-pilots-scaled-and-icy-nik-tucek.jpg?1617730748"})`,
    // background: "linear-gradient(to right, #414345, #232526)",
    overflow: "hidden",
  },
  emailContainer: {
    position: "relative",
    // margin: "10vh",
  },
  emailForm: {
    position: "relative",
    padding: "3rem",
    // minWidth: "500px",
    borderRadius: "5px",
    boxShadow: "0 0 30px #333",
    background: "rgba(255, 255, 255, 0.1)",
    border: "solid 1px rgba(255, 255, 255, 0.2)",
    backgroudClip: "padding-box",
    backdropFilter: "blur(10px)",
    zIndex: "2",
  },
  emailH: {
    color: "#fff",
    // padding: "1rem",
    textAlign: "center",
    fontSize: "2vw",
  },
  emailInput: {
    padding: "10px",
    borderRadius: "10px 0 0 10px",
    // border: "none",
    width: "80%",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: "2vw",
    // color: "#cf1ds22",
  },
  emailMessage: {
    position: "relative",
    padding: "0.4rem",
    margin: "0.5rem",
    color: "white",
    textAlign: "center",
    fontSize: "1.2rem",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    background: "rgba(0, 255, 0, 0.1)",
    backdropFilter: "blur(10px)",
    zIndex: "3",
  },
  emailContainer: {
    width: "60vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundAttachment: "fixed",
  },
}));

const MailContainer = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      // add to firebase
      firestore.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setMessage("Thank you for Subscribing!!!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    // <div className={classes.mainEmaildiv}>
    <div className={classes.emailContainer}>
      <form className={classes.emailForm} onSubmit={submitHandler}>
        <h2 className={classes.emailH}>SUBSCRIBE TO OUR NEWS</h2>
        <input
          className={classes.emailInput}
          type="email"
          onChange={inputHandler}
          value={input}
        />
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
        {message && <span className={classes.emailMessage}>{message}</span>}
      </form>
    </div>

    // </div>
  );
};

export default MailContainer;
