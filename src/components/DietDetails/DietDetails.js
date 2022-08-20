import style from "../DietChart/DietChart.module.css";
import { useState, useEffect } from "react";
import Data from "../Data/Data";

const DietDetails = (tabGrp) => {
  const [tabGrp2, setTabgrp2] = useState("0");
  const handleClick = (e) => {
    setTabgrp(e.target.id);
  };

  useEffect(() => {
    document.getElementById("0").focus();
  }, []);

  return (
    <div className={style.details}>
      <div className={style.subContents}>
        <ul className={style.ntrtionlList}>
          <li className={style.ntrtion_list_items}>
            <div
              className={style.ntrntion_wrapper}
              tabIndex="0"
              id="0"
              onClick={handleClick}
            >
              <p
                className={style.grp_name}
                id="0"
                onClick={handleClick}
              >
                Nutrition
              </p>
            </div>
          </li>
          <li className={style.ntrntion_list_items}>
            <div
              className={style.ntrntion_wrapper}
              tabIndex="1"
              id="1"
              onClick={handleClick}
            >
              <p
                className={style.grp_name}
                id="1"
                onClick={handleClick}
              >
                Recepies
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DietDetails;
