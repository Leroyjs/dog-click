import Image from 'next/image';
import Link from 'next/link';
import breadCrumbsSeparatorImg from '../../media/bread-crumbs-separator.svg';

export const BreadCrumbs = ({ list = [], addСlasses = '' }) => {
    return (
        <nav className={'bread-crumbs ' + addСlasses}>
            <ul className="bread-crumbs__ul">
                {list.map((item, index) => (
                    <li key={item.text} className="bread-crumbs__li">
                        {item.href ? (
                            <>
                                {index !== 0 &&
                                    <div className="bread-crumbs__separator">
                                        <Image
                                            src={breadCrumbsSeparatorImg}
                                            alt="arrow-right"
                                        />
                                    </div>}
                                <Link href={item.href}>
                                    <a className="bread-crumbs__link text text_type_main text_color_black">
                                        {item.text}
                                    </a>
                                </Link>
                            </>
                        ) : (
                            <>
                                {index !== 0 && <div className="bread-crumbs__separator">
                                    <Image
                                        src={breadCrumbsSeparatorImg}
                                        alt="arrow-right"
                                    />
                                </div>}
                                <span className="bread-crumbs__current  text text_type_main text_color_main">
                                    {item.text}
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
