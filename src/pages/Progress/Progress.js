import Navbar from "../../components/Navbar/Navbar";
import style from "./Progress.module.css";
import { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-button",
      "#A390FB",
    );
  }, []);

  return (
    <div className={style.tasks_progress}>
      <Navbar />
      <div className={style.assign_tasks}>
        <p className={style.heading1}>Assign tasks:</p>
        <div className={style.wrapper}>
          <div className={style.assigned}>
            <p className={style.heading2}>Assigned </p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assigned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.cognitive}>
            <p className={style.heading2}>cognitive</p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.psychomotor}>
            <p className={style.heading2}>psychomotor</p>
            <div className={style.content_wrapper}>
              <div className={style.content}>
                <div className={style.task}>
                  <p className={style.task_name}>VNDL BAEOJE</p>
                  <div className={style.task_status}>
                    <p className={style.status}>Assign</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.progress}>
        <div className={style.text}>
          <p className={style.heading}>Weekly Progress:</p>
          <p className={style.nrml_text}>
            The given graph contains the performance stats of both
            Congnitive and Psychomotive progress on the daily basis
          </p>
        </div>
        <div className={style.graph}>
          <img
            src={require("../../assets/Months.svg")}
            alt=""
            className={style.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
