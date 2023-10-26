import Aside from "../../components/Aside";
import styles from "./styles.module.css";

const Dashboard = ({}) => {
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["sidebar"]}>
        <Aside />
      </div>
      <div className={styles["main"]}></div>
    </div>
  );
};

export default Dashboard;
