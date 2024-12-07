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
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            resData.info.cloudinaryImageId 
            }
            alt="restro-logo" />
            <h3>{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime}</h5>
        </div>
    );
};

const resList= [{
  "info": {
    "id": "234875",
    "name": "Adil Hotel",
    "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    "locality": "Rautha Wada",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "North Indian",
      "Biryani",
      "Tandoor"
    ],
    "avgRating": 4.3,
    "parentId": "27123",
    "avgRatingString": "4.3",
    "totalRatingsString": "1.0K+",
    "sla": {
      "deliveryTime": 40,
      "lastMileTravel": 10.8,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "10.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:00:00",
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
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
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
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "774546",
    "name": "Shree Naivedyam",
    "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
    "locality": "Khajri Road",
    "areaName": "Chhindwara City",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "South Indian",
      "Pizzas",
      "Beverages"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "428968",
    "avgRatingString": "4.2",
    "totalRatingsString": "73",
    "sla": {
      "deliveryTime": 49,
      "lastMileTravel": 13.2,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "13.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:00:00",
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
      "header": "10% OFF",
      "subHeader": "UPTO ₹40"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "618037",
    "name": "Jai Ganesh Bhojnalaya",
    "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
    "locality": "Railway Colony",
    "areaName": "Bus stand",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Indian",
      "Chinese"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "368432",
    "avgRatingString": "4.0",
    "totalRatingsString": "278",
    "sla": {
      "deliveryTime": 41,
      "lastMileTravel": 11,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "11.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
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
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "630193",
    "name": "Champaran  Handi Restaurant",
    "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
    "locality": "Sinchai Colony",
    "areaName": "Nagpur road",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "North Indian"
    ],
    "avgRating": 4.3,
    "parentId": "376324",
    "avgRatingString": "4.3",
    "totalRatingsString": "351",
    "sla": {
      "deliveryTime": 48,
      "lastMileTravel": 11.9,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "11.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:00:00",
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
      "header": "20% OFF",
      "subHeader": "ABOVE ₹699",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "151648",
    "name": "Mr. Gurung Momo & Chinese Corner",
    "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
    "locality": "Teacher's Colony",
    "areaName": "Mohan Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Momos",
      "Chinese",
      "Fast Food"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "140255",
    "avgRatingString": "4.2",
    "totalRatingsString": "1.0K+",
    "sla": {
      "deliveryTime": 45,
      "lastMileTravel": 11.8,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "11.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
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
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "150586",
    "name": "Accord International",
    "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
    "locality": "Parasia Road",
    "areaName": "Vishnu Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Continental",
      "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "26828",
    "avgRatingString": "4.4",
    "totalRatingsString": "587",
    "sla": {
      "deliveryTime": 59,
      "lastMileTravel": 14.3,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "14.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 23:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
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
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/accord-international-parasia-road-vishnu-nagar-rest150586",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "151649",
    "name": "Hotel Sai Nath & Sai Restaurant",
    "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
    "locality": "railway station",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Chinese",
      "Beverages",
      "Fast Food",
      "Desserts"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "101802",
    "avgRatingString": "4.3",
    "totalRatingsString": "914",
    "sla": {
      "deliveryTime": 46,
      "lastMileTravel": 10.3,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "10.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-12-03 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
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
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "FREE ITEM"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
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
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-2a054cc2-fb63-407d-b52d-4de7215c07a0"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}]

const Body = () => {
    return(
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="restro-container">
                 <RestaurantCard resData={resList[0]}/>
                 <RestaurantCard resData={resList[1]}/>
                 <RestaurantCard resData={resList[2]}/>
                 <RestaurantCard resData={resList[3]}/>
                 <RestaurantCard resData={resList[4]}/>
                 <RestaurantCard resData={resList[5]}/>
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