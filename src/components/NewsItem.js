import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ title, author, description, imageUrl, dataLink }) => {
  return (
    <div className="my-4">
      <div className="card">
        <span
          className="badge rounded-pill bg-success"
          style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}
        >
          {author === null ? "No Author" : author}
        </span>
        <img src={imageUrl} className="card-img-top" alt="Not Available" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={dataLink} className="btn btn-sm btn-dark" target="_blank" rel="noreferrer">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  dataLink: PropTypes.string,
};

NewsItem.defaultProps = {
  title: "No Title",
  author: "No Author",
  description: "No Description",
  imageUrl: "https://static.hudl.com/users/prod/6947584_8c2493c5ee184b38b9a385aa95b6b75b.jpg",
  dataLink: "",
};

export { NewsItem };
