import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsCard } from "../common/NewsCard";
import { Pagination } from "../UI/Pagination";
import { Search } from "../UI/Search";
import { Tag } from "../UI/Tag";

export const BlogMainSection = ({ tags = [], newPosts, options }) => {
  const [activeTags, setActiveTags] = useState(options.tags);
  const [search, setSearch] = useState(options.search);
  const [pageNum, setPageNum] = useState(options.pageNum);
  const router = useRouter();
  function handleTag(value) {
    handleTagChange(value);
  }
  function handleSearch(value) {
    setFiltersURL();
  }
  useEffect(() => {
    setFiltersURL();
  }, [activeTags]);
  function setFiltersURL() {
    let url = "/blog";
    url += "?";
    search !== "" && (url += "search=" + search + "&");
    activeTags.length !== 0 && (url += "tags=" + activeTags.join(","));
    router.push(url, undefined, { scroll: false });
  }
  function handleTagChange(id) {
    let isActive = false;
    const newTags = activeTags.slice();
    isActive = newTags.indexOf(id);
    if (isActive !== -1) {
      newTags.splice(isActive, 1);
    } else {
      newTags.push(id);
    }
    setActiveTags(newTags);
  }
  function handleSelectPage(num) {
    let url = "/blog";
    url += "?";
    let routerQuery = Object.assign({}, router.query);
    routerQuery.pageNum = num;
    for (let query in routerQuery) {
      url += query + "=" + routerQuery[query] + "&";
    }
    router.push(url);
  }
  return (
    <section className="blog-main-section">
      <div className=" main-padding">
        <Search value={search} onChange={setSearch} onSubmit={handleSearch} />
      </div>

      <ul className="blog-main-section__tag-list main-padding">
        {tags.map((item) => (
          <li key={item.id} className="blog-main-section__tag-wrapper">
            <Tag
              isActive={
                activeTags.length === 0 || activeTags.indexOf(item.name) != -1
              }
              text={item.name}
              color={item.data && item.data.color}
              onClick={() => handleTag(item.name)}
            />
          </li>
        ))}
      </ul>
      <div className="blog-main-section__main main-padding">
        {newPosts.items.map((item) => (
          <div key={item.id} className="blog-main-section__card-wrapper">
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
      {newPosts.total > 9 && (
        <div className="blog-main-section__pagination main-padding">
          <Pagination
            pageNum={newPosts.pageNum}
            total={newPosts.total}
            handler={handleSelectPage}
          />
        </div>
      )}
    </section>
  );
};
