import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../media/logo.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Link href="/">
                <a className="footer__logo">
                    <Image src={logoImg} alt="dog-click"></Image>
                </a>
            </Link>
            <div className="footer__link-row">
                <Link href="/">
                    <a
                        href=""
                        className="footer__link text text_type_sub-desc text_color_main"
                    >
                        Пользовательское соглашение
                    </a>
                </Link>
                <Link href="/">
                    <a
                        href=""
                        className="text text_type_sub-desc text_color_main"
                    >
                        Политика конфиденциальности
                    </a>
                </Link>
            </div>
            <div className="footer__cop text text_type_sub-desc text_color_black">
                © 2021 Dogclick. Все права защищены.
            </div>
        </footer>
    );
};
