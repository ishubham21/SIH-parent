import style from "./ProgressCard.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";

const ProgressCard = () => {
    useEffect(() => {
        document.documentElement.style.setProperty(
          "--navbar-button",
          "#A390FB",
        );
      }, []);

    return(
        <div className={style.progresscard}>
            <Navbar />
            <div className={style.wrapper}>
                <div className={style.progressReport}>
                    <h1>93 percentile</h1>
                    <p className={style.report}>Topic of the quiz : Math</p>
                    <p className={style.report}>Total students appeared: 30</p>
                    <div className={style.btnBox}><button className={style.bttn}>Show More</button></div>
                </div>
                <div className={style.graph}>
                    <div className={style.barGraph}>
                        <div className={style.imgData}>
                        <div className={style.img1}>
                            <img
                            src={require("../../assets/Amount.svg")}
                            alt="" />
                        </div>
                        <div className={style.img2}>
                            <img
                            src={require("../../assets/Months.svg")}
                            alt="" />
                        </div>
                        </div>
                        <div className={style.img3}>
                            <img
                            src={require("../../assets/Months (1).svg")}
                            alt ="" />
                        </div>
                    </div>
                    <div className={style.list}>
                        <div className={style.list_items}>
                            <ul className={style.col_heading}>
                                <li>Total Questions</li>
                                <li>Right Answers</li>
                                <li>Final Score</li>
                            </ul>
                        </div>
                        <div className={style.container}>
                            <div className={style.box}>10</div>
                            <div className={style.box}>6</div>
                            <div className={style.box}>60</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;