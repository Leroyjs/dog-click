import { MainTitle } from '../UI/MainTitle';
import { DropDown } from '../UI/DropDown';
import { ButtonMain } from '../UI/ButtonMain';
import { ButtonArrow } from '../UI/ButtonArrow';
import Image from 'next/image';
import Link from 'next/link';
import fattyCorgiImg from '../../media/fatty-corgi.png';

export const FirstSection = () => {
    return (
        <section className="first-section">
            <div className="first-section__bg"></div>
            <div className="first-section__inner">
                <MainTitle addСlasses="first-section__title">
                    Твой лучший друг{' '}
                    <span className="text_color_main">ждёт тебя</span>
                </MainTitle>
                <span className="text_type_h3">
                    Мы сотрудничаем только с проверенными заводчиками
                </span>
                <div className="first-section__input-row">
                    <DropDown
                        addСlasses="first-section__drop-down"
                        placeholderText="Порода щенка"
                        placeholderImg={dogImg()}
                        itemList={puppyBreedList}
                    ></DropDown>
                    <DropDown
                        addСlasses="first-section__drop-down first-section__drop-down_margin-horizontal"
                        placeholderText="Порода щенка"
                        placeholderImg={dogImg()}
                        itemList={puppyBreedList}
                    ></DropDown>
                    <DropDown
                        addСlasses="first-section__drop-down"
                        placeholderText="Порода щенка"
                        placeholderImg={dogImg()}
                        itemList={puppyBreedList}
                    ></DropDown>
                </div>
                <div className="first-section__buttons-row">
                    <div className="first-section__main-button">
                        <Link href="/search">
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

const puppyBreedList = [
    {
        text: 'Бульдог',
        img: false,
    },
    {
        text: 'Бульмастиф',
        img: false,
    },
    {
        text: 'Бультерьер миниатюрный',
        img: false,
    },
    {
        text: 'Бультерьер стандартный',
        img: false,
    },
    {
        text: 'Бульдог1',
        img: false,
    },
    {
        text: 'Бульмастиф1',
        img: false,
    },
    {
        text: 'Бультерьер миниатюрный1',
        img: false,
    },
    {
        text: 'Бультерьер стандартный1',
        img: false,
    },
];

const dogImg = () => (
    <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M17.312 14.9176L18.5177 21H8.95224L9.51492 15.1203C9.51492 15.1203 5.13646 15.9212 3.56664 13.8025C2.09515 11.8165 0.853284 7.77467 1.01405 7.47059C1.17481 7.16651 5.65658 6.80779 6.13887 6.50367C6.62117 6.19955 7.34461 2.15341 8.38957 1.63774C10.033 0.82674 11.846 0.955662 13.1321 1.13093C14.4182 1.30619 15.9569 1.23225 17.1512 2.85428C18.3455 4.47631 19 14.9176 19 14.9176H17.312ZM17.312 14.9176C17.312 14.9176 15.5454 14.7597 14.579 14.1066C12.0326 12.386 13.1093 8.73141 12.1675 5.28721"
            stroke="#AF5B29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
