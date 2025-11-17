import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [singleSelected, setSingleSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelected(getCurrentId) {
    setSingleSelected(getCurrentId === singleSelected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const copyData = [...multipleSelected];
    const searchIndex = copyData.indexOf(getCurrentId);
    if (searchIndex === -1) copyData.push(getCurrentId);
    else copyData.splice(searchIndex, 1);
    setMultipleSelected(copyData);
  }

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable-Multi-Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelected(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleSelected.indexOf(item.id) !== -1 && (
                    <div className="acc-content">{item.answer}</div>
                  )
                : singleSelected === item.id && <div className="acc-content">{item.answer}</div>}
            </div>
          ))
        ) : (
          <div>No data found!!!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
