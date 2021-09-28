import { NewsCard } from "../common/NewsCard";
import { ButtonBorder } from "../UI/ButtonBorder";

export const BlogSection = ({ newPostsBlog, tags }) => {
  console.log(newPostsBlog, tags);
  const posts = newPostsBlog.slice(0, 4);
  return (
    <section className="blog-section main-padding">
      <h2 className="blog-section__title text_type_h4">
        Блог <span className="text_color_main"> о питомцах</span>
      </h2>
      <div className="blog-section__desc text_type_main text_color_gray">
        Новые полезные и интересные статьи
      </div>
      <div className="blog-section__main">
        {posts.map((item) => (
          <div key={item.id} className="blog-section__card-wrapper">
            <NewsCard
              tagDictionary={tags}
              createDate={item.createDate}
              externalUrl={item.externalUrl}
              imageGuid={item.imageGuid}
              tags={item.tags}
              text={item.text}
              title={item.title}
            />
          </div>
        ))}
      </div>
      <a className="blog-section__button-wrapper">
        <ButtonBorder>Больше статей</ButtonBorder>
      </a>
    </section>
  );
};
