import { useState } from "react";
import style from "./Login.module.css";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={style.login}>
        <div className={style.decor}>
          <div className={style.image_wrapper}>
            <img
              src={require("../../assets/Mask_Group_6.png")}
              alt=""
            />
          </div>
          <div className={style.name_wrapper}>
            <p className={style.name}>SOMETHING</p>
          </div>
        </div>
        <div className={style.login_form}>
          <div className={style.form_text}>
            <p className={style.heading}>LOG IN</p>
            <p className={style.sub_heading}>
              Don’t have an account? <a href="#">Sign up</a>
            </p>
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
                <label>Password</label>
                <input
                  type="text"
                  required
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <button>LOG IN</button>
            </form>
            <div className={style.alt_options}>
              <div className={style.alt_options_text}>
                <hr />
                <p>Or sign in using:</p>
                <hr />
              </div>
              <div className={style.alt_icons_wrapper}>
                <img
                  src={require("../../assets/Google.svg")}
                  alt=""
                />
                <img
                  src={require("../../assets/Facebook.svg")}
                  alt=""
                />
                <img
                  src={require("../../assets/Twitter.svg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
