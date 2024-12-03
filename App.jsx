// Correct import for React 18
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>HTMLElement(Render)

// const heading=React.createElement("h1",
//     {id:"heading"},
//     "Namaste React 🥊");

// console.log(heading);

//Easy Way
//JSX - HTML-like or XML-like syntax


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *   - RestroCard
 *    - Img
 *    - Name of restro, Star Rating, cuisine, delivery time
 */
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3x3BazQ5A8Pl23HsWGaSdWX0iOGwNDqeGw&s" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) =>{
    const {resData}=props;

    return(
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img 
            className="restro-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" 
            alt="restro-logo" />
            <h3>{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime}</h5>
        </div>
    );
};

const resObj={
    "info": {
      "id": "151656",
      "name": "Dev International",
      "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
      "locality": "khajri road",
      "areaName": "Mohan Nagar",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "71556",
      "avgRatingString": "4.3",
      "totalRatingsString": "401",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 13.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "13.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-03 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
      "type": "WEBLINK"
    }
  };

const Body = () => {
    return(
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="restro-container">
                 <RestaurantCard resData={resObj} />
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<AppLayout/>);