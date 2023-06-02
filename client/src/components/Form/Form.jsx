import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>Sign in</h2>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
            <span>Email</span>
            <i></i>
          </div>
          {errors.e1 && <p>{errors.e1}</p>}
          {errors.e2 && <p>{errors.e2}</p>}
          {errors.e3 && <p>{errors.e3}</p>}
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password..."
              name="password"
              onChange={handleChange}
              value={userData.password}
            />
            <span>Password</span>
            <i></i>
          </div>
          {errors.p1 && <p>{errors.p1}</p>}
          {errors.p2 && <p>{errors.p2}</p>}
          <div className={styles.links}>
            <a href="/">Forgot Password</a>
            <a href="/">Signup</a>
          </div>
          <input
            type="submit"
            value="Login"
            className={styles.button}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
