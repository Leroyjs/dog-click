import { useState, useRef } from 'react';
import Hammer from 'react-hammerjs';

export const RangeInput = ({ min = 0, max = 100, handler, initMax, initMin }) => {
    const [minValue, setMinValue] = useState(+initMin||+min);
    const [maxValue, setMaxValue] = useState(+initMax||+max);
    const [firstX, setFirsX] = useState(false);
    const _line = useRef(false);
    const range = max - min;
    const leftMin = (minValue / range) * 100;
    const leftMax = (maxValue / range) * 100;

    const lineInnerStyle = {
        left: leftMin + '%',
        width: `calc(${leftMax - leftMin}% + 20px)`,
    };
    const maxCircleStyle = {
        left: `${leftMax}%`,
    };
    const minCircleStyle = {
        left: `${leftMin}%`,
    };
    function handleInputChange(e) {
        const target = e.target;
        const value = +target.value;
        const name = target.name;

        switch (name) {
            case 'maxValue':
                setCurrentMaxValue(value);
                handler(minValue, value)
                break;
            case 'minValue':
                setCurrentMinValue(value);
                handler(value, maxValue)
                break;
        }
    }
    function setCurrentMinValue(value) {
        if (min <= value && max >= value)
            if (maxValue > value){
                setMinValue(value);
            }
    }
    function handleEnd(){
        handler(minValue, maxValue)
    }
    function setCurrentMaxValue(value) {
        if (min <= value && max >= value)
            if (minValue < value) {
                setMaxValue(value);
            };
    }
    function handleDrag(e, setFunction) {
        const lineRect = _line.current.getBoundingClientRect();
        const lineWidth = lineRect.width;

        const value = Math.round(firstX + (e.deltaX / lineWidth) * range);
        setFunction(value);
    }
    function handlePanStart(initValue) {
        setFirsX(initValue);
    }

    return (
        <div className="range-input">
            <div className="range-input__inputs">
                <div className="range-input__input-wrapper">
                    <span className="range-input__desc text_type_main text_color_gray">
                        от
                    </span>
                    <input
                        onChange={handleInputChange}
                        name="minValue"
                        value={minValue}
                        type="number"
                        className="range-input__input text_type_main"
                    />
                </div>
                <div className="range-input__separator"></div>
                <div className="range-input__input-wrapper">
                    <span className="range-input__desc text_type_main text_color_gray">
                        до
                    </span>

                    <input
                        onChange={handleInputChange}
                        name="maxValue"
                        value={maxValue}
                        type="number"
                        className="range-input__input text_type_main"
                    />
                </div>
            </div>
            <div className="range-input__main">
                <div className="range-input__line">
                    <div className="range-input__line-path" ref={_line}>
                        <div
                            className="range-input__line-inner"
                            style={lineInnerStyle}
                        ></div>
                        <Hammer
                            onPan={(e) => handleDrag(e, setCurrentMinValue)}
                            onPanStart={() => handlePanStart(minValue)}
                            onPanEnd={handleEnd}
                        >
                            <div
                                className="range-input__circle range-input__circle_min"
                                style={minCircleStyle}
                            ></div>
                        </Hammer>
                        <Hammer
                            onPan={(e) => handleDrag(e, setCurrentMaxValue)}
                            onPanStart={() => handlePanStart(maxValue)}
                            onPanEnd={handleEnd}
                        >
                            <div
                                className="range-input__circle range-input__circle_max"
                                style={maxCircleStyle}
                            ></div>
                        </Hammer>
                    </div>
                </div>
            </div>
        </div>
    );
};
