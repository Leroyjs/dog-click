import { BreadCrumbs } from "../common/BreadCrumbs";

export const TitleBlock = ({ children, breadCrumbsList, img }) => {
  return (
    <section className="title-block">
      <h1 className="text text_type_name title-block__title">{children}</h1>
      <BreadCrumbs
        list={breadCrumbsList}
        addСlasses="title-block__bread-crumbs"
      />
      <div className="title-block__bg"></div>
    </section>
  );
};
