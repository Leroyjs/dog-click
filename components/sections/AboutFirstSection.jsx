export const AboutFirstSection = () => {
  return (
    <section className="about-first-section main-padding">
      <div className="about-first-section__img about-first-section__img_desk"></div>
      <div className="about-first-section__main">
        <h1 className="about-first-section__title text text_type_h4">
          <span className="text_color_main">
            DogClick — команда фанатов собак и кошек
          </span>{" "}
          с опытом работы в ИТ, финансах и бизнес-консалтинге, мечтающая
          изменить к лучшему рынок покупки домашних животных.
        </h1>
        <div className="about-first-section__img about-first-section__img_mobile"></div>
        <div className="about-first-section__desc">
          Мы создаем первую доверенную платформу для безопасной продажи и
          покупки собак при поддержке наших друзей-единомышленников, заводчиков,
          кинологов и ветеринаров.
        </div>
      </div>
    </section>
  );
};
