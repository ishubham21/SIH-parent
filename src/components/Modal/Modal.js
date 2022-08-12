import AddChildForm from "../AddChildForm/AddChildForm";
import style from "./Modal.module.css";

const Modal = ({ show, setShow }) => {
  return (
    <div className={style.modal}>
      <div>
        <AddChildForm show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default Modal;
