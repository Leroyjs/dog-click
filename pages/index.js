import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { FirstSection } from "../components/sections/FirstSection";
import { NewItemsSection } from "../components/sections/NewItemsSection";
import axios from "axios";
import { config } from "../config";
import { MedstorySection } from "../components/sections/MedstorySection";
import { BlogSection } from "../components/sections/BlogSection";

export default function Index({ newPosts, newPostsBlog, tags }) {
  return (
    <MainWrapper>
      <FirstSection />
      <NewItemsSection posts={newPosts.items} />
      <MedstorySection />
      <BlogSection newPostsBlog={newPostsBlog.items} tags={tags} />
      <Footer />
    </MainWrapper>
  );
}

export async function getServerSideProps() {
  let newPosts = false;
  await axios
    .post(`${config.domain}/api/public/pets`, {
      gender: null,
      breedIds: null,
      cityId: null,
      colorIds: null,
      sizeId: null,
      priceFrom: null,
      priceTo: null,
      hasPedigree: null,
      pageNum: 1,
      pageSize: 8,
    })
    .then(function (response) {
      newPosts = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  let tags = false;
  await axios
    .get(`${config.domain}/api/dictionaries/tags`)
    .then(function (response) {
      tags = response.data.items;
    })
    .catch(function (error) {
      console.log(error);
    });
  let newPostsBlog = false;
  const options = {
    search: "",
    tags: [],
    pageNum: 1,
  };

  await axios
    .post(`${config.domain}/api/public/news`, options)
    .then(function (response) {
      newPostsBlog = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    props: { tags, newPosts, newPostsBlog },
  };
}
