import { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';

export const DetailSlider = ({images}) => {
    const [flickity, setFlickity] = useState(false);
    const [flickityNav, setFlickityNav] = useState(false);
    const [arrowRightIsDisabled, setArrowRightIsDisabled] = useState(false)
    const [arrowLeftIsDisabled, setArrowLeftIsDisabled] = useState(true)
    const flickityOptions = {
        initialIndex: 0,
        prevNextButtons: false
    };
    const flickityNavOptions = {
        cellAlign: 'left',
        contain: true,
        initialIndex: 0,
        pageDots: false,
        prevNextButtons: false
    };
    useEffect(() => {
        if (flickity && flickityNav) {
            setArrows(0)
            flickity.on('change', handleChengeMain);
        }
    }, [flickity, flickityNav]);

    function setArrows(index) {
        if (index === 0) {
            setArrowLeftIsDisabled(true)
        } else {
            setArrowLeftIsDisabled(false)
        }
        if (index + 1 === images.length) {
            setArrowRightIsDisabled(true)
        } else {
            setArrowRightIsDisabled(false)
        }
    }

    function handleArrowRightClick() {
        flickity.next()
    }

    function handleArrowLeftClick() {
        flickity.previous()
    }

    function handleChengeMain(index) {
        flickityNav.select(index);
        setArrows(index)
    }

    function handleChengeNav(index) {
        flickity.select(index);
    }

    return (
        <div className="detail-slider">
            <div className="detail-slider__main-wrapper">
                <Flickity
                    flickityRef={(flickity) => setFlickity(flickity)}
                    className={'detail-slider__main'} 
                    elementType={'div'} 
                    options={flickityOptions} 
                >
                    {images.map((img, index) => (
                        <div
                            key={img + index}
                            className="detail-slider__main-item"
                            style={{ backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/petstory/${img.guid})` }}
                        ></div>
                    ))}
                </Flickity>
                {images.length>1&&
                <>
                    <div onClick={handleArrowRightClick} className={"detail-slider__arrow_right detail-slider__arrow" + (arrowRightIsDisabled ? ' detail-slider__arrow_disabled' : '')}>
                        <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1L17 17L1 33" stroke="#AF5B29" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div onClick={handleArrowLeftClick} className={"detail-slider__arrow_left detail-slider__arrow" + (arrowLeftIsDisabled ? ' detail-slider__arrow_disabled' : '')}>
                        <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 33L1 17L17 1" stroke="#AF5B29" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </>
                }
            </div>
            <Flickity
                flickityRef={(flickity) => setFlickityNav(flickity)}
                className="detail-slider__nav"
                options={flickityNavOptions}
            >
                {images.map((img, index) => (
                    <div
                        onClick={() => {
                            handleChengeNav(index);
                        }}
                        key={img + index}
                        className="detail-slider__nav-item"
                        style={{ backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/petstory/${img.guid})` }}
                    ></div>
                ))}
            </Flickity>
        </div>
    );
};
