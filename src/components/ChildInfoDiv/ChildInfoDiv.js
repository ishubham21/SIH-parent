import styles from "./ChildInfoDiv.module.css";

const ChildInfoDiv = ({color, gender, name}) => {
  return (
    <div className={styles.child_info_div} style={color}>
      <p className={styles.name}>{name}</p>
      <div className={styles.details_wrapper}>
        <div className={styles.div_1}>
          <p className={styles.detail}>Age: 11</p>
          <p className={styles.detail}>Sex: {gender}</p>
        </div>
        <div className={styles.div_2}>
          <p className={styles.detail}>Streak: 35</p>
          <p className={styles.detail}>Coins: 105</p>
        </div>
      </div>
      <button className={styles.btn}>Tasks and Progress</button>
      {gender==="Male" && <img src={require("../../assets/_0004.svg")} alt="" className={styles.img}/>}
      {gender==="Female" && <img src={require("../../assets/img_0011.svg")} alt="" className={styles.img2}/>}
    </div>
  );
};

export default ChildInfoDiv;
