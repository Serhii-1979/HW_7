import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const DisplayText = () => {
  const { language } = useContext(LanguageContext);
  const text =
    language === "en"
      ? "English language was chosen"
      : "Был выбран русский язык";

  return <h1>{text}</h1>;
};

export default DisplayText;
