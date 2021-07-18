import { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';

import someDogImg from '../../media/testDog.jpg';

export const DetailSlider = ({}) => {
    const [flickity, setFlickity] = useState(false);
    const [flickityNav, setFlickityNav] = useState(false);
    const flickityOptions = {
        initialIndex: 2,
        pageDots: false,
    };
    const flickityNavOptions = {
        initialIndex: 2,
        pageDots: false,
    };
    useEffect(() => {
        if (flickity && flickityNav) {
            flickity.on('change', handleChengeMain);
        }
    }, [flickity, flickityNav]);

    function handleChengeMain(index) {
        flickityNav.select(index);
        console.log(index);
    }
    function handleChengeNav(index) {
        console.log(index);
        flickity.select(index);
    }

    return (
        <div className="detail-slider">
            <Flickity
                flickityRef={(flickity) => setFlickity(flickity)}
                className={'detail-slider__main'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                // disableImagesLoaded={false} // default false
                // reloadOnUpdate // default false
                // static // default false
            >
                {slides.map((img, index) => (
                    <div
                        key={img + index}
                        className="detail-slider__main-item"
                        style={{ backgroundImage: `url(${img.src})` }}
                    ></div>
                ))}
            </Flickity>
            <Flickity
                flickityRef={(flickity) => setFlickityNav(flickity)}
                className="detail-slider__nav"
                options={flickityNavOptions}
            >
                {slides.map((img, index) => (
                    <div
                        onClick={() => {
                            handleChengeNav(index);
                        }}
                        key={img + index}
                        className="detail-slider__nav-item"
                        style={{ backgroundImage: `url(${img.src})` }}
                    ></div>
                ))}
            </Flickity>
        </div>
    );
};
const slides = [someDogImg, someDogImg, someDogImg, someDogImg, someDogImg];
