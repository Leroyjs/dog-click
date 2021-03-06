import { DropDown } from "../UI/DropDown";
import { RangeInput } from "../UI/RangeInput";
import { Checkbox } from "../UI/Checkbox";
import { useEffect, useState } from "react";
import { ButtonBorder } from "../UI/ButtonBorder";
import {
  getBreeds,
  getCities,
  getDimensions,
  getColors,
} from "../../dictionaries";
import { useRouter } from "next/router";

export const Filters = ({ options, handler }) => {
  const router = useRouter();

  const [showAllColors, setShowAllColors] = useState(false);
  const [breeds, setBreeds] = useState({ items: [] });
  const [cities, setCities] = useState({ items: [] });
  const [dimensions, setDimensions] = useState({ items: [] });
  const [colors, setColors] = useState({ items: [] });

  const [gender, setGender] = useState(options.gender);
  const [breedIds, setBreedIds] = useState(options.breedIds);
  const [cityId, setCityId] = useState(options.cityId);
  const [colorIds, setColorIds] = useState(options.colorIds);
  const [sizeId, setSizeId] = useState(options.sizeId);
  const [priceCheckboxFree, setPriceCheckboxFree] = useState(false);
  const [priceFrom, setPriceFrom] = useState(options.priceFrom);
  const [priceTo, setPriceTo] = useState(options.priceTo);
  const [monthsAgeFrom, setMonthsAgeFrom] = useState(options.monthsAgeFrom);
  const [monthsAgeTo, setMonthsAgeTo] = useState(options.monthsAgeTo);
  const [hasPedigree, setHasPedigree] = useState(options.hasPedigree);

  function handleSubmit(e) {
    e && e.preventDefault();
    setFiltersURL();
    handler && handler();
  }
  function setFiltersURL() {
    let url = "/search";
    url += "?";
    gender !== null && (url += "gender=" + gender + "&");
    breedIds !== null && (url += "breedIds=" + breedIds + "&");
    cityId !== null && (url += "cityId=" + cityId + "&");
    sizeId !== null && (url += "sizeId=" + sizeId + "&");
    !priceCheckboxFree
      ? priceFrom !== null && (url += "priceFrom=" + priceFrom + "&")
      : (url += "priceFrom=0&");

    !priceCheckboxFree
      ? priceTo !== null && (url += "priceTo=" + priceTo + "&")
      : (url += "priceTo=0&");
    monthsAgeFrom !== null && (url += "monthsAgeFrom=" + monthsAgeFrom + "&");
    monthsAgeTo !== null && (url += "monthsAgeTo=" + monthsAgeTo + "&");
    hasPedigree !== null && (url += "hasPedigree=" + hasPedigree + "&");
    colorIds.length !== 0 && (url += "colorIds=" + colorIds + "&");
    router.push(url, undefined, { scroll: false });
  }
  useEffect(() => {
    setFiltersURL();
  }, [
    priceTo,
    priceFrom,
    monthsAgeTo,
    monthsAgeFrom,
    gender,
    breedIds,
    cityId,
    sizeId,
    priceFrom,
    hasPedigree,
    colorIds,
    priceCheckboxFree,
  ]);

  function handleDrop() {
    setGender(null);
    setBreedIds(null);
    setCityId(null);
    setColorIds([]);
    setSizeId(null);
    setPriceFrom(null);
    setPriceTo(null);
    setHasPedigree(null);
    setMonthsAgeFrom(null);
    setMonthsAgeTo(null);
    let url = "/search";
    router.push(url);
    handler && handler();
  }

  function handlePedigreeChange() {
    if (hasPedigree) {
      setHasPedigree(null);
    } else {
      setHasPedigree(true);
    }
  }

  function handleFreeCheckbox() {
    setPriceCheckboxFree(!priceCheckboxFree);
  }

  function handleColorChange(id) {
    let isActive = false;
    const newColorIds = colorIds.slice();
    isActive = newColorIds.indexOf(id);
    if (isActive !== -1) {
      newColorIds.splice(isActive, 1);
    } else {
      newColorIds.push(id);
    }
    setColorIds(newColorIds);
  }

  useEffect(async () => {
    const breedsList = await getBreeds();
    const citiesList = await getCities();
    const dimensionsList = await getDimensions();
    const colorsList = await getColors();
    citiesList.items.unshift({
      id: null,
      name: "?????? ????????????",
    });
    breedsList.items.unshift({
      id: null,
      name: "?????? ????????????",
    });
    dimensionsList.items.unshift({
      id: null,
      name: "?????????? ????????????",
    });
    setBreeds(breedsList);
    setCities(citiesList);
    setDimensions(dimensionsList);
    setColors(colorsList);
  }, []);

  function handleSetPrice(valueMin, valueMax) {
    setPriceTo(valueMax);
    setPriceFrom(valueMin);
  }
  function handleSetMonthsAge(valueMin, valueMax) {
    setMonthsAgeTo(valueMax);
    setMonthsAgeFrom(valueMin);
  }

  return (
    <form onSubmit={handleSubmit} className="filters">
      <div className="filters__title text text_type_main">??????</div>
      <DropDown
        placeholderText="?????? ??????????"
        placeholderImg={dogImg()}
        isBorder={true}
        itemList={genderList}
        initId={gender}
        handler={setGender}
      />
      <div className="filters__title text text_type_main">????????????</div>
      <DropDown
        placeholderText="???????????? ??????????"
        placeholderImg={dogImg()}
        isBorder={true}
        itemList={breeds.items}
        initId={+breedIds}
        handler={setBreedIds}
      />
      <div className="filters__title text text_type_main">????????????????????????????</div>
      <DropDown
        placeholderText="????????????????????????????"
        placeholderImg={locationImg()}
        isBorder={true}
        itemList={cities.items}
        initId={+cityId}
        handler={setCityId}
      />
      <div className="filters__title text text_type_main">
        ???????????? ???????????????? ????????????
      </div>
      <DropDown
        placeholderText="???????????? ??????????"
        placeholderImg={sizeImg()}
        isBorder={true}
        itemList={dimensions.items}
        handler={setSizeId}
        initId={sizeId}
      />
      <div className="filters__title text text_type_main">
        ?????????????? ????????????????, ???{" "}
      </div>
      <div className="filters__price-checkbox">
        <Checkbox isChecked={priceCheckboxFree} onChange={handleFreeCheckbox}>
          ??????????????????
        </Checkbox>
      </div>
      <RangeInput
        isDisabled={priceCheckboxFree}
        max={500000}
        handler={handleSetPrice}
        initMin={+priceFrom}
        initMax={+priceTo}
      />
      <div className="filters__title text text_type_main">??????????????, ??????. </div>
      <RangeInput
        initMin={+monthsAgeFrom}
        handler={handleSetMonthsAge}
        initMax={+monthsAgeTo}
      />
      <div className="filters__title text text_type_main">??????????</div>
      {colors.items.map((item, index) => {
        if (index <= 4) {
          return (
            <div key={item.id} className="filters__checkbox-wrapper">
              <Checkbox
                isChecked={colorIds.indexOf(item.id) != -1}
                onChange={() => {
                  handleColorChange(item.id);
                }}
              >
                {item.name}
              </Checkbox>
            </div>
          );
        }
      })}
      {showAllColors && (
        <>
          {colors.items.map((item, index) => {
            if (index > 4) {
              return (
                <div key={item.id} className="filters__checkbox-wrapper">
                  <Checkbox
                    isChecked={colorIds.indexOf(item.id) != -1}
                    onChange={() => {
                      handleColorChange(item.id);
                    }}
                  >
                    {item.name}
                  </Checkbox>
                </div>
              );
            }
          })}
        </>
      )}
      <div
        onClick={() => setShowAllColors(!showAllColors)}
        className="filters__show-all text text_type_main text_color_main"
      >
        {showAllColors ? "????????????" : "???????????????? ??????"}
      </div>
      <div className="filters__title">??????????????????????????</div>
      <div className="filters__checkbox-wrapper">
        <Checkbox isChecked={hasPedigree} onChange={handlePedigreeChange}>
          ?????????????????????? / ??????????????
        </Checkbox>
      </div>
      <ButtonBorder add??lasses="filters__button filters__button_mobile">
        ??????????????????
      </ButtonBorder>
      <ButtonBorder
        onClick={handleDrop}
        add??lasses="filters__button filters__button_desk"
      >
        ????????????????
      </ButtonBorder>
      <div
        onClick={handleDrop}
        className="filters__button-drop text_type_main text_color_main filters__button_mobile"
      >
        ????????????????
      </div>
    </form>
  );
};
const sizeImg = () => (
  <svg viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.75 18V2C0.75 1.30964 1.30964 0.75 2 0.75H9C9.69036 0.75 10.25 1.30964 10.25 2V4V18C10.25 18.6904 9.69036 19.25 9 19.25H2C1.30964 19.25 0.75 18.6904 0.75 18Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.81818 4H10V6.88M10 6.88H5.90909M10 6.88V9.76M10 9.76H6.81818M10 9.76V12.64M10 12.64H5M10 12.64V16H6.81818"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const locationImg = () => (
  <svg viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 18.7998C6.37651 18.6412 6.2365 18.4589 6.08333 18.2556C5.48306 17.4591 4.68367 16.3445 3.88557 15.0706C3.08624 13.7947 2.29627 12.3719 1.7081 10.958C1.11626 9.53533 0.75 8.17155 0.75 7C0.75 3.4909 3.37202 0.75 6.5 0.75C9.62798 0.75 12.25 3.4909 12.25 7C12.25 8.17155 11.8837 9.53533 11.2919 10.958C10.7037 12.3719 9.91376 13.7947 9.11443 15.0706C8.31633 16.3445 7.51694 17.4591 6.91667 18.2556C6.7635 18.4589 6.62349 18.6412 6.5 18.7998ZM4.30891 9.27811C4.87989 9.89301 5.66672 10.25 6.5 10.25C7.33328 10.25 8.12011 9.89301 8.69109 9.27811C9.26033 8.66508 9.57143 7.84476 9.57143 7C9.57143 6.15524 9.26033 5.33493 8.69109 4.7219C8.12011 4.10699 7.33328 3.75 6.5 3.75C5.66672 3.75 4.87989 4.10699 4.30891 4.7219C3.73966 5.33493 3.42857 6.15524 3.42857 7C3.42857 7.84476 3.73966 8.66508 4.30891 9.27811Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
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
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
    name: "??????????????",
    img: maleImg(),
  },
  {
    id: false,
    name: "??????????????",
    img: femaleImg(),
  },
  {
    id: null,
    name: "?????????? ??????",
    img: biGenderImg(),
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
