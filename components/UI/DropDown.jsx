import { useState, useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

export const DropDown = ({
    itemList = [],
    placeholderImg = false,
    placeholderText = '',
    addСlasses = '',
    isInput = true,
    isBorder = false,
}) => {
    const _list = useRef(false);
    const [value, setValue] = useState('');
    const [isActive, setActive] = useState(false);
    const [activeList, setActiveList] = useState(itemList);
    const [activeImg, setActiveImg] = useState(placeholderImg);

    useEffect(() => {
        Scrollbar.init(_list.current);
    }, []);
    function handleChange(e) {
        const value = e.target.value;
        setValue(value);
        filterActiveList(value);
    }
    function filterActiveList(value) {
        const newActiveList = itemList.filter((item) => {
            if (item.text.toUpperCase().indexOf(value.toUpperCase()) + 1) {
                return item;
            }
        });
        setActiveList(newActiveList);
    }

    function handleFocus() {
        setActive(true);
    }
    function handleBlur() {
        setTimeout(() => {
            setActive(false);
        }, 0);
    }
    function handleChoose(item) {
        setValue(item.text);
    }

    return (
        <div
            className={
                (isActive ? 'drop-down_active ' : '') +
                'drop-down ' +
                (isBorder ? ' drop-down_border ' : '') +
                addСlasses
            }
        >
            <div className="drop-down__list-wrapper" ref={_list}>
                <ul className="drop-down__list">
                    {activeList.map((item) => (
                        <li
                            key={item.text}
                            className="drop-down__item"
                            onMouseDown={() => handleChoose(item)}
                        >
                            <div className="drop-down__item-img-wrapper">
                                {item.img && item.img}
                            </div>
                            <span className="drop-down__item-text text_type_main">
                                {item.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <input
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
                disabled={!isInput}
                placeholder={placeholderText}
                className="drop-down__input text text_type_main"
            />
            <div className="drop-down__placeholder-img">{activeImg}</div>
            <svg
                className="drop-down__arrow"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 1L7 7L1 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
