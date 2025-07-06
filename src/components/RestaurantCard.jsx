import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, subHeader, deliveryTime } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          CDN_URL + resData.info.cloudinaryImageId
        }
        alt="company-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{subHeader}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;