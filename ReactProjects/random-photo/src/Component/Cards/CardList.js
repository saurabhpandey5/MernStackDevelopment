import React from "react";
import Card from "./Card";
import data from "./data.json";
import "./style.css";

const CardList = () => {
    




  return (
    <div className=" card-row">
      <div className="card-list">
        {data.cards.map((card, index) => (
          <Card key={index} title={card.title} name={card.name} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
