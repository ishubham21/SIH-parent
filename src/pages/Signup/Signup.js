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
          <div className={style.name_wrapper}>
            <p className={style.name}>SOMETHING</p>
          </div>
          <div className={style.image_wrapper}>
            <img
              src={require("../../assets/Mask_Group_6.png")}
              alt=""
            />
          </div>
        </div>
        <div className={style.signup_form}>
          <div className={style.form_text}>
            <p className={style.heading}>SIGN UP</p>
          </div>
          <div className={style.form_div}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={style.input_grp}>
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.input_grp}>
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.input_grp}>
                <label>Password</label>
                <input
                  type="text"
                  required
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <button className={style.btn}>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
