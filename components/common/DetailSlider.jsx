import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { config } from "../../config";

export const DetailSlider = ({ images, video, preview }) => {
  const [flickity, setFlickity] = useState(false);
  const [flickityNav, setFlickityNav] = useState(false);
  const [arrowRightIsDisabled, setArrowRightIsDisabled] = useState(false);
  const [arrowLeftIsDisabled, setArrowLeftIsDisabled] = useState(true);
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
  };
  const flickityNavOptions = {
    cellAlign: "left",
    contain: true,
    initialIndex: 0,
    pageDots: false,
    prevNextButtons: false,
  };

  let videoIndex = images.length;

  if (videoIndex > 2) {
    videoIndex = images.length - 1;
  }

  const cloneImagesArray = images.slice(0);

  if (video) {
    cloneImagesArray.splice(videoIndex, 0, video);
  }

  useEffect(() => {
    if (flickity && flickityNav) {
      setArrows(0);
      flickity.on("change", handleChengeMain);
    }
  }, [flickity, flickityNav]);

  function setArrows(index) {
    if (index === 0) {
      setArrowLeftIsDisabled(true);
    } else {
      setArrowLeftIsDisabled(false);
    }
    if (index + 1 === cloneImagesArray.length) {
      setArrowRightIsDisabled(true);
    } else {
      setArrowRightIsDisabled(false);
    }
  }

  function handleArrowRightClick() {
    flickity.next();
  }

  function handleArrowLeftClick() {
    flickity.previous();
  }

  function handleChengeMain(index) {
    flickityNav.select(index);
    setArrows(index);
  }

  function handleChengeNav(index) {
    flickity.select(index);
  }

  return (
    <div className="detail-slider">
      <div className="detail-slider__main-wrapper">
        <Flickity
          flickityRef={(flickity) => setFlickity(flickity)}
          className={"detail-slider__main"}
          elementType={"div"}
          options={flickityOptions}
        >
          {cloneImagesArray.map((img, index) => (
            <React.Fragment key={img + index}>
              {video && index === videoIndex ? (
                <iframe
                  className="detail-slider__main-item"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="detail-slider__main-item"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${img.guid})`,
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </Flickity>
        {cloneImagesArray.length > 1 && (
          <>
            <div
              onClick={handleArrowRightClick}
              className={
                "detail-slider__arrow_right detail-slider__arrow" +
                (arrowRightIsDisabled ? " detail-slider__arrow_disabled" : "")
              }
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 1L17 17L1 33"
                  stroke="#AF5B29"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={handleArrowLeftClick}
              className={
                "detail-slider__arrow_left detail-slider__arrow" +
                (arrowLeftIsDisabled ? " detail-slider__arrow_disabled" : "")
              }
            >
              <svg
                width="18"
                height="34"
                viewBox="0 0 18 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 33L1 17L17 1"
                  stroke="#AF5B29"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      <Flickity
        flickityRef={(flickity) => setFlickityNav(flickity)}
        className="detail-slider__nav"
        options={flickityNavOptions}
      >
        {cloneImagesArray.map((img, index) => (
          <React.Fragment key={img + index}>
            {video && index === videoIndex ? (
              <div
                onClick={() => {
                  handleChengeNav(videoIndex);
                }}
                className="detail-slider__nav-item_video detail-slider__nav-item"
              >
                <div
                  className="detail-slider__video-overlay"
                  style={{
                    backgroundImage: `url(${preview})`,
                  }}
                ></div>
                <div className="detail-slider__play-button">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 9.13398C17.1667 9.51888 17.1667 10.4811 16.5 10.866L1.5 19.5263C0.833335 19.9112 9.70611e-07 19.4301 1.00426e-06 18.6603L1.76136e-06 1.33975C1.79501e-06 0.569945 0.833336 0.0888202 1.5 0.47372L16.5 9.13398Z"
                      fill="#AF5B29"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  handleChengeNav(index);
                }}
                className="detail-slider__nav-item"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${img.guid})`,
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </Flickity>
    </div>
  );
};
