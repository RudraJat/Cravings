import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          CDN_URL + resData.info.cloudinaryImageId
        }
        alt="company-logo"
      />
      <div>
           {resData.info.sla.deliveryTime} mins
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      
      <div className="res-card-footer">
            <span>{costForTwo}</span>
            <span>• {resData.info.sla.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default RestaurantCard;