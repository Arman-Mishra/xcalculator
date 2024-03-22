import React from "react";
import styles from "./button.module.css";

const Button = ({ content, setInput, setResult, clear }) => {
  return (
    <button
      className={styles.button}
      onClick={
        clear
          ? () => (setInput(""), setResult(""))
          : () => setInput((prev) => prev + "" + content)
      }
    >
      {content}
    </button>
  );
};

export default Button;
