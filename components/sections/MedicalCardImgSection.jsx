import Image from "next/image";

export const MedicalCardImgSection = ({ imgs, desc, children }) => {
  return (
    <section className="medical-card-img-section main-padding">
      <h2 className="text_type_h4 medical-card-img-section__title">
        {children}
      </h2>
      <div className="medical-card-img-section__desc text text_type_main text_color_gray">
        {desc}
      </div>
      <div className="medical-card-img-section__main">
        <div className="medical-card-img-section__column">
          <Image src={imgs[0]} alt="" />
        </div>
        <div className="medical-card-img-section__column">
          <Image src={imgs[1]} alt="" />
        </div>
        <div className="medical-card-img-section__column">
          <Image src={imgs[2]} alt="" />
        </div>
      </div>
    </section>
  );
};
