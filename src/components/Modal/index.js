import { useEffect, useState } from "react";
import "./styles.css";
import images from "../../constants/images";

function Modal({
  setModalOpen,
  modalOpen,
  rank,
  setRank,
  percentile,
  setPercentile,
  correctAnswers,
  setCorrectAnswers,
}) {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modalOpen]);

  const [localValues, setLocalValues] = useState({
    rank,
    percentile,
    correctAnswers,
  });

  const handleSave = () => {
    setCorrectAnswers(localValues.correctAnswers);
    setRank(localValues.rank);
    setPercentile(localValues.percentile);
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal__container">
          <div className="modal__top">
            <h1 className="modal__heading">Update Scores</h1>
            <img src={images.html} alt="" style={{ transform: `scale(0.7)` }} />
          </div>

          <div className="modalField__conatiner">
            <div className="modal__field">
              <div className="modal__innerDiv">
                <div className="modal__number">1</div>
                <p className="modal__field__title">
                  Update your <span style={{ fontWeight: "700" }}>rank</span>
                </p>
              </div>
              <input
                className="modal__input"
                type="number"
                value={localValues.rank}
                min={1}
                max={10000}
                onChange={(e) =>
                  setLocalValues((prev) => ({
                    ...prev,
                    rank: parseInt(e.target.value),
                  }))
                }
              />
            </div>

            <div className="modal__field">
              <div className="modal__innerDiv">
                <div className="modal__number">2</div>
                <p className="modal__field__title">
                  Update your{" "}
                  <span style={{ fontWeight: "700" }}>percentile</span>
                </p>
              </div>
              <input
                className="modal__input"
                type="number"
                value={localValues.percentile}
                min={0}
                max={100}
                onChange={(e) =>
                  setLocalValues((prev) => ({
                    ...prev,
                    percentile: Math.min(parseInt(e.target.value), 100),
                  }))
                }
              />
            </div>

            <div className="modal__field">
              <div className="modal__innerDiv">
                <div className="modal__number">3</div>
                <p className="modal__field__title">
                  Update your{" "}
                  <span style={{ fontWeight: "700" }}>
                    current score (out of 15)
                  </span>
                </p>
              </div>
              <input
                className="modal__input"
                type="number"
                value={localValues.correctAnswers}
                min={0}
                max={15}
                onChange={(e) =>
                  setLocalValues((prev) => ({
                    ...prev,
                    correctAnswers: Math.min(parseInt(e.target.value), 15),
                  }))
                }
              />
            </div>
          </div>
          <div className="modal__footer">
            <button className="modal__btn__secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button className="modal__btn__primary" onClick={handleSave}>
              Save{" "}
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={images.arrow} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
