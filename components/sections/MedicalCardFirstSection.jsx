export const MedicalCardFirstSection = () => {
  return (
    <section className="medical-card-first-section main-padding">
      <div className="medical-card-first-section__img"></div>
      <div className="medical-card-first-section__main">
        <h2 className="text_type_h4 medical-card-first-section__title">
          Medstory.io — облачный профиль
          <span className="text_color_main"> здоровья Вашего питомца</span>
        </h2>
        <div className="text text_type_h5 text_color_gray medical-card-first-section__desc">
          Medstory поможет
        </div>
        <ul className="medical-card-first-section__ul">
          <li className="medical-card-first-section__list-item">
            <div className="medical-card-first-section__list-item-img"></div>
            <div className="medical-card-first-section__list-item-text text text_type_main">
              не пропустить запись к ветеринару и прием лекарств
            </div>
          </li>
          <li className="medical-card-first-section__list-item">
            <div className="medical-card-first-section__list-item-img"></div>
            <div className="medical-card-first-section__list-item-text text text_type_main">
              получить телемедицинскую консультацию
            </div>
          </li>
          <li className="medical-card-first-section__list-item">
            <div className="medical-card-first-section__list-item-img"></div>
            <div className="medical-card-first-section__list-item-text text text_type_main">
              поделиться с ветеринаром важной информацией
            </div>
          </li>
          <li className="medical-card-first-section__list-item">
            <div className="medical-card-first-section__list-item-img"></div>
            <div className="medical-card-first-section__list-item-text text text_type_main">
              найти результаты анализов в два клика
            </div>
          </li>
          <li className="medical-card-first-section__list-item">
            <div className="medical-card-first-section__list-item-img"></div>
            <div className="medical-card-first-section__list-item-text text text_type_main">
              отслеживать изменения показателей
            </div>
          </li>
        </ul>
        <div className="text text_color_main text_type_h5">
          и многое другое...
        </div>
      </div>
    </section>
  );
};
