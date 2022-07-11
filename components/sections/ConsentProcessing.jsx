import axios from "axios";
import { useState } from "react";
import { config } from "../../config";
import { ButtonMain } from "../UI/ButtonMain";
import { Checkbox } from "../UI/Checkbox";
import Link from "next/link";

export const ConsentProcessing = ({ token }) => {
  const [isChecked, setChecked] = useState(false);

  function handleClick() {
    if (isChecked) {
      axios
        .post(`${config.domain}/api/public/pet-owners/confirm-data`, {
          token,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <section className="main-padding consent-processing">
      <div className="consent-processing__inner">
        <Checkbox isChecked={isChecked} onChange={() => setChecked(!isChecked)}>
          Для работе в личном кабинете Вам необходимо подтвердить{" "}
          <a href="/agreement.pdf" className="text_color_main" target="_blank">
            согласие на обработку персональных данных
          </a>
        </Checkbox>
        <div className="consent-processing__button-wrapper">
          <ButtonMain onClick={handleClick} isDisabled={!isChecked}>
            Отправить согласие
          </ButtonMain>
        </div>
      </div>
    </section>
  );
};
