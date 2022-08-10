import { useState } from "react";
import AddChildForm from "../../components/AddChildForm/AddChildForm";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <div className={style.dashboard}>
      <Navbar />
      <div className={style.content_wrapper}>
        <div className={style.left_div}>
          {!formIsOpen && (
            <div
              className={style.add_btn}
              onClick={() => setFormIsOpen(true)}
            >
              <p className={style.plus}>+</p>
            </div>
          )}
          {!formIsOpen && (
            <p className={style.add_text}>
              Add details of your child
            </p>
          )}
          {formIsOpen && (
            <AddChildForm setFormIsOpen={setFormIsOpen} />
          )}
        </div>
        <div
          className={`${style.right_div} ${
            formIsOpen ? style.form_open_div : ""
          }`}
        >
          <img
            src={require("../../assets/Saly-16.png")}
            alt=""
            className={`${style.saly_img} ${
              formIsOpen ? style.form_open : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
