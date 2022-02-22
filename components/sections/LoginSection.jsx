import { ButtonMain } from "../UI/ButtonMain";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";
import { config } from "../../config";

export const LoginSection = ({ setNewToken }) => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (token) {
      logIn();
    } else {
      sendPhone();
    }
  }

  async function sendPhone() {
    const number = phone.replace(/[^+\d]/g, "");
    await axios
      .post(`${config.domain}/api/public/pet-owners/init-auth`, {
        phone: number.slice(1, number.length),
      })
      .then(function (response) {
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function logIn() {
    console.log({
      token,
      code,
    });
    await axios
      .post(`${config.domain}/api/public/pet-owners/complete-auth`, {
        token,
        code,
      })
      .then(function (response) {
        setNewToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className="login-section main-padding">
      <h2 className="login-section__title text_type_h4">Вход</h2>
      <div className="login-section__desc text_type_main text_color_gray">
        Введите номер телефона
      </div>
      <form className="login-section__main" onSubmit={onSubmit}>
        <div className="drop-down drop-down_border">
          <InputMask
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+7 (999) 99-99-999"
            type="text"
            className="drop-down__input text text_type_main login-section__input"
            placeholder="+7 (___) __-__-___"
          />
        </div>
        {token && (
          <div className="drop-down drop-down_border login-section__code-input">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="password"
              className="drop-down__input text text_type_main login-section__input"
            />
          </div>
        )}
        <div className="login-section__button-wrapper">
          <ButtonMain>{!token ? "Отправить код" : "Войти"}</ButtonMain>
        </div>
      </form>
    </section>
  );
};
