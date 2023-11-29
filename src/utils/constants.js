export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://play-lh.googleusercontent.com/4Lt7_4jeh0Nch0cataUnel9z5MJggHl0fM7VORtG91-EY6dMwo3SOsXL-JkQstiH1EMz";

//when we have to export multiple things from a file in a component then we can't use default export it will give error. In this case we use Named export.

// two types of export -> named export and normal export

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.2548238&lng=75.7001618&restaurantId=";

// if we want to use extension the crossproxy.io is not needed as the link has restrictions over 40 API calls in 1 minute so we use the extension to bypass that restriction.