import { useState } from "react";
import style from "./Signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={style.signup}>
        <div className={style.decor}>
          <p className={style.name}>SOMETHING</p>
          <img
            src={require("../../assets/Kid fly 1.svg")}
            alt=""
            className={style.img}
          />
        </div>
        <div className={style.signup_form}>
          <div className={style.form_text}>
            <p className={style.heading}>SIGN UP</p>
            <p className={style.sub_heading}>
              Don’t have an account?{" "}
              <a href="#" className={style.link}>
                Sign up
              </a>
            </p>
          </div>
          <div className={style.form_div}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label className={style.label}>Name</label>
              <input
                className={style.field}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className={style.label}>Email</label>
              <input
                className={style.field}
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={style.label}>Password</label>
              <input
                className={style.field}
                type="text"
                required
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
              <button className={style.btn}>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
