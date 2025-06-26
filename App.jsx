import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_1de531cc9e3f6d6015240aafc950996c.webp"
          alt="logo-img"
        />
      </div>
      <div className="nav-items">
        <div className="nav-list">
          <div>Home</div>
          <div>Contact Us</div>
          <div>About Us</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard=(props)=>{
  const {resData}=props;
  return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f" alt="ich-coff-img" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>Cost for Two: 776{resData.info.aggregatedDiscountInfoV3.subHeader}</h4>
        </div>
    )
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "458043",
    "name": "The Biryani Life",
    "cloudinaryImageId": "rcs6ktj03q4zymbv4joy",
    "locality": "University Road",
    "areaName": "City Center",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "Mughlai",
      "Lucknowi",
      "Hyderabadi",
      "Kebabs",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "8496",
    "avgRatingString": "4.3",
    "totalRatingsString": "1.1K+",
    "promoted": true,
    "adTrackingId": "cid=30440359~p=0~adgrpid=30440359#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=458043~plpr=COLLECTION~eid=bd1fa525-1393-44b7-b797-d3f16d2090f9~srvts=1750948041890~collid=83639",
    "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-06-26 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
          "description": "bolt!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                "description": "bolt!"
              }
            }
          ]
        },
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹159",
      "logoCtx": {
        "text": "BENEFITS"
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      },
      "commsStyling": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "30440359"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=458043&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
  }
};

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* restaurant container */}
                <RestaurantCard resData={resObj}/>
            </div>
        </div>
    )
};

const AppLayout = () => {
  return <div className="app-layout">
    <Header/>
    <Body/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
