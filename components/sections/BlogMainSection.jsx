import { NewsCard } from "../common/NewsCard";
import { Pagination } from "../UI/Pagination";
import { Search } from "../UI/Search";
import { Tag } from "../UI/Tag";

export const BlogMainSection = ({}) => {
  return (
    <section className="blog-main-section">
      <div className=" main-padding">
        {" "}
        <Search />
      </div>

      <ul className="blog-main-section__tag-list main-padding">
        <li className="blog-main-section__tag-wrapper">
          <Tag />
        </li>
        <li className="blog-main-section__tag-wrapper">
          <Tag />
        </li>
        <li className="blog-main-section__tag-wrapper">
          <Tag />
        </li>
      </ul>
      <div className="blog-main-section__main main-padding">
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
        <div className="blog-main-section__card-wrapper">
          <NewsCard />
        </div>
      </div>
      <div className="blog-main-section__pagination main-padding">
        <Pagination pageNum={0} total={100} />
      </div>
    </section>
  );
};
