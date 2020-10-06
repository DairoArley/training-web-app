import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const tarjetas1 = [
  {
    src: "images/img-9.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "/services",
  },
  {
    src: "images/img-2.jpg",
    text: "Travel through the Islands of Bali in Private Cruise",
    label: "Luxury",
    path: "/services",
  },
  {
    src: "images/img-8.jpg",
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "/services",
  },
];
const tarjetas2 = [
  {
    src: "images/img-6.jpg",
    text: "Travel through the Islands of Bali in Private Cruise",
    label: "Luxury",
    path: "/services",
  },
  {
    src: "images/img-5.jpg",
    text: "Enjoy of a walk in New York city",
    label: "Luxury",
    path: "/services",
  },
];

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {tarjetas1.map((tarjeta) => {
              return (
                <CardItem
                  src={tarjeta.src}
                  text={tarjeta.text}
                  label={tarjeta.label}
                  path={tarjeta.path}
                />
              );
            })}
          </ul>
          <ul className="cards__items">
            {tarjetas2.map((tarjeta) => {
              return (
                <CardItem
                  src={tarjeta.src}
                  text={tarjeta.text}
                  label={tarjeta.label}
                  path={tarjeta.path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
