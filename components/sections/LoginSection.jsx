import {ButtonMain} from "../UI/ButtonMain";
import InputMask from "react-input-mask";
import {useState} from "react";
import Link from "next/link";
import axios from "axios";
import {config} from "../../config";

export const LoginSection = ({setNewToken}) => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [token, setToken] = useState(false);
    const [isError, setError] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (token) {
            logIn();
        } else {
            sendEmail();
        }
    }

    async function sendEmail() {
        await axios
            .post(`${config.domain}/api/public/pet-owners/init-mail-auth`, {
                email
            })
            .then(function (response) {
                setToken(response.data.token);
            })
            .catch(function (error) {
                setError(true);
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

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError(false);
    }

    return (
        <section className="login-section main-padding">
            <h2 className="login-section__title text_type_h4">Вход</h2>
            <div className="login-section__desc text_type_main text_color_gray">
                Введите email
            </div>
            <form className="login-section__main" onSubmit={onSubmit}>
                <div className="drop-down drop-down_border">
                    <InputMask
                        value={email}
                        onChange={handleEmail}
                        name="email"
                        pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                        type="email"
                        className="drop-down__input text text_type_main login-section__input"
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                {token && (
                    <div className="drop-down drop-down_border login-section__code-input">
                        <input
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            type="text"
                            placeholder="Введите код из email"
                            className="drop-down__input text text_type_main login-section__input"
                        />
                    </div>
                )}
                <div className="login-section__button-wrapper">
                    <ButtonMain>{!token ? "Отправить код" : "Войти"}</ButtonMain>
                </div>

                {
                    isError && (
                        <div className="login-section__button-wrapper login-section__sign-up">
                                <span className="text text_type_main text_color_error">
                                    Пользователя с таким email не существует
                                </span>
                        </div>
                    )
                }

                <div className="login-section__button-wrapper login-section__sign-up">
                    <Link href="/personal-area/signup">
                        <a className="text text_type_main text_color_main">
                            Регистрация
                        </a>
                    </Link>
                </div>
            </form>
        </section>
    );
};
