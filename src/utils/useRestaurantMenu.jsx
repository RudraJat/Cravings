import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );

      if (!response.ok) {
        throw new Error("API failed with status: " + response.status);
      }

      // Get raw response first
      const text = await response.text();

      if (!text) throw new Error("Empty response from Swiggy API");

      let json;
      try {
        json = JSON.parse(text);
      } catch (e) {
        console.log("RAW API RESPONSE:", text);
        throw new Error("Invalid JSON received from Swiggy");
      }

      setResInfo(json?.data);
    } catch (err) {
      console.error("MENU FETCH ERROR:", err);
      setError(err.message);
    }
  };

  return { resInfo, error };
};

export default useRestaurantMenu;
