import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
import { Spinner } from "./Spinner";

const News = ({ id, title, changeProgress }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateNews = async () => {
    changeProgress(0);
    const url = `https://wrestling-resources-api.herokuapp.com/api/v1/categories/${id}/${title}`;
    changeProgress(10);
    setLoading(true);
    let data = await fetch(url);
    changeProgress(30);
    let parsedData = await data.json();
    changeProgress(70);
    setLoading(false);
    setData(parsedData);
    changeProgress(100);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    updateNews();
    document.title = `WW - ${capitalizeFirstLetter(title)}`; // Changes Title of App
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: "80px" }}>
        Wrestling World - {capitalizeFirstLetter(title)}
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          data.map((items) => {
            return (
              <div className="col-md-4" key={items.id}>
                <NewsItem
                  title={id === 4 ? items.name : items.title}
                  description={items.description}
                  dataLink={id === 4 ? items.highlights : items.link}
                  author={items.author}
                  imageUrl={items.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { News };
