import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";
import StarRating from "./starRating";
import LikeButton from "./likeButton";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="container-fluid bg-light">
      <div className="row m-2 rowcont">
        <div className="col-sm-6 searchResult">
          <div className="imgLike m-5">
            <img src={img} alt="" />
          </div>
          <div className="lbtn">
            <LikeButton className="searchResult__heart" />
          </div>
        </div>
        <div className="col-sm-6 searchResult__info  my-1">
          <div className="searchResult__infoTop p-1 m-4">
            <p>{location}</p>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div className="searchResult__infoBottom p-1 m-4">
            <div className="searchResult__stars">
              <StarRating className="searchResult__star" />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
            <div className="searchResults__price">
              <h2>{price}</h2>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
