import { useState } from "react";
import { ParentCard } from "../common/ParentCard";

export const DetailCardDescSection = ({
  motherInfo,
  fatherInfo,
  description,
}) => {
  const [activeTabImdex, setActiveTabIndex] = useState(description ? 0 : 1);
  const handleClick = (index) => {
    setActiveTabIndex(index);
  };
  return (
    <section className="detail-card-desc-section main-padding">
      <div className="detail-card-desc-section__tabs">
        {description && (
          <div
            onClick={() => handleClick(0)}
            className={
              "text text_type_h5 text_color_gray detail-card-desc-section__tab-item" +
              (activeTabImdex === 0
                ? " detail-card-desc-section__tab-item_active"
                : "")
            }
          >
            Описание
          </div>
        )}
        {(motherInfo || fatherInfo) && (
          <div
            onClick={() => handleClick(1)}
            className={
              "text text_type_h5 text_color_gray detail-card-desc-section__tab-item" +
              (activeTabImdex === 1
                ? " detail-card-desc-section__tab-item_active"
                : "")
            }
          >
            Родители щенка
          </div>
        )}
      </div>
      <div className="detail-card-desc-section__main">
        {description && activeTabImdex === 0 && (
          <div className="text text_type_main">{description}</div>
        )}
        {motherInfo && activeTabImdex === 1 && <ParentCard data={motherInfo} />}
        {fatherInfo && activeTabImdex === 1 && (
          <ParentCard isMale={true} data={fatherInfo} />
        )}
      </div>
    </section>
  );
};
