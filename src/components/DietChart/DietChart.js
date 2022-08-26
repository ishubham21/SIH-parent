import style from "./DietChart.module.css";
import { useState, useEffect } from "react";
import DietDetails from "../DietDetails/DietDetails";
import Navbar from "../Navbar/Navbar";

const DietChart = () => {
  const [tabGrp, setTabgrp] = useState("0");
  const handleClick = (e) => {
    setTabgrp(e.target.id);
  };

  useEffect(() => {
    document.getElementById("0").focus();
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <div className={style.dietchart}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.wrapper}>
        <div className={style.heading}>
          <p className={style.headingtxt}>Diet Chart</p>
        </div>
        <div className={style.contents}>
          <ul className={style.age_list}>
            <li className={style.age_list_items}>
              <div
                className={style.age_wrapper}
                tabIndex="0"
                id="0"
                onClick={handleClick}
              >
                <p
                  className={style.grp_name}
                  id="0"
                  onClick={handleClick}
                >
                  Toddler
                </p>
              </div>
            </li>
            <li className={style.age_list_items}>
              <div
                className={style.age_wrapper}
                tabIndex="1"
                id="1"
                onClick={handleClick}
              >
                <p
                  className={style.grp_name}
                  id="1"
                  onClick={handleClick}
                >
                  Pre School
                </p>
              </div>
            </li>
            <li className={style.age_list_items}>
              <div
                className={style.age_wrapper}
                tabIndex="2"
                id="2"
                onClick={handleClick}
              >
                <p
                  className={style.grp_name}
                  id="2"
                  onClick={handleClick}
                >
                  Pre Teen
                </p>
              </div>
            </li>
            <li className={style.age_list_items}>
              <div
                className={style.age_wrapper}
                tabIndex="3"
                id="3"
                onClick={handleClick}
              >
                <p
                  className={style.grp_name}
                  id="3"
                  onClick={handleClick}
                >
                  Teen
                </p>
              </div>
            </li>
          </ul>
        </div>
        <DietDetails tabGrp={tabGrp} />
      </div>
    </div>
  );
};

export default DietChart;
