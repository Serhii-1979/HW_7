import React, { useContext } from "react";
import LanguageContext from "../LanguageContext";
import CardContainer from "./CardContainer";
import "./MainContent.css";

const MainContent = () => {
  const { language } = useContext(LanguageContext);

  return (
    <main className="main">
      <section className="carousel">
        {/* Ваш контент для карусели */}
        <div className="carousel__image">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQExnb-r_tLMpg/article-cover_image-shrink_600_2000/0/1690790118516?e=2147483647&v=beta&t=2ivXg0giXIRuNzwe2Dud7qfK40SYdfcgWqxG7R9ptfg"
            alt="img"
          />
        </div>
        <div className="carousel__text">
          <h1 className="carousel__title">
            {language === "ru" ? "Специалист по трудоустройтву" : "Career Advisor"}
          </h1>
          <p>
            {language === "ru"
              ? "СЕРГЕЙ ТКАЧУК..."
              : "SERHII TKACHUK..."}
          </p>
          <p>
            {language === "ru"
              ? `Германия – популярная страна для обучения, жизни и официального 
        трудоустройства иностранцев. В ней сложилась благоприятная 
        обстановка для карьерного роста. Единственным приемлемым вариантом 
        является официальное трудоустройство, а чтобы найти подходящие 
        вакансии в Германии, понадобятся специализированные ресурсы.`.trim()
              : "Germany is a popular country for studying, living, and official employment of foreigners. It has created a favorable environment for career growth. The only acceptable option is official employment, and to find suitable vacancies in Germany, specialized resources are required."}
          </p>

          <p>{language === "ru"
              ? `Трудоустройство в Германии очень связано с языковыми навыками. Если
              соискатель не знает немецкий язык, у него остаются шансы найти
              работу только со знанием английского языка. Найти хорошо
              оплачиваемую должность без знания языка практически невозможно.`.trim()
              : "Employment in Germany is closely related to language skills. If a job seeker does not know German, their chances of finding a job are limited to positions requiring English language skills only. Finding a well-paid position without knowledge of the language is practically impossible."}
            
          </p>
        </div>
      </section>
      <section className="products">
        {/* Ваш контент для новых товаров */}
        <h3>{language === "ru" ? "ВАКАНСИИ" : "VACANCIES"}</h3>
        {/* ... */}
        <CardContainer />
      </section>
    </main>
  );
};

export default MainContent;
