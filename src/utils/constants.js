const RESTAURANT_DETAILS_API =
  "https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING";

const RESTAURANT_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const HEADER_LOGO =
  "https://foodfire-app.netlify.app/foodFireLogo.adc19524.png";

const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export {
  RESTAURANT_DETAILS_API,
  RESTAURANT_IMAGE_URL,
  HEADER_LOGO,
  MENU_API,
  OPTIONS,
};
