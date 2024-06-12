import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";
import "./CardContainer.css";

const CardContainer = () => {
  const { language } = useContext(LanguageContext);

  const cards = [
    {
      image:
        "https://media.licdn.com/dms/image/D4D0BAQGY9FKIR6qhmQ/company-logo_200_200/0/1711104995427/itcareerhub_logo?e=2147483647&v=beta&t=-Hd6cpDgTdGaUzWr99C0_qA8FngXp2PAXVSB2JPEfrY",
      title: language === "ru" ? "IT CAREER HUB" : "IT CAREER HUB",
      location: language === "ru" ? "Берлин" : "Berlin",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5e99fd1e3fa9f76f9cb1a8b2/1694530740150-CKABNLRD5IYQWMPOKMYA/1.png?format=1000w",
      title: language === "ru" ? "At SRJC" : "At SRJC",
      location: language === "ru" ? "Лондон" : "London",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_hrjCW32BB-ofVJ0--YOrkBwfvQSuW1Qcg&s",
      title: language === "ru" ? "CAREER HUB" : "CAREER HUB",
      location: language === "ru" ? "Париж" : "Paris",
    },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card__image" />
          <h2 className="card__title">{card.title}</h2>
          <p className="card__location">{card.location}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
