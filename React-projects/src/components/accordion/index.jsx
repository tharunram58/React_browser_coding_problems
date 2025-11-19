import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {
  const [singleSelect, setSingleSelect] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSingleSelect(singleSelect === currentId ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    setMultiple((prev) => {
      if (prev.includes(currentId)) {
        return prev.filter((id) => id !== currentId); //Remove
      } else {
        return [...prev, currentId]; //Add
      }
    });
  }

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable-Multi-Selection
      </button>
      <div className="accordion">
        {data && data.length > 0
          ? data.map((item) => (
              <div
                key={item.id}
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="item"
              >
                <div className="title">
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelect
                  ? multiple.indexOf(item.id) !== -1 && <div className="acc-content">{item.answer}</div>
                  : singleSelect === item.id && <div className="acc-content">{item.answer}</div>}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
