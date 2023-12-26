import { useState } from "react";
import animeData from "./data";
import "./styles.css";
export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  function handleMultipleClicks(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfId = cpyMultiple.indexOf(id);

    if (findIndexOfId == -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setMultipleSelection(!multipleSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {animeData && animeData.length > 0 ? (
          animeData.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  multipleSelection
                    ? () => {
                        handleMultipleClicks(dataItem.id);
                      }
                    : () => {
                        handleSingleClick(dataItem.id);
                      }
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multipleSelection ? (
                multiple.indexOf(dataItem.id) !== -1? (
                  <div className="content">{dataItem.answer}</div>
                ) : null
              ) : selectedId === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
