import Link from 'next/link';
import logoImg from '../../media/logo.svg';
import Image from 'next/image';
import { HeaderSubLink } from '../common/HeaderSubLink';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', setStateOfHeader);
        return () => {
            document.removeEventListener('scroll', setStateOfHeader);
        };
    }, []);
    function setStateOfHeader() {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop < 20) {
            setActive(false);
        } else {
            setActive(true);
        }
    }
    return (
        <header
            className={
                'header main-padding' + (isActive ? ' header_active' : '')
            }
        >
            <div className="header__logo">
                <Link href="/">
                    <a>
                        <Image src={logoImg} alt="dog-click" />
                    </a>
                </Link>
            </div>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <Link href="/search">
                            <a className="header__link text text_type_nav text_color_black">
                                Найти щенка
                            </a>
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link href="/about">
                            <a className="header__link text text_type_nav text_color_black">
                                О нас
                            </a>
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link href="/breeders">
                            <a className="header__link text text_type_nav text_color_black">
                                Заводчикам
                            </a>
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link href="/help">
                            <a className="header__link text text_type_nav text_color_black">
                                Помощь
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="header__sub-links">
                <HeaderSubLink href="/favorites" count={10}>
                    <svg
                        viewBox="0 0 28 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M26.0699 3.72517L26.0702 3.72574C27.5156 6.57887 26.9899 9.86834 24.1478 13.6361L24.1464 13.6379C21.8957 16.6411 18.6467 19.6596 13.8852 23.2237L13.884 23.2247C13.8642 23.2395 13.8362 23.25 13.8041 23.25C13.7721 23.25 13.744 23.2395 13.7243 23.2247L13.7232 23.2239C8.95561 19.6534 5.71243 16.6085 3.45951 13.6348C0.60953 9.86752 0.0842099 6.57848 1.52945 3.72574L1.52974 3.72517C2.51421 1.77779 5.45927 0.058217 9.0188 1.04141C10.7115 1.51286 12.1828 2.52208 13.1959 3.898L13.7998 4.71825L14.4038 3.898C15.417 2.5219 16.8885 1.51259 18.5815 1.04122L18.5834 1.04069C22.1297 0.0433931 25.0841 1.7752 26.0699 3.72517Z"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                    </svg>
                </HeaderSubLink>
                <HeaderSubLink href="/comparison" count={3}>
                    <svg
                        viewBox="0 0 44 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.312 15.9176L18.5177 22H8.95224L9.51492 16.1203C9.51492 16.1203 5.13646 16.9212 3.56664 14.8025C2.09515 12.8165 0.853284 8.77467 1.01405 8.47059C1.17481 8.16651 5.65658 7.80779 6.13887 7.50367C6.62117 7.19955 7.34461 3.15341 8.38957 2.63774C10.033 1.82674 11.846 1.95566 13.1321 2.13093C14.4182 2.30619 15.9569 2.23225 17.1512 3.85428C18.3455 5.47631 19 15.9176 19 15.9176H17.312ZM17.312 15.9176C17.312 15.9176 15.5454 15.7597 14.579 15.1066C12.0326 13.386 13.1093 9.73141 12.1675 6.28721"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="21.75"
                            y1="0.75"
                            x2="21.75"
                            y2="23.25"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray="2 2"
                        />
                        <path
                            d="M26.188 15.9176L24.9823 22H34.5478L33.9851 16.1203C33.9851 16.1203 38.3635 16.9212 39.9334 14.8025C41.4049 12.8165 42.6467 8.77467 42.486 8.47059C42.3252 8.16651 37.8434 7.80779 37.3611 7.50367C36.8788 7.19955 36.1554 3.15341 35.1104 2.63774C33.467 1.82674 31.654 1.95566 30.3679 2.13093C29.0818 2.30619 27.5431 2.23225 26.3488 3.85428C25.1545 5.47631 24.5 15.9176 24.5 15.9176H26.188ZM26.188 15.9176C26.188 15.9176 27.9546 15.7597 28.921 15.1066C31.4674 13.386 30.3907 9.73141 31.3325 6.28721"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </HeaderSubLink>
                <HeaderSubLink href="/personal-area" text="Вход">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask
                            id="mask0"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                fill="white"
                            />
                        </mask>
                        <g mask="url(#mask0)">
                            <path
                                d="M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z"
                                stroke="black"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M12 29C16.4183 29 20 25.4183 20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21C4 25.4183 7.58172 29 12 29Z"
                                stroke="black"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
                                stroke="black"
                                strokeWidth="1.5"
                            />
                        </g>
                    </svg>
                </HeaderSubLink>
            </nav>
        </header>
    );
};
