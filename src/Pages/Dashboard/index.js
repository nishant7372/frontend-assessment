import { useState } from "react";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import styles from "./styles.module.css";
import Modal from "../../components/Modal";

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
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          rank={rank}
          setRank={setRank}
          percentile={percentile}
          setPercentile={setPercentile}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
        />
      )}
    </div>
  );
};

export default Dashboard;
