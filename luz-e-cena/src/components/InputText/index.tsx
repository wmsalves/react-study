import React from "react";
import styles from "./InputText.module.css";

const InputText = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default InputText;
