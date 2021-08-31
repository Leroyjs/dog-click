import Link from "next/link";
import { ComparisonIcon } from "../UI/ComparisonIcon";
import { DeleteIcon } from "../UI/DeleteIcon";
import { FavoriteIcon } from "../UI/FavoriteIcon";
import { declOfNum } from "../../declOfNum";
import { makeMoney } from "../../makeMoney";

import { DogName } from "./DogName";
import { useMemo } from "react";
import { config } from "../../config";

export const Card = ({
  breed,
  city,
  createDate,
  gender,
  id,
  mainPhotoGuid,
  name,
  price,
  monthsAge,
  isFavorite,
  addFaforiteItem,
  removeFavoriteItem,
  isComparison,
  addComparisonItem,
  removeComparisonItem,
  deleteHandler,
}) => {
  function handleFavorite(e) {
    e.preventDefault();
    ym(config.metrikaId, "reachGoal", "click-favorites");
    if (isFavorite) {
      removeFavoriteItem();
    } else {
      addFaforiteItem();
    }
  }

  function handleComparison(e) {
    e.preventDefault();
    ym(config.metrikaId, "reachGoal", "click-compare");
    if (isComparison) {
      removeComparisonItem();
    } else {
      addComparisonItem();
    }
  }
  function handleDelete(e) {
    e.preventDefault();
    deleteHandler();
  }
  const imgStyles = {
    backgroundImage: `url('https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${mainPhotoGuid}')`,
  };
  const ageObj = useMemo(() => {
    const year = Math.floor(monthsAge / 12);
    const month = monthsAge % 12;
    return {
      year,
      month,
    };
  }, [monthsAge]);
  return (
    <Link href={"/detail-card/" + id}>
      <a className="card">
        <div className="card__img" style={imgStyles}>
          {deleteHandler ? (
            <DeleteIcon
              onClick={handleDelete}
              addСlasses="card__icon card__icon_delete"
            />
          ) : (
            <>
              <FavoriteIcon
                isActive={isFavorite}
                onClick={handleFavorite}
                addСlasses="card__icon card__icon_favorite"
              />
              <ComparisonIcon
                isActive={isComparison}
                onClick={handleComparison}
                addСlasses="card__icon card__icon_comparison"
              />
            </>
          )}
        </div>
        <div className="card__text">
          <div className="card__name">
            <DogName isMale={gender}>{name}</DogName>
          </div>
          <span className="card__age text text_type_nav text_color_gray">
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
          </span>
          <div className="card__breed text_color_black">{breed}</div>
          <div className="card__cost text text_type_cost text_color_main">
            {makeMoney(price) !== "0" ? makeMoney(price) + "  ₽" : "Бесплатно"}
          </div>
          <div className="card__desc-row">
            <div className="text text_color_gray">{city}</div>
            <div className="text text_color_gray">{createDate}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};
