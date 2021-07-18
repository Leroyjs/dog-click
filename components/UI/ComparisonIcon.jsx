export const ComparisonIcon = ({
    addСlasses = '',
    isActive = false,
    onClick = false,
}) => {
    function handleClick() {
        onClick && onClick();
    }
    return (
        <button
            className={'icon ' + addСlasses + (isActive ? ' icon_active' : '')}
            onClick={handleClick}
        >
            <svg
                className="icon__img icon__img_comparison"
                width="38"
                height="20"
                viewBox="0 0 38 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.5933 13.1341L15.5981 18H7.62687L8.09577 13.2963C8.09577 13.2963 4.44705 13.937 3.13887 12.242C1.91262 10.6532 0.877736 7.41974 1.01171 7.17647C1.14568 6.9332 4.88048 6.64623 5.28239 6.40294C5.6843 6.15964 6.28717 2.92273 7.15797 2.51019C8.52748 1.86139 10.0383 1.96453 11.1101 2.10474C12.1819 2.24495 13.4641 2.1858 14.4593 3.48342C15.4546 4.78105 16 13.1341 16 13.1341H14.5933ZM14.5933 13.1341C14.5933 13.1341 13.1212 13.0078 12.3158 12.4853C10.1939 11.1088 11.091 8.18513 10.3063 5.42977"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line
                    x1="18.75"
                    y1="0.75"
                    x2="18.75"
                    y2="19.25"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="2 2"
                />
                <path
                    d="M22.9067 13.1341L21.9019 18H29.8731L29.4042 13.2963C29.4042 13.2963 33.0529 13.937 34.3611 12.242C35.5874 10.6532 36.6223 7.41974 36.4883 7.17647C36.3543 6.9332 32.6195 6.64623 32.2176 6.40294C31.8157 6.15964 31.2128 2.92273 30.342 2.51019C28.9725 1.86139 27.4617 1.96453 26.3899 2.10474C25.3181 2.24495 24.0359 2.1858 23.0407 3.48342C22.0454 4.78105 21.5 13.1341 21.5 13.1341H22.9067ZM22.9067 13.1341C22.9067 13.1341 24.3788 13.0078 25.1842 12.4853C27.3061 11.1088 26.409 8.18513 27.1937 5.42977"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};
