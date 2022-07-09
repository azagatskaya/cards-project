import React from "react";
import styles from "./Auth.css";

const user = {
  isLoggedIn: false,
};

function Authentication() {
  return (
    <div className={styles.login_button}>
      {user.isLoggedIn ? "Profile" : "Login"}
    </div>
  );
}

export default Authentication;
