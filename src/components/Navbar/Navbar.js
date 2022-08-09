import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.left_div}>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <div className={style.item_button} tabIndex="0">HOME</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.item_button} tabIndex="1">ABOUT</div>
                    </li>
                    {/* <li className={style.item}>
                        <div className={style.item_button} tabIndex="2">COMMUNITY</div>
                    </li> */}
                </ul>
            </div>
            <div className={style.right_div}>
                <div className={style.item_button} tabIndex="3">PROFILE</div>
            </div>
        </div>
    );
}
 
export default Navbar;