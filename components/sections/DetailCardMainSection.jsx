import Link from 'next/link';
import { DetailSlider } from '../common/DetailSlider';
import { DogName } from '../common/DogName';
import { Location } from '../common/Location';
import { BackButton } from '../UI/BackButton';
import { Description } from '../UI/Description';
import { ButtonMain } from '../UI/ButtonMain'
import { ParentCard } from '../common/ParentCard';

export const DetailCardMainSection = ({}) => {
    return (
        <section className="detail-card-main-section main-padding">
            <Link href="/">
                <a>
                    <BackButton>Назад к предыдущей странице</BackButton>
                </a>
            </Link>
            <h2 className="detail-card-main-section__title text_type_h4">
                Лабрадор ретривер
            </h2>
            <div className="detail-card-main-section__row-head">
                <Description>Опубликовано 25.05.2021</Description>
                <div className="detail-card-main-section__buttons detail-card-main-section__buttons_desktop">
                    <div className="detail-card-main-section__button-item">
                        <svg
                            width="28"
                            height="24"
                            viewBox="0 0 28 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.0699 3.72517L26.0702 3.72574C27.5156 6.57887 26.9899 9.86834 24.1478 13.6361L24.1464 13.6379C21.8957 16.6411 18.6467 19.6596 13.8852 23.2237L13.884 23.2247C13.8642 23.2395 13.8362 23.25 13.8041 23.25C13.7721 23.25 13.744 23.2395 13.7243 23.2247L13.7232 23.2239C8.95561 19.6534 5.71243 16.6085 3.45951 13.6348C0.60953 9.86752 0.0842099 6.57848 1.52945 3.72574L1.52974 3.72517C2.51421 1.77779 5.45927 0.058217 9.0188 1.04141C10.7115 1.51286 12.1828 2.52208 13.1959 3.898L13.7998 4.71825L14.4038 3.898C15.417 2.5219 16.8885 1.51259 18.5815 1.04122L18.5834 1.04069C22.1297 0.0433931 25.0841 1.7752 26.0699 3.72517Z"
                                stroke="black"
                                strokeWidth="1.5"
                            />
                        </svg>
                        <span className="text text_type_main">В избранное</span>
                    </div>
                    <div className="detail-card-main-section__button-item">
                        <svg
                            width="38"
                            height="20"
                            viewBox="0 0 38 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.5933 13.1341L15.5981 18H7.62687L8.09577 13.2963C8.09577 13.2963 4.44705 13.937 3.13887 12.242C1.91262 10.6532 0.877736 7.41974 1.01171 7.17647C1.14568 6.9332 4.88048 6.64623 5.28239 6.40294C5.6843 6.15964 6.28717 2.92273 7.15797 2.51019C8.52748 1.86139 10.0383 1.96453 11.1101 2.10474C12.1819 2.24495 13.4641 2.1858 14.4593 3.48342C15.4546 4.78105 16 13.1341 16 13.1341H14.5933ZM14.5933 13.1341C14.5933 13.1341 13.1212 13.0078 12.3158 12.4853C10.1939 11.1088 11.091 8.18513 10.3063 5.42977"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <line
                                x1="18.75"
                                y1="0.75"
                                x2="18.75"
                                y2="19.25"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeDasharray="2 2"
                            />
                            <path
                                d="M22.9067 13.1341L21.9019 18H29.8731L29.4042 13.2963C29.4042 13.2963 33.0529 13.937 34.3611 12.242C35.5874 10.6532 36.6223 7.41974 36.4883 7.17647C36.3543 6.9332 32.6195 6.64623 32.2176 6.40294C31.8157 6.15964 31.2128 2.92273 30.342 2.51019C28.9725 1.86139 27.4617 1.96453 26.3899 2.10474C25.3181 2.24495 24.0359 2.1858 23.0407 3.48342C22.0454 4.78105 21.5 13.1341 21.5 13.1341H22.9067ZM22.9067 13.1341C22.9067 13.1341 24.3788 13.0078 25.1842 12.4853C27.3061 11.1088 26.409 8.18513 27.1937 5.42977"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text text_type_main">Сравнить</span>
                    </div>
                </div>
            </div>
            <div className="detail-card-main-section__main-row">
                <div className="detail-card-main-section__slider">
                    <DetailSlider />
                </div>
                <div className="detail-card-main-section__info">
                    <div className="detail-card-main-section__buttons detail-card-main-section__buttons_mobile">
                        <div className="detail-card-main-section__button-item">
                            <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.0699 3.72517L26.0702 3.72574C27.5156 6.57887 26.9899 9.86834 24.1478 13.6361L24.1464 13.6379C21.8957 16.6411 18.6467 19.6596 13.8852 23.2237L13.884 23.2247C13.8642 23.2395 13.8362 23.25 13.8041 23.25C13.7721 23.25 13.744 23.2395 13.7243 23.2247L13.7232 23.2239C8.95561 19.6534 5.71243 16.6085 3.45951 13.6348C0.60953 9.86752 0.0842099 6.57848 1.52945 3.72574L1.52974 3.72517C2.51421 1.77779 5.45927 0.058217 9.0188 1.04141C10.7115 1.51286 12.1828 2.52208 13.1959 3.898L13.7998 4.71825L14.4038 3.898C15.417 2.5219 16.8885 1.51259 18.5815 1.04122L18.5834 1.04069C22.1297 0.0433931 25.0841 1.7752 26.0699 3.72517Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                />
                            </svg>
                            <span className="text text_type_main">В избранное</span>
                        </div>
                        <div className="detail-card-main-section__button-item">
                            <svg
                                width="38"
                                height="20"
                                viewBox="0 0 38 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.5933 13.1341L15.5981 18H7.62687L8.09577 13.2963C8.09577 13.2963 4.44705 13.937 3.13887 12.242C1.91262 10.6532 0.877736 7.41974 1.01171 7.17647C1.14568 6.9332 4.88048 6.64623 5.28239 6.40294C5.6843 6.15964 6.28717 2.92273 7.15797 2.51019C8.52748 1.86139 10.0383 1.96453 11.1101 2.10474C12.1819 2.24495 13.4641 2.1858 14.4593 3.48342C15.4546 4.78105 16 13.1341 16 13.1341H14.5933ZM14.5933 13.1341C14.5933 13.1341 13.1212 13.0078 12.3158 12.4853C10.1939 11.1088 11.091 8.18513 10.3063 5.42977"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <line
                                    x1="18.75"
                                    y1="0.75"
                                    x2="18.75"
                                    y2="19.25"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeDasharray="2 2"
                                />
                                <path
                                    d="M22.9067 13.1341L21.9019 18H29.8731L29.4042 13.2963C29.4042 13.2963 33.0529 13.937 34.3611 12.242C35.5874 10.6532 36.6223 7.41974 36.4883 7.17647C36.3543 6.9332 32.6195 6.64623 32.2176 6.40294C31.8157 6.15964 31.2128 2.92273 30.342 2.51019C28.9725 1.86139 27.4617 1.96453 26.3899 2.10474C25.3181 2.24495 24.0359 2.1858 23.0407 3.48342C22.0454 4.78105 21.5 13.1341 21.5 13.1341H22.9067ZM22.9067 13.1341C22.9067 13.1341 24.3788 13.0078 25.1842 12.4853C27.3061 11.1088 26.409 8.18513 27.1937 5.42977"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text text_type_main">Сравнить</span>
                        </div>
                    </div>
                    <DogName isMale={true}>Умка, 2 месяца</DogName>
                    <div className="text text_type_cost text_color_main detail-card-main-section__cost">35 000 ₽</div>
                    <div className="text text_type_h5">Иванов Иван Иванович</div>
                    <div className="text text_type_desc text_color_main detail-card-main-section__farm">Питомник: Собакен</div>
                    <Location>Москва</Location>
                    <div className="text text_type_desc text_color_gray detail-card-main-section__desc">м. Кантемировская, ул. Кошкина 12 </div>
                    <ButtonMain>Показать контакты</ButtonMain>
                    <ul className="detail-card-main-section__table">
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Пол</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Дата рождения</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Размер</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Окрас</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Клеймо/чип</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                        <li className="detail-card-main-section__table-item">
                            <div className="detail-card-main-section__table-title">Вакцинация</div>
                            <div className="detail-card-main-section__table-value text text_type_h6">Девочка</div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="detail-card-main-section__desc-section">
                <div className="text text_type_h5 detail-card-main-section__sub-title">Описание</div>
                <div className="text text_type_main">
                    Продается шикарная девочка лабрадора шоколадного окраса, возраст 1 месяц, 
                    очень красивая и бесконечно добрая. Имеется вет. паспорт и метрика щенка. 
                    По всем вопросам звоните, пишите. 
                </div>
                <div className="text text_type_h5 detail-card-main-section__sub-title">Родители щенка</div>
                <div className="detail-card-main-section__cards">
                    <div className="detail-card-main-section__card-wrapper">
                        <ParentCard />
                    </div>
                    <div className="detail-card-main-section__card-wrapper">
                        <ParentCard />
                    </div>
                </div>
            </section>
        </section>
    );
};
