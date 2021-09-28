import Link from "next/link";
export const AboutBuyersSection = () => {
  return (
    <section className="about-buyers-section main-padding">
      <div className="about-buyers-section__main">
        <div className="about-buyers-section__img"></div>
        <div className="about-buyers-section__text-block">
          <h2 className="about-buyers-section__title text text_type_h4">
            <span className="text_color_main">Покупателям </span>собак
          </h2>
          <div className="about-buyers-section__text">
            <div className="about-buyers-section__text-item">
              <div className="about-buyers-section__text-item-count text text_type_h4 text_color_main">
                1
              </div>
              <div className="about-buyers-section__text-item-main text text_type_main">
                Максимум проверенной информации о щенке в удобном интерфейсе с
                возможностью сравнения нескольких щенков
              </div>
            </div>
            <div className="about-buyers-section__text-item">
              <div className="about-buyers-section__text-item-count text text_type_h4 text_color_main">
                2
              </div>
              <div className="about-buyers-section__text-item-main text text_type_main">
                Бесплатный сервис с медицинским профилем собаки, чтобы не забыть
                о прививках, сохранить документы о здоровье Вашего питомца и
                всегда иметь их под рукой в смартфоне
              </div>
            </div>
            <div className="about-buyers-section__text-item">
              <div className="about-buyers-section__text-item-count text text_type_h4 text_color_main">
                3
              </div>
              <div className="about-buyers-section__text-item-main text text_type_main">
                Раздел с новостями из мира собак в нашем блоге <br />
                <Link href="/blog">
                  <a className="text_color_main about-buyers-section__link">
                    Перейти в блог
                    <svg
                      className="about-buyers-section__arrow"
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 5C10.7516 5 1 5 1 5"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 1L17 5L13 9"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="about-buyers-section__text-item"></div>
          </div>
        </div>
      </div>
      <h3 className="about-buyers-section__sub-title">Полезные функции</h3>
      <div className="about-buyers-section__sub-block">
        <div className="about-buyers-section__sub-item">
          <div className="about-buyers-section__sub-item-icon"></div>
          <div className="about-buyers-section__sub-item-text text text_type_main">
            Расширенный поиск по полу, породе, местоположению, размеру, окрасу,
            цене и возрасту
          </div>
        </div>
        <div className="about-buyers-section__sub-item">
          <div className="about-buyers-section__sub-item-icon"></div>
          <div className="about-buyers-section__sub-item-text text text_type_main">
            Добавление понравившихся объявлений в избранное
          </div>
        </div>
        <div className="about-buyers-section__sub-item">
          <div className="about-buyers-section__sub-item-icon"></div>
          <div className="about-buyers-section__sub-item-text text text_type_main">
            Сравнение нескольких щенков в пару кликов
          </div>
        </div>
        <div className="about-buyers-section__sub-item">
          <div className="about-buyers-section__sub-item-icon"></div>
          <div className="about-buyers-section__sub-item-text text text_type_main">
            В каждом объявлении проверенная информация о питомнике и щенке: фото
            и видео, описание, информациях родителях и заводчике, ссылки на его
            соцсети
          </div>
        </div>
      </div>
    </section>
  );
};
