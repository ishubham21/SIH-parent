import style from "./AddChildForm.module.css";
// 0-2(toddler) 3-6(preschool) 7-12(preteen)  13-14(teen)
const AddChildForm = ({ setFormIsOpen, show, setShow }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsOpen(false);
    setShow(false);
  };
  return (
    <div className={style.add_child_form}>
      {
        <div className={style.close_btn}>
          <img
            className={style.img}
            src={require("../../assets/x (1).svg")}
            alt=""
            onClick={() => {
              setShow(false);
              setFormIsOpen(false);
            }}
          />
        </div>
      }
      <p className={style.heading}>CHILD DETAILS</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className={style.name}>Name:</label>
        <input type="text" className={style.text_input} required />
        <p className={style.catagory}>Age Group:</p>
        <div className={style.category_container}>
          <div className={style.catagory_option}>
            <label>0-2(Toddler)</label>
            <input
              type="radio"
              name="age group"
              value="0-2"
              className={style.radio_btn}
              required
            />
          </div>
          <div className={style.catagory_option}>
            <label>3-6(PreSchool)</label>
            <input
              type="radio"
              name="age group"
              value="3-6"
              className={style.radio_btn}
              required
            />
          </div>
          <div className={style.catagory_option}>
            <label>7-12(PreTeen)</label>
            <input
              type="radio"
              name="age group"
              value="7-12"
              className={style.radio_btn}
              required
            />
          </div>
          <div className={style.catagory_option}>
            <label>13-14(Teen)</label>
            <input
              type="radio"
              name="age group"
              value="13-14"
              className={style.radio_btn}
              required
            />
          </div>
        </div>
        <p className={style.catagory}>Gender:</p>
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          className={style.radio_btn}
          required
        />
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          className={style.radio_btn}
          required
        />
        <button className={style.btn}>Save</button>
      </form>
    </div>
  );
};

export default AddChildForm;
