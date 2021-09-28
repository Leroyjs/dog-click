import { ButtonMain } from "../UI/ButtonMain";
import Link from "next/link";

export const MedstorySection = () => {
  return (
    <section className="medstory-section">
      <div className="medstory-section__inner main-padding">
        <div className="medstory-section__img medstory-section__img_desk"></div>
        <div className="medstory-section__main">
          <h2 className="medstory-section__title text text_type_h4">
            Medstory.io —{" "}
            <span className="text_color_main">облачный профиль здоровья</span>{" "}
            Вашего питомца
          </h2>
          <div className="medstory-section__desc text_color_gray text_type_main">
            Управляйте здоровьем прямо с телефона
          </div>
          <div className="medstory-section__img medstory-section__img_mobile"></div>
          <div className="medstory-section__text text_type_main">
            Профиль питомца в телефоне. Медицинская карта, напоминания о
            вакцинации и процедурах, отслеживание показателей и многое другое.
            Профиль питомца в телефоне. Медицинская карта, напоминания о
            вакцинации и процедурах, отслеживание показателей и многое другое
          </div>
          <Link href="/medical-card">
            <a className="medstory-section__button-wrapper">
              <ButtonMain>Подробнее</ButtonMain>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
