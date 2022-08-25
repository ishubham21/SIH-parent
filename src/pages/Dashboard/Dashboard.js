import { useState, useEffect } from "react";
import AddChildForm from "../../components/AddChildForm/AddChildForm";
import ChildInfoDiv from "../../components/ChildInfoDiv/ChildInfoDiv";
import Modal from "../../components/Modal/Modal";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [show, setShow] = useState(false);
  const [children, setChildren] = useState([]);

  const parentToken = localStorage.getItem("parent-token");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#ffd348",
    );
    changeTheme();
  }, []);

  useEffect(() => {
      fetch(
        "https://sih-backend-rtu-alpha.vercel.app/auth/parent/dashboard",
        {
          headers: {
            "parent-token": parentToken,
          },
        },
      )
        .then((res) => res.json())
        .then((parentData) => {
          setChildren(parentData.data.children)
          if(parentData.data.children.length!==0){
            setIsEmpty(false)
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
    <>
       (
        <div className={style.dashboard}>
          {/* <Navbar /> */}
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
                  <AddChildForm
                    setFormIsOpen={setFormIsOpen}
                    setShow={setShow}
                  />
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
                {children.map((child) => {
                  let backgroundColor = "#f9b957";
                  if (child.gender == "Male")
                    backgroundColor = "#f9b957";
                  else backgroundColor = "#a390fb";
                  return (
                    <ChildInfoDiv
                      key={child.id}
                      color={{ backgroundColor }}
                      gender={child.gender}
                      name={child.name}
                      ageGrp={child.ageGroup}
                      coins={child.coins}
                    />
                  );
                })}
              </div>
            )}
          </div>
          {!isEmpty && (
            <div className={style.footer}>
              <div
                className={style.add_btn_dark}
                onClick={() => setShow(true)}
              >
                <p className={style.plus_dark}>+</p>
              </div>
            </div>
          )}
          {show && (
            <Modal
              show={show}
              setShow={setShow}
              setFormIsOpen={setFormIsOpen}
            />
          )}
        </div>
      )
    </>
  );
};

export default Dashboard;
