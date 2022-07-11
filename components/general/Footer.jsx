import Image from "next/image";
import Link from "next/link";
import logoImg from "../../media/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-row">
        <div className="footer__logo-line footer__logo-line_left"></div>
        <Link href="/">
          <a className="footer__logo">
            <Image src={logoImg} alt="dog-click"></Image>
          </a>
        </Link>
        <div className="footer__logo-line footer__logo-line_right"></div>
      </div>
      <div className="footer__link-row">
        <Link href="/">
          <a
            href=""
            className="footer__link text text_type_sub-desc text_color_main"
          >
            Пользовательское соглашение
          </a>
        </Link>
        <div className="footer__link-main">
          <Link href="/search?">
            <a className="text text_type_nav text_color_black">Найти щенка</a>
          </Link>
          <Link href="/about">
            <a className="text text_type_nav text_color_black">О нас</a>
          </Link>
          <Link href="/medical-card">
            <a className="text text_type_nav text_color_black">Медкарта</a>
          </Link>
          <Link href="/blog">
            <a className="text text_type_nav text_color_black">Блог</a>
          </Link>
          <Link href="/help">
            <a className="text text_type_nav text_color_black">Помощь</a>
          </Link>
        </div>
        <Link href="/">
          <a
            href=""
            className="footer__link text text_type_sub-desc text_color_main"
          >
            Политика конфиденциальности
          </a>
        </Link>
      </div>
      <Link href="/personal-area/signin">
        <a
          href=""
          className="text text_type_sub-desc text_color_main footer__personal-area"
        >
          Вход для заводчиков
        </a>
      </Link>
      <div className="footer__cop text text_type_sub-desc text_color_black">
        © 2022 Dogclick. Все права защищены.
      </div>
    </footer>
  );
};
