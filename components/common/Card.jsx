import Link from "next/link";
import { useState } from "react";
import { ComparisonIcon } from "../UI/ComparisonIcon";
import { DeleteIcon } from "../UI/DeleteIcon";
import { FavoriteIcon } from "../UI/FavoriteIcon";
import { declOfNum } from "../../declOfNum";
import { makeMoney } from "../../makeMoney";

import { DogName } from "./DogName";

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
    if (isFavorite) {
      removeFavoriteItem();
    } else {
      addFaforiteItem();
    }
  }

  function handleComparison(e) {
    e.preventDefault();
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
    backgroundImage: `url('https://res.cloudinary.com/leninsdo/image/upload/petstory/${mainPhotoGuid}')`,
  };
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
          <DogName isMale={gender}>
            {name}{" "}
            <span className="text text_type_nav text_color_gray">
              ({monthsAge}{" "}
              {declOfNum(monthsAge, ["месяц", "месяца", "месяцев"])})
            </span>
          </DogName>
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
