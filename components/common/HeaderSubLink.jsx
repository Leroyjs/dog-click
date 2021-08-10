import Link from 'next/link';

export const HeaderSubLink = ({ href, count = 0, text, children, onClick }) => {
    return (
        <Link href={href}>
            <a className="header-sub-link" onClick={onClick}>
                <div className="header-sub-link__img-wrapper">
                    {count !== 0 && (
                        <div className="header-sub-link__count">{count}</div>
                    )}
                    {children}
                </div>
                {text && (
                    <div className={"header-sub-link__text text text_type_nav text_color_black" + (count?' header-sub-link__text_margin-left':'')}>
                        {text}
                    </div>
                )}
            </a>
        </Link>
    );
};
