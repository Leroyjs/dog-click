import Image from "next/image";
import codeQRImg from "../../media/medical-card/QR-code.svg";
import registrationImg from "../../media/medical-card/registration.jpg";
import addingPetsImg from "../../media/medical-card/adding-pets.jpg";

export const MedicalCardSecondSection = () => {
  return (
    <section className="medical-card-second-section main-padding">
      <h2 className="text_type_h4 medical-card-second-section__title">
        Как начать пользоваться
        <span className="text_color_main"> облачным профилем</span>
      </h2>
      <div className="medical-card-second-section__main">
        <div className="medical-card-second-section__column">
          <div className="medical-card-second-section__count-img">
            <div className="medical-card-second-section__count"> 1</div>
          </div>
          <div className="medical-card-second-section__column-content">
            <div className="medical-card-second-section__column-text text_type_main">
              Откройте на смартфоне http://app.medstory.io или просто наведите
              камеру телефона
            </div>
            <Image
              alt=""
              src={codeQRImg}
              className="medical-card-second-section__column-img"
            ></Image>
          </div>
        </div>
        <div className="medical-card-second-section__column">
          <div className="medical-card-second-section__count-img">
            <div className="medical-card-second-section__count">2</div>
          </div>
          <div className="medical-card-second-section__column-content">
            <div className="medical-card-second-section__column-text text_type_main">
              Зарегистрируйтесь или войдите под учетной записью Google
            </div>
            <Image
              alt=""
              src={registrationImg}
              className="medical-card-second-section__column-img"
            ></Image>
          </div>
        </div>
        <div className="medical-card-second-section__column">
          <div className="medical-card-second-section__count-img">
            <div className="medical-card-second-section__count">3</div>
          </div>
          <div className="medical-card-second-section__column-content">
            <div className="medical-card-second-section__column-text text_type_main">
              Добавьте всех ваших питомцев в Вашу новую учетную запись
            </div>
            <Image
              alt=""
              src={addingPetsImg}
              className="medical-card-second-section__column-img"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
