import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../components/data";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-8 p-5 w-9/12 ml-28">
        <div className=" ">
          <SearchBar />
        </div>
        <p className="text-xl px-5 text-gray-500">
          Trending categories: Social Media, Productivity, Design Tools, Web
          App, Branding
        </p>
        <div className="flex flex-wrap justify-between px-5">
          <p className="absolute transform -rotate-90 mt-20 left-12 font-medium text-gray-700 text-xl">
            Popular this month
          </p>
          {data.map(
            (dt, index) =>
              index <= 5 && (
                <ProductCard
                  imagesrc={dt.img}
                  imagealt={dt.alt}
                  companyName={dt.name}
                  companyDescription={dt.desc}
                  companyVotes={dt.vote}
                  commentCount={dt.comments}
                  tag={dt.tag}
                  key={index}
                />
              )
          )}
        </div>

        <div className="flex flex-wrap justify-between px-5 ">
          <p className="absolute transform -rotate-90 left-16 mt-14 font-medium text-gray-700 text-xl">
            Popular  today
          </p>
          {data.map(
            (dt, index) =>
              index <= 5 && (
                <ProductCard
                  imagesrc={dt.img}
                  imagealt={dt.alt}
                  companyName={dt.name}
                  companyDescription={dt.desc}
                  companyVotes={dt.vote}
                  commentCount={dt.comments}
                  tag={dt.tag}
                  key={index}
                />
              )
          )}
        </div>
      </div>
      <Aside />
    </Layout>
  );
};

export default Home;
