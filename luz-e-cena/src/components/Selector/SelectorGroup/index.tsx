import React from "react";
import styles from "./SelectorGroup.module.css";

interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ icon, children, ...rest }: SelectorGroup) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGroup;
