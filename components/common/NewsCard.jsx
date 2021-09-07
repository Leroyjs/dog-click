import { Tag } from "../UI/Tag";
import { config } from "../../config";
import Link from "next/link";

export const NewsCard = ({
  tagDictionary,
  createDate,
  externalUrl,
  imageGuid,
  tags,
  text,
  title,
}) => {
  const imgStyles = {
    backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${imageGuid}`,
  };
  let tegColor = false;
  tagDictionary.forEach((item) => {
    if (item.name === tags[0]) {
      tegColor = item.data && item.data.color;
    }
  });

  let str = text.slice(0, 200);
  let a = str.split(" ");
  a.splice(a.length - 1, 1);
  str = a.join(" ") + " ...";

  return (
    <div className="news-card">
      <div className="news-card__img" style={imgStyles}>
        <div className="news-card__tag-wrapper">
          <Tag text={tags[0]} isActive={true} color={tegColor} />
        </div>
      </div>
      <div className="news-card__main">
        <div className="">
          <div className="news-card__title text text_type_h5">{title}</div>
          <div className="news-card__desc text text_type_desc text_color_gray">
            {str}
          </div>
        </div>
        <div className="news-card__row">
          <div className="news-card__data">
            {calendar()}
            <div className="news-card__data-text text text_color_gray text_type_nav">
              {createDate}
            </div>
          </div>
          <Link href={externalUrl}>
            <a target="_blank" className="news-card__go-button">
              <div className="news-card__go-button-text text text_color_main text_type_main">
                Читать далее
              </div>
              {arrow()}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const arrow = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 5C10.7516 5 1 5 1 5"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 1L17 5L13 9"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const calendar = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8182 2.7002H3.18182C2.57933 2.7002 2.03387 2.93804 1.63904 3.32259C1.24421 3.70714 1 4.23839 1 4.8252V6.9502H17V4.8252C17 4.23839 16.7558 3.70714 16.361 3.32259C15.9661 2.93804 15.4207 2.7002 14.8182 2.7002Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 6.9502H1V15.6323C1 16.2862 1.24421 16.8782 1.63904 17.3067C2.03387 17.7352 2.57933 18.0002 3.18182 18.0002H14.8182C15.4207 18.0002 15.9661 17.7352 16.361 17.3067C16.7558 16.8782 17 16.2862 17 15.6323V6.9502Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
    />
    <path
      d="M5.21094 1C5.21094 1 5.21094 1.19028 5.21094 1.425V3.975C5.21094 4.20972 5.21094 4.4 5.21094 4.4C5.21094 4.4 5.21094 4.20972 5.21094 3.975V1.425C5.21094 1.19028 5.21094 1 5.21094 1Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12.7891 1C12.7891 1 12.7891 1.19028 12.7891 1.425V3.975C12.7891 4.20972 12.7891 4.4 12.7891 4.4C12.7891 4.4 12.7891 4.20972 12.7891 3.975V1.425C12.7891 1.19028 12.7891 1 12.7891 1Z"
      stroke="#AF5B29"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
