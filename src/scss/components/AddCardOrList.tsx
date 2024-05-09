import React, { ReactElement, useState } from "react";
import AddCardOrListText from "./AddCardOrListText";

import { Cards } from "./models";

const AddCardOrList = () => {
  const [card, setCard] = useState<Cards[]>([]);
  const createNewCard = () => {
    const id = card.length + 1;
    const newCard: Cards = { text: "", id };
    setCard([...card, newCard]);
  };
  return (
    <>
      <div style={{ background: "transparent" }}>
        {card.map((Cards) => (
          <div className="display__flex__between align__items__center">
            <div key={Cards.id} className="List__NewCard">
              <AddCardOrListText cardInfo={card} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="List__AddCardOrListButton"
        style={{ display: "inline-block" }}
      >
        <button style={{ width: "100%" }} onClick={createNewCard}>
          Add new Card
        </button>
      </div>
    </>
  );
};

export default AddCardOrList;
