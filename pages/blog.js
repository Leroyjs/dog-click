import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { BlogMainSection } from "../components/sections/BlogMainSection";
import { TitleBlock } from "../components/sections/TitleBlock";
import someDogBGImg from "../media/some-dog-bg.jpg";
import axios from "axios";
import { config } from "../config";

export default function Blog({ tags, newPosts, options }) {
  return (
    <MainWrapper>
      <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
        Самое полезное и интересное о питомцах в этом разделе
      </TitleBlock>
      <BlogMainSection tags={tags} newPosts={newPosts} options={options} />
      <Footer />
    </MainWrapper>
  );
}
export async function getServerSideProps({ query }) {
  let tags = false;
  await axios
    .get(`${config.domain}/api/dictionaries/tags`)
    .then(function (response) {
      tags = response.data.items;
    })
    .catch(function (error) {
      console.log(error);
    });
  let newPosts = false;
  const options = {
    search: "",
    tags: [],
    pageNum: 1,
  };
  for (let key in query) {
    options[key] = query[key];
    if (key === "tags") {
      options[key] = query[key].split(",");
    }
  }

  await axios
    .post(`${config.domain}/api/public/news`, options)
    .then(function (response) {
      newPosts = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    props: { tags, newPosts, options },
  };
}
const breadCrumbsList = [
  {
    text: "Главная",
    href: "/",
  },
  {
    text: "Блог",
    href: false,
  },
];
