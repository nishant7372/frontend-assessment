import { useState } from "react";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import styles from "./styles.module.css";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [correctAnswers, setCorrectAnswers] = useState(7);
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["sidebar"]}>
        <Aside />
      </div>
      <div className={styles["main"]}>
        <Main
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          rank={rank}
          percentile={percentile}
          correctAnswers={correctAnswers}
        />
      </div>
    </div>
  );
};

export default Dashboard;
