import Navbar from "../../components/Navbar/Navbar";
import style from "./Progress.module.css"
import { useEffect } from "react";

const Progress = () => {

    useEffect(() => {
        document.documentElement.style.setProperty('--navbar-button', '#5D9CFB')
      }, []);

    return (
        <div className={style.progress}>
            <Navbar />
        </div>
    );
}
 
export default Progress;