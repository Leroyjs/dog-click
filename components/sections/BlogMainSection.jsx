import { Search } from "../UI/Search";

export const BlogMainSection = ({}) => {
  return (
    <section className="blog-main-section main-padding">
      <Search />
      <ul className="blog-main-section__tag-list">
        <li className="blog-main-section__tag-item">Все о собаках</li>
        <li className="blog-main-section__tag-item">Все о собаках</li>
        <li className="blog-main-section__tag-item">Все о собаках</li>
        <li className="blog-main-section__tag-item">Все о собаках</li>
      </ul>
      <div className="blog-main-section__main"></div>
    </section>
  );
};
