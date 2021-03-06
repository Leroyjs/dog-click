import { BackButton } from "../../components/UI/BackButton";
import { Description } from "../UI/Description";

import { ClearList } from "../UI/ClearList";
import { Card } from "../common/Card";
import { connect } from "react-redux";
import { setComparisonItems, removeComparisonItem } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Flickity from "react-flickity-component";
import { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import axios from "axios";
import { DogName } from "../common/DogName";
import { useRouter } from "next/router";

const mapStateToProps = (state) => {
  return {
    comparisonIdList: state.comparison.map((item) => item.id),
  };
};

export const –°omparisonMainSection = connect(mapStateToProps, {
  setComparisonItems,
  removeComparisonItem,
})(({ comparisonIdList }) => {
  const router = useRouter();
  const [flickity, setFlickity] = useState(false);
  const [flickityHeader, setFlickityHeader] = useState(false);
  const [arrowRightIsDisabled, setArrowRightIsDisabled] = useState(false);
  const [arrowLeftIsDisabled, setArrowLeftIsDisabled] = useState(true);
  const [comparisonList, setComparisonList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [maxCount, setMaxCount] = useState(4);
  const [headerSliderIsActive, setHeaderSliderIsActive] = useState(false);
  const slider = useRef(false);

  useEffect(() => {
    initMaxCount();
    window.addEventListener("resize", initMaxCount);
    window.addEventListener("scroll", setStateOfHeaderSlider);
    return () => {
      window.removeEventListener("resize", initMaxCount);
      window.removeEventListener("scroll", setStateOfHeaderSlider);
    };
  }, []);
  function setStateOfHeaderSlider() {
    const sliderRect = slider.current.getBoundingClientRect();
    if (sliderRect.top + sliderRect.height > 0) {
      setHeaderSliderIsActive(false);
    } else {
      setHeaderSliderIsActive(true);
    }
  }
  function initMaxCount() {
    let newMaxCount = 4;
    window.matchMedia("(max-width: 1700px)").matches && (newMaxCount = 3);
    window.matchMedia("(max-width: 1000px)").matches && (newMaxCount = 2);
    window.matchMedia("(max-width: 600px)").matches && (newMaxCount = 1);
    setMaxCount(newMaxCount);
  }
  function initIndexes() {
    let offset = maxCount - (comparisonList.length - activeIndex * maxCount);
    if (offset < 0) {
      offset = 0;
    }
    const minIndex = activeIndex * maxCount - offset;
    const maxIndex = activeIndex * maxCount + maxCount - offset;
    const newIndexes = [];
    for (let i = minIndex; i < maxIndex; i++) {
      newIndexes.push(i);
    }
    setActiveIndexes(newIndexes);
  }
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    groupCells: true,
    cellAlign: comparisonIdList.length < maxCount ? "left" : "right",
    pageDots: false,
    draggable: false,
  };

  useEffect(() => {
    if (flickity) {
      setArrows(0);
      flickity.on("change", handleChengeSlide);
    }
  }, [flickity]);
  useEffect(() => {
    setData();
  }, [comparisonIdList]);

  useEffect(initIndexes, [activeIndex, comparisonList, maxCount]);

  function handleChengeSlide(index) {
    setActiveIndex(index);
    setArrows(index);
    flickityHeader.select(index);
  }
  function handleBack() {
    router.back();
  }
  function setData() {
    if (comparisonIdList.length) {
      axios
        .post(`${config.domain}/api/public/pets`, {
          petsIds: comparisonIdList,
        })
        .then(function (response) {
          setComparisonList(response.data.items);
          flickity.resize();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function setArrows(index) {
    if (index === 0) {
      setArrowLeftIsDisabled(true);
    } else {
      setArrowLeftIsDisabled(false);
    }
    if (index + 1 === Math.ceil(comparisonIdList.length / maxCount)) {
      setArrowRightIsDisabled(true);
    } else {
      setArrowRightIsDisabled(false);
    }
  }
  function handleArrowRightClick() {
    flickity.next();
  }

  function handleArrowLeftClick() {
    flickity.previous();
  }

  const dispatch = useDispatch();
  function handleClearAll() {
    dispatch(setComparisonItems([]));
    setComparisonList([]);
  }
  function handleDelete(item) {
    flickity.options.cellAlign =
      comparisonIdList.length - 1 < maxCount ? "left" : "right";
    flickityHeader.options.cellAlign =
      comparisonIdList.length - 1 < maxCount ? "left" : "right";
    dispatch(removeComparisonItem(item));
  }

  return (
    <section className="comparison-main-section main-padding">
      <div
        className={
          "comparison-main-section__header-slider main-padding" +
          (headerSliderIsActive
            ? " comparison-main-section__header-slider_active"
            : "")
        }
      >
        <div className="comparison-main-section__header-slider-inner">
          {comparisonList.length > maxCount && (
            <>
              <div
                onClick={handleArrowRightClick}
                className={
                  "comparison-main-section__arrow_right comparison-main-section__arrow" +
                  (arrowRightIsDisabled
                    ? " comparison-main-section__arrow_disabled"
                    : "")
                }
              >
                <svg
                  width="18"
                  height="34"
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999999 1L17 17L1 33"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                onClick={handleArrowLeftClick}
                className={
                  "comparison-main-section__arrow_left comparison-main-section__arrow" +
                  (arrowLeftIsDisabled
                    ? " comparison-main-section__arrow_disabled"
                    : "")
                }
              >
                <svg
                  width="18"
                  height="34"
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 33L1 17L17 1"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          )}
          <Flickity
            flickityRef={(flickity) => setFlickityHeader(flickity)}
            elementType={"div"}
            options={flickityOptions}
          >
            {comparisonList.map((item) => {
              const imgStyles = {
                backgroundImage: `url('https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${item.mainImageGuid}')`,
              };
              return (
                <div
                  key={item.id}
                  className="comparison-main-section__header-item"
                >
                  <div
                    className="comparison-main-section__header-item-img"
                    style={imgStyles}
                  ></div>
                  <div className="comparison-main-section__header-item-text text text_type_main">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </Flickity>
        </div>
      </div>
      <BackButton onClick={handleBack}>–Ě–į–∑–į–ī –ļ –Ņ—Ä–Ķ–ī—č–ī—É—Č–Ķ–Ļ —Ā—ā—Ä–į–Ĺ–ł—Ü–Ķ</BackButton>
      <h2 className="comparison-main-section__title text_type_h4">–°—Ä–į–≤–Ĺ–Ķ–Ĺ–ł–Ķ</h2>
      <div className="comparison-main-section__row">
        <Description>{comparisonIdList.length} –ĺ–Ī—ä—Ź–≤–Ľ–Ķ–Ĺ–ł–Ļ</Description>
        {comparisonIdList.length !== 0 && (
          <ClearList onClick={handleClearAll}>–ě—á–ł—Ā—ā–ł—ā—Ć —Ā–Ņ–ł—Ā–ĺ–ļ</ClearList>
        )}
      </div>
      <div className="comparison-main-section__slider" ref={slider}>
        {comparisonList.length > maxCount && (
          <>
            <div
              onClick={handleArrowRightClick}
              className={
                "comparison-main-section__arrow_right comparison-main-section__arrow comparison-main-section__arrow_desktop" +
                (arrowRightIsDisabled
                  ? " comparison-main-section__arrow_disabled"
                  : "")
              }
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 1L17 17L1 33"
                  stroke="#AF5B29"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={handleArrowLeftClick}
              className={
                "comparison-main-section__arrow_left comparison-main-section__arrow comparison-main-section__arrow_desktop" +
                (arrowLeftIsDisabled
                  ? " comparison-main-section__arrow_disabled"
                  : "")
              }
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 33L1 17L17 1"
                  stroke="#AF5B29"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        )}
        {comparisonIdList.length !== 0 && (
          <Flickity
            flickityRef={(flickity) => setFlickity(flickity)}
            elementType={"div"}
            options={flickityOptions}
          >
            {comparisonList.map((item) => (
              <div
                key={item.id}
                className="comparison-main-section__item-wrapper"
              >
                <Card
                  deleteHandler={() => {
                    handleDelete(item);
                  }}
                  id={item.id}
                  breed={item.breed}
                  mainPhotoGuid={item.mainImageGuid}
                  city={item.city}
                  createDate={item.createDate}
                  gender={item.gender}
                  name={item.name}
                  price={item.price}
                  monthsAge={item.monthsAge}
                  ownerFio={item.ownerFio}
                />
              </div>
            ))}
          </Flickity>
        )}
      </div>
      {comparisonList.length > maxCount && (
        <div className="comparison-main-section__arrow_mobile comparison-main-section__arrow-mobile-block">
          <div
            onClick={handleArrowLeftClick}
            className={
              "comparison-main-section__arrow_left comparison-main-section__arrow" +
              (arrowLeftIsDisabled
                ? " comparison-main-section__arrow_disabled"
                : "")
            }
          >
            <svg
              width="18"
              height="34"
              viewBox="0 0 18 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 33L1 17L17 1"
                stroke="#AF5B29"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="comparison-main-section__count text text_type_h5">
            <span className="text text_color_main">{activeIndex + 1} </span>
            <span className="text text_color_gray">
              / {comparisonIdList.length}
            </span>
          </div>
          <div
            onClick={handleArrowRightClick}
            className={
              "comparison-main-section__arrow_right comparison-main-section__arrow" +
              (arrowRightIsDisabled
                ? " comparison-main-section__arrow_disabled"
                : "")
            }
          >
            <svg
              width="18"
              height="34"
              viewBox="0 0 18 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999999 1L17 17L1 33"
                stroke="#AF5B29"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      {comparisonIdList.length !== 0 && (
        <div className="comparison-main-section__table text text_type_main text_color_black">
          <div className="comparison-main-section__table-row">–ü–ĺ–Ľ</div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].gender ? (
                      <DogName isMale="true">–ú–į–Ľ—Ć—á–ł–ļ</DogName>
                    ) : (
                      <DogName isMale="false">–Ē–Ķ–≤–ĺ—á–ļ–į</DogName>
                    )}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">
            –Ē–į—ā–į —Ä–ĺ–∂–ī–Ķ–Ĺ–ł—Ź
          </div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].birthDate}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">–ě–ļ—Ä–į—Ā</div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].color}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">–ö–Ľ–Ķ–Ļ–ľ–ĺ/—á–ł–Ņ</div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].chipped ? checkMarkImg() : minusImg()}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">–í–į–ļ—Ü–ł–Ĺ–į—Ü–ł—Ź</div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].vaccinated
                      ? checkMarkImg()
                      : minusImg()}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">
            –ď–Ķ–Ĺ–Ķ—ā–ł—á–Ķ—Ā–ļ–ł–Ļ —ā–Ķ—Ā—ā
          </div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].genTested
                      ? checkMarkImg()
                      : minusImg()}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">
            –ź–ļ—ā–ł—Ä–ĺ–≤–į–Ĺ
            <div className="comparison-main-section__help">
              <div className="help-modal text_type_desc">
                –ü—Ä–ĺ–≤–Ķ–ī–Ķ–Ĺ–į –Ņ—Ä–ĺ–≤–Ķ—Ä–ļ–į —Č–Ķ–Ĺ–ļ–į –Ĺ–į —Ā–ĺ–ĺ—ā–≤–Ķ—ā—Ā—ā–≤–ł–Ķ –Ņ–į—Ä–į–ľ–Ķ—ā—Ä–į–ľ –ł —Ā—ā–į–Ĺ–ī–į—Ä—ā–į–ľ
                –Ņ–ĺ—Ä–ĺ–ī—č –Ņ—Ä–Ķ–ī—Ā—ā–į–≤–ł—ā–Ķ–Ľ—Ź–ľ–ł –ļ–ł–Ĺ–ĺ–Ľ–ĺ–≥–ł—á–Ķ—Ā–ļ–ĺ–≥–ĺ –ļ–Ľ—É–Ī–į
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
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].activated
                      ? checkMarkImg()
                      : minusImg()}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">
            –Ē–ĺ–≥–ĺ–≤–ĺ—Ä –ļ—É–Ņ–Ľ–ł-–Ņ—Ä–ĺ–ī–į–∂–ł
          </div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].buySellDeal
                      ? checkMarkImg()
                      : minusImg()}
                  </div>
                )
              );
            })}
          </div>
          <div className="comparison-main-section__table-row">–Ē–ĺ—Ā—ā–į–≤–ļ–į</div>
          <div className="comparison-main-section__table-row">
            {activeIndexes.map((item) => {
              return (
                comparisonList[item] && (
                  <div
                    key={comparisonList[item].id}
                    className="comparison-main-section__table-item"
                  >
                    {comparisonList[item].delivery
                      ? checkMarkImg()
                      : minusImg()}
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
});

const minusImg = () => (
  <svg
    width="21"
    height="1"
    viewBox="0 0 21 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.75"
      y1="0.5"
      x2="19.75"
      y2="0.5"
      stroke="black"
      strokeLinecap="round"
    />
  </svg>
);

const checkMarkImg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 11.2308L8.15385 18L18 2"
      stroke="#AF5B29"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
