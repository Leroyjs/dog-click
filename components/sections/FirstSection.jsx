import { MainTitle } from "../UI/MainTitle";
import { DropDown } from "../UI/DropDown";
import { ButtonMain } from "../UI/ButtonMain";
import { ButtonArrow } from "../UI/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import fattyCorgiImg from "../../media/fatty-corgi.png";
import {
  getBreeds,
  getCities,
  getDimensions,
  getColors,
} from "../../dictionaries";
import { useEffect, useState } from "react";

export const FirstSection = () => {
  const [breedsList, setBreedsList] = useState({ items: [] });
  const [citiesList, setCitiesList] = useState({ items: [] });
  const [gender, setGender] = useState(null);
  const [breed, setBreed] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(async () => {
    setBreedsList(await getBreeds());
    setCitiesList(await getCities());
  }, []);

  let url = "/search";
  if (gender !== null || breed !== null || city !== null) {
    url += "?";
    gender !== null && (url += "gender=" + gender + "&");
    breed !== null && (url += "breedIds=" + breed + "&");
    city !== null && (url += "cityId=" + city + "&");
  }
  return (
    <section className="first-section">
      <div className="first-section__bg"></div>
      <div className="first-section__inner">
        <MainTitle addСlasses="first-section__title">
          Твой лучший друг <span className="text_color_main">ждёт тебя</span>
        </MainTitle>
        <span className="text_type_h3 first-section__sub-title">
          Мы сотрудничаем только с проверенными заводчиками
        </span>
        <div className="first-section__input-row">
          <DropDown
            addСlasses="first-section__drop-down"
            placeholderText="Пол"
            placeholderImg={biGenderImg()}
            itemList={genderList}
            handler={setGender}
          ></DropDown>
          <DropDown
            addСlasses="first-section__drop-down first-section__drop-down_margin-horizontal"
            placeholderText="Порода щенка"
            placeholderImg={dogImg()}
            itemList={breedsList.items}
            handler={setBreed}
          ></DropDown>
          <DropDown
            addСlasses="first-section__drop-down"
            placeholderText="Местоположение"
            placeholderImg={locationImg()}
            itemList={citiesList.items}
            handler={setCity}
          ></DropDown>
        </div>
        <div className="first-section__buttons-row">
          <div className="first-section__main-button">
            <Link href={url}>
              <a>
                <ButtonMain>Найти щенка</ButtonMain>
              </a>
            </Link>
          </div>
          <div className="first-section__arrow-button">
            <Link href="/search">
              <a>
                <ButtonArrow>Показать всех</ButtonArrow>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="first-section__img-wrapper">
        <Image src={fattyCorgiImg} alt="fatty-corgi"></Image>
      </div>
    </section>
  );
};

const locationImg = () => (
  <svg viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 18.7998C6.37651 18.6412 6.2365 18.4589 6.08333 18.2556C5.48306 17.4591 4.68367 16.3445 3.88557 15.0706C3.08624 13.7947 2.29627 12.3719 1.7081 10.958C1.11626 9.53533 0.75 8.17155 0.75 7C0.75 3.4909 3.37202 0.75 6.5 0.75C9.62798 0.75 12.25 3.4909 12.25 7C12.25 8.17155 11.8837 9.53533 11.2919 10.958C10.7037 12.3719 9.91376 13.7947 9.11443 15.0706C8.31633 16.3445 7.51694 17.4591 6.91667 18.2556C6.7635 18.4589 6.62349 18.6412 6.5 18.7998ZM4.30891 9.27811C4.87989 9.89301 5.66672 10.25 6.5 10.25C7.33328 10.25 8.12011 9.89301 8.69109 9.27811C9.26033 8.66508 9.57143 7.84476 9.57143 7C9.57143 6.15524 9.26033 5.33493 8.69109 4.7219C8.12011 4.10699 7.33328 3.75 6.5 3.75C5.66672 3.75 4.87989 4.10699 4.30891 4.7219C3.73966 5.33493 3.42857 6.15524 3.42857 7C3.42857 7.84476 3.73966 8.66508 4.30891 9.27811Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
    />
  </svg>
);

const dogImg = () => (
  <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.312 14.9176L18.5177 21H8.95224L9.51492 15.1203C9.51492 15.1203 5.13646 15.9212 3.56664 13.8025C2.09515 11.8165 0.853284 7.77467 1.01405 7.47059C1.17481 7.16651 5.65658 6.80779 6.13887 6.50367C6.62117 6.19955 7.34461 2.15341 8.38957 1.63774C10.033 0.82674 11.846 0.955662 13.1321 1.13093C14.4182 1.30619 15.9569 1.23225 17.1512 2.85428C18.3455 4.47631 19 14.9176 19 14.9176H17.312ZM17.312 14.9176C17.312 14.9176 15.5454 14.7597 14.579 14.1066C12.0326 12.386 13.1093 8.73141 12.1675 5.28721"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const biGenderImg = () => (
  <svg viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.17239 21V18.4359M6.17239 15V18.4359M6.17239 18.4359H8.75859H3.58618"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 6.99998L16 1M16 1V6.64103M16 1H10.3103"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="10" r="5" stroke="#AF5B29" strokeWidth="1.5" />
  </svg>
);

const maleImg = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 7.99998L17 2M17 2V7M17 2H12"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="7" cy="12" r="5" stroke="#AF5B29" strokeWidth="1.5" />
  </svg>
);

const femaleImg = () => (
  <svg viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.17239 18V15.4359M6.17239 11V15.4359M6.17239 15.4359H8.75859H3.58618"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="6" r="5" stroke="#AF5B29" strokeWidth="1.5" />
  </svg>
);

const genderList = [
  {
    id: true,
    name: "Мальчик",
    img: maleImg(),
  },
  {
    id: false,
    name: "Девочка",
    img: femaleImg(),
  },
  {
    id: null,
    name: "Любой пол",
    img: biGenderImg(),
  },
];
