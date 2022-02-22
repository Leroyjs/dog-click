import Link from "next/link";
import { DetailSlider } from "../common/DetailSlider";
import { DogName } from "../common/DogName";
import { Location } from "../common/Location";
import { BackButton } from "../UI/BackButton";
import { Description } from "../UI/Description";
import { ButtonMain } from "../UI/ButtonMain";
import { useMemo, useState } from "react";
import { SocialLink } from "../common/SocialLink";
import { useRouter } from "next/router";

import { declOfNum } from "../../declOfNum";
import { makeMoney } from "../../makeMoney";

import { connect } from "react-redux";
import {
  addFaforiteItem,
  removeFavoriteItem,
  addComparisonItem,
  removeComparisonItem,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { config } from "../../config";

const mapStateToProps = (state) => {
  return {
    favoriteIdList: state.favorite.map((item) => item.id),
    comparisonIdList: state.comparison.map((item) => item.id),
  };
};

export const DetailCardMainSection = connect(mapStateToProps, {
  addFaforiteItem,
  removeFavoriteItem,
})(({ data, favoriteIdList, comparisonIdList }) => {
  const [contactsIsShow, setContactsIsShow] = useState(false);
  const otherImgs = data.petImages;
  const mainImg = data.mainImageGuid;
  const images = [{ guid: mainImg }, ...otherImgs];
  const router = useRouter();
  const dispatch = useDispatch();
  const isFavorite = favoriteIdList.indexOf(data.id) != -1;
  const isComparison = comparisonIdList.indexOf(data.id) != -1;

  function handleFavorite() {
    ym(config.metrikaId, "reachGoal", "click-favorites");
    if (isFavorite) {
      dispatch(removeFavoriteItem(data));
    } else {
      dispatch(addFaforiteItem(data));
    }
  }
  function handleComparison() {
    ym(config.metrikaId, "reachGoal", "click-compare");
    if (isComparison) {
      dispatch(removeComparisonItem(data));
    } else {
      dispatch(addComparisonItem(data));
    }
  }

  function handleShowContacts() {
    setContactsIsShow(true);
    ym(config.metrikaId, "reachGoal", "click-show-contacts");
    window.gtag("event", "conversion", {
      send_to: config.gMetrikaId + "/AKPeCLKduPICEL2C3JEB",
      transaction_id: "",
    });
  }
  function handleBack() {
    router.back();
  }
  const ageObj = useMemo(() => {
    const year = Math.floor(data.monthsAge / 12);
    const month = data.monthsAge % 12;
    return {
      year,
      month,
    };
  }, [data.monthsAge]);
  let phoneNumber = "";
  if (data.phone) {
    phoneNumber = `+${data.phone[0]} (${
      data.phone[1] + data.phone[2] + data.phone[3]
    }) ${data.phone[4] + data.phone[5] + data.phone[6]}-${
      data.phone[7] + data.phone[8]
    }-${data.phone[9] + data.phone[10]}`;
  }

  return (
    <section className="detail-card-main-section main-padding">
      <BackButton onClick={handleBack}>Назад к предыдущей странице</BackButton>
      <h2 className="detail-card-main-section__title text_type_h4">
        {data.breed}
      </h2>
      <div className="detail-card-main-section__row-head">
        <Description>Опубликовано {data.createDate}</Description>
        <div className="detail-card-main-section__buttons detail-card-main-section__buttons_desktop">
          <div
            onClick={handleFavorite}
            className={
              "detail-card-main-section__button-item" +
              (isFavorite
                ? " detail-card-main-section__button-item_active"
                : "")
            }
          >
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
          <div
            onClick={handleComparison}
            className={
              "detail-card-main-section__button-item" +
              (isComparison
                ? " detail-card-main-section__button-item_active"
                : "")
            }
          >
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
          <DetailSlider
            images={images}
            video={data.videoUrl}
            preview={data.videoPreviewUrl}
          />
        </div>
        <div className="detail-card-main-section__info">
          <div className="detail-card-main-section__buttons detail-card-main-section__buttons_mobile">
            <div
              onClick={handleFavorite}
              className={
                "detail-card-main-section__button-item" +
                (isFavorite
                  ? " detail-card-main-section__button-item_active"
                  : "")
              }
            >
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
            <div
              onClick={handleComparison}
              className={
                "detail-card-main-section__button-item" +
                (isComparison
                  ? " detail-card-main-section__button-item_active"
                  : "")
              }
            >
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
          <div className="detail-card-main-section__name">
            <DogName isMale={data.gender}>
              {data.name},{" "}
              {ageObj.year !== 0 &&
                `${ageObj.year} ${declOfNum(ageObj.year, [
                  "год",
                  "года",
                  "лет",
                ])} `}
              {ageObj.month !== 0 &&
                `${ageObj.month} ${declOfNum(ageObj.month, [
                  "месяц",
                  "месяца",
                  "месяцев",
                ])}`}
            </DogName>
          </div>
          <div className="text text_type_cost text_color_main detail-card-main-section__cost">
            {makeMoney(data.price) !== "0"
              ? makeMoney(data.price) + "  ₽"
              : "Бесплатно"}
          </div>
          {data.ownerFio && (
            <div className="text text_type_h5 detail-card-main-section__fio">
              {data.ownerFio}
            </div>
          )}
          {data.nursery && (
            <div className="text text_type_desc text_color_main detail-card-main-section__farm">
              Питомник: {data.nursery}
            </div>
          )}
          <div className="detail-card-main-section__adress">
            <Location>{data.city}</Location>
          </div>
          <div className="text text_type_desc text_color_gray detail-card-main-section__desc">
            {data.address}
          </div>
          {contactsIsShow ? (
            <div className="detail-card-main-section__contacts-wrapper">
              {data.phone && (
                <Link href={`tel:${data.phone}`}>
                  <a
                    target="_blank"
                    className="text text_type_main text_color_black detail-card-main-section__contact"
                  >
                    {phoneNumber}
                  </a>
                </Link>
              )}
              {data.email && (
                <Link href={`mailto:${data.email}`}>
                  <a
                    target="_blank"
                    className="text text_type_main text_color_black detail-card-main-section__contact"
                  >
                    {data.email}
                  </a>
                </Link>
              )}
              {data.site && (
                <Link href={data.site}>
                  <a
                    target="_blank"
                    className="text text_type_main text_color_black detail-card-main-section__contact"
                  >
                    {data.site}
                  </a>
                </Link>
              )}
              <ul className="detail-card-main-section__socil-links">
                {data.facebookUrl && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="FB" href={data.facebookUrl} />
                  </li>
                )}
                {data.instagram && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="IG" href={data.instagram} />
                  </li>
                )}
                {data.telegram && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="TG" href={data.telegram} />
                  </li>
                )}
                {data.vkUrl && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="VK" href={data.vkUrl} />
                  </li>
                )}
                {data.whatsappPhoneNumber && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink
                      type="WA"
                      href={"https://wa.me/" + data.whatsappPhoneNumber}
                    />
                  </li>
                )}
                {data.youtubeUrl && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="YT" href={data.youtubeUrl} />
                  </li>
                )}
                {/* {data.viber && (
                  <li className="detail-card-main-section__socil-link-item">
                    <SocialLink type="VB" href={data.youtubeUrl} />
                  </li>
                )} */}
              </ul>
            </div>
          ) : (
            <ButtonMain onClick={handleShowContacts}>
              Показать контакты
            </ButtonMain>
          )}
          <ul className="detail-card-main-section__table">
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">Пол</div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.gender ? "Мальчик" : "Девочка"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Дата рождения
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.birthDate || "Не указано"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Размер
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.size || "Не указано"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">Окрас</div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.color || "Не указано"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Клеймо/чип
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.chipped ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Вакцинация
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.vaccinated ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Генетический тест
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.genTested ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Актирован
                <div className="comparison-main-section__help">
                  <div className="help-modal text_type_desc">
                    Проведена проверка щенка на соответствие параметрам и
                    стандартам породы представителями кинологического клуба
                  </div>
                  <svg
                    width="14"
                    height="28"
                    viewBox="0 0 14 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="7.5"
                      width="13"
                      height="13"
                      rx="6.5"
                      stroke="#AF5B29"
                    />
                    <path
                      d="M6.192 15.906C6.192 15.5327 6.25267 15.206 6.374 14.926C6.50467 14.6367 6.65867 14.394 6.836 14.198C7.02267 14.002 7.26533 13.7687 7.564 13.498C7.93733 13.1713 8.21267 12.8913 8.39 12.658C8.56733 12.4153 8.656 12.126 8.656 11.79C8.656 11.3327 8.47867 10.9687 8.124 10.698C7.76933 10.418 7.27933 10.278 6.654 10.278C5.562 10.278 4.72667 10.6467 4.148 11.384L3.126 10.656C3.518 10.152 4.01733 9.76467 4.624 9.494C5.24 9.22333 5.94933 9.088 6.752 9.088C7.76933 9.088 8.57667 9.312 9.174 9.76C9.77133 10.1987 10.07 10.8053 10.07 11.58C10.07 11.9627 10.0047 12.3033 9.874 12.602C9.75267 12.8913 9.60333 13.134 9.426 13.33C9.24867 13.526 9.01067 13.7593 8.712 14.03C8.32933 14.3753 8.04467 14.6787 7.858 14.94C7.68067 15.2013 7.592 15.5233 7.592 15.906H6.192ZM6.906 19.084C6.64467 19.084 6.42533 19 6.248 18.832C6.08 18.6547 5.996 18.44 5.996 18.188C5.996 17.936 6.08 17.726 6.248 17.558C6.42533 17.3807 6.64467 17.292 6.906 17.292C7.16733 17.292 7.382 17.3807 7.55 17.558C7.718 17.726 7.802 17.936 7.802 18.188C7.802 18.44 7.71333 18.6547 7.536 18.832C7.368 19 7.158 19.084 6.906 19.084Z"
                      fill="#AF5B29"
                    />
                  </svg>
                </div>
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.activated ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Договор купли-продажи
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.buySellDeal ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Доставка
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.delivery ? "Да" : "Нет"}
              </div>
            </li>
            <li className="detail-card-main-section__table-item">
              <div className="detail-card-main-section__table-title">
                Стерилизован
              </div>
              <div className="detail-card-main-section__table-value text text_type_h6">
                {data.sterilized ? "Да" : "Нет"}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
