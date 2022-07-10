import {useState} from "react";
import InputMask from "react-input-mask";
import Link from "next/link";
import axios from "axios";
import {ButtonMain} from "../UI/ButtonMain";
import {config} from "../../config";
import {Checkbox} from "../UI/Checkbox";
import {useRouter} from "next/router";

export const RegistrationSection = () => {
    const router = useRouter()
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [code, setCode] = useState("");
    const [token, setToken] = useState(false);
    const [isError, setError] = useState(false);
    const [isConfirm, setConfirm] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (token) {
            logIn();
        } else {
            sendForm();
        }
    }

    async function logIn() {
        setLoading(true);
        await axios
            .post(`${config.domain}/api/public/pet-owners/complete-auth`, {
                token,
                code,
            })
            .then(function (response) {
                localStorage.setItem("sessionToken", response.data.token);
                router.push('/personal-area/signin')
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    async function sendForm() {
        setLoading(true);
        const number = phone.replace(/[^+\d]/g, "");
        await axios
            .post(`${config.domain}/api/public/pet-owners/init-mail-signup`, {
                email,
                fio: fullName,
                phone: number.slice(1, number.length),
            })
            .then(function (response) {
                setToken(response.data.token);
            })
            .catch(function (error) {
                setError(true);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function handleEmail(e) {
        const value = e.target.value;
        setEmail(value);
        setError(false);
    }

    return (
        <section className="login-section main-padding">
            <h2 className="login-section__title text_type_h4">Регистрация</h2>
            {!token && <div className="login-section__desc text_type_main text_color_gray">
                Укажите ваши данные
            </div>}
            <form className="login-section__main" onSubmit={onSubmit}>
                {token ? <>
                    <div className="login-section__desc2 text_type_main">
                        {`Мы отправили вам код на почту ${email} для подтверждения учетной записи.`}
                        <br/>
                        <span className="text_color_main">Пожалуйста, введите код:</span>
                    </div>
                    <div className="drop-down drop-down_border login-section__code-input">
                        <input
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            type="text"
                            placeholder="Введите код из email"
                            className="drop-down__input text text_type_main login-section__input"
                        />
                    </div>
                </> : <>
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
                    <div className="drop-down drop-down_border login-section__button-wrapper">
                        <InputMask
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            name="fio"
                            type="text"
                            className="drop-down__input text text_type_main login-section__input"
                            placeholder="ФИО"
                            required
                        />
                    </div>
                    <div className="drop-down drop-down_border login-section__button-wrapper">
                        <InputMask
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            mask="+7 (999) 99-99-999"
                            type="text"
                            className="drop-down__input text text_type_main login-section__input"
                            placeholder="+7 (___) __-__-___"
                        />
                    </div>
                    <div className="filters__checkbox-wrapper login-section__button-wrapper">
                        <Checkbox isChecked={isConfirm} onChange={(e) => setConfirm(e.target.checked)}>
                        <span className="text text_type_sub-desc">
                            Согласен на обработку <Link href="/pp.pdf"><a className="text_color_main" href="">персональных данных</a></Link>
                        </span>
                        </Checkbox>
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
                </>}

                <div className="login-section__button-wrapper">
                    <ButtonMain
                        isDisabled={!isConfirm || isLoading}>{!token ? isLoading ? "Отправка..." : "Регистрация" : "Войти"}</ButtonMain>
                </div>

                {!token && <div className="login-section__button-wrapper login-section__sign-up">
                    <Link href="/personal-area/signin">
                        <a className="text text_type_main text_color_main">
                            Войти
                        </a>
                    </Link>
                </div>}
            </form>
        </section>
    );
};
