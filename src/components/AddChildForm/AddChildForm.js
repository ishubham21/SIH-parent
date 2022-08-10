import style from "./AddChildForm.module.css";

const AddChildForm = ({ setFormIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsOpen(false);
  };
  return (
    <div className={style.add_child_form}>
      <p className={style.heading}>CHILD DETAILS</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className={style.name}>Name:</label>
        <input type="text" className={style.text_input} required />
        <p className={style.catagory}>Age Group:</p>
        <label>5-7</label>
        <input
          type="radio"
          name="age group"
          value="5-7"
          className={style.radio_btn}
          required
        />
        <label>8-10</label>
        <input
          type="radio"
          name="age group"
          value="8-10"
          className={style.radio_btn}
          required
        />
        <label>11-14</label>
        <input
          type="radio"
          name="age group"
          value="11-14"
          className={style.radio_btn}
          required
        />
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
        <button>Save</button>
      </form>
    </div>
  );
};

export default AddChildForm;
