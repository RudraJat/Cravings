import { CDN_URL} from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData}=props;

    //destructuring the code

    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
     }=resData?.info;

    return(
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img 
            className="restro-logo"
            src={CDN_URL+ cloudinaryImageId}
            alt="restro-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime}</h5>
        </div>
    );
};

export default RestaurantCard;