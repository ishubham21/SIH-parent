import { useState, useEffect } from "react";
import AddChildForm from "../../components/AddChildForm/AddChildForm";
import ChildInfoDiv from "../../components/ChildInfoDiv/ChildInfoDiv";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#ffd348",
    );
    changeTheme();
  }, []);

  useEffect(() => {
    changeTheme();
  }, [isEmpty]);

  const changeTheme = () => {
    if (!isEmpty) {
      document.documentElement.style.setProperty(
        "--dashboard-bg",
        "#ffffff",
      );
      document.documentElement.style.setProperty(
        "--dashboard-bg-mobile",
        "#ffffff",
      );
      document.documentElement.style.setProperty(
        "--navbar-button",
        "#5D9CFB",
      );
    }
  };

  return (
    <div className={style.dashboard}>
      <Navbar />
      <div className={style.content_wrapper}>
        {isEmpty && (
          <div className={style.left_div}>
            {!formIsOpen && (
              <div
                className={style.add_btn}
                onClick={() => {
                  setFormIsOpen(true);
                }}
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
        )}
        {isEmpty && (
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
        )}
        {!isEmpty && (
          <div className={style.children}>
            <ChildInfoDiv
              color={{ backgroundColor: "#f9b957" }}
              gender={"Male"}
              name={"Ben"}
            />
            <ChildInfoDiv
              color={{ backgroundColor: "#A390FB" }}
              gender={"Female"}
              name={"Emma"}
            />
            <ChildInfoDiv
              color={{ backgroundColor: "#f9b957" }}
              gender={"Male"}
              name={"Ben"}
            />
            <ChildInfoDiv
              color={{ backgroundColor: "#A390FB" }}
              gender={"Female"}
              name={"Emma"}
            />
          </div>
        )}
      </div>
      {!isEmpty && (
          <div className={style.footer}>
            <div className={style.add_btn_dark}>
              <p className={style.plus_dark}>+</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default Dashboard;

