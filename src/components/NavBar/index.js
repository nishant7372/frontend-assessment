import images from "../../constants/images";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <img src={images.logo} alt="logo" className={styles["logo"]} />
      </div>
      <div className={styles["profile-box"]}>
        <img src={images.avatar} className={styles["profile-avatar"]} alt="" />
        <div className={styles["profile-name"]}>Nishant Singh</div>
      </div>
    </div>
  );
};

export default Navbar;
