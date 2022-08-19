import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./About.module.css";

const About = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <>
      <div className={style.about}>
        <div className={style.navbar}>
          {/* <Navbar /> */}
        </div>
        <div className={style.txt}>
          <h1 className={style.heading}>About :</h1>
          <p className={style.abtxt}>
            RIVHEHOVR RGJRJGR3 FWROR GRWOFIWEF WEGFOIRWG WROFI EWFPOE
            WQDPC QPOFE FPO SPW DS POEDNE OPIOIQWNDE PIEF ECL QE QFOVN
            EFOIVO QWDDL OQIE A ;KS C LJLD LLASS OIDND VODIVEW WIDVND
            PIR ALJ NSIF 0EQ ID DJDD PRSKHET ID FI LOV FWEVIOWNQEPFINF
            DIV EFPFIEEF EFPIF PRV EEFFOIV W
          </p>
        </div>

        <div className={style.img_container}>
          <div className={style.img_wrap}>
            <img
              src={require("../../assets/Saly-17.svg")}
              alt=" "
              className={style.img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
