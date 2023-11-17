## Namaste React 🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement (Follows File watching algorithm)
- File Watching Algorithm - written in c++ 
- Caching - Faster Builds (.Parcel-cache)
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing (To find )
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs hosting 
- Tree Shaking - remove unused code

...
# Namaste Food

**
 * Header
    - Logo
    - Nav Items
 * Body
    - Search Bar
    -RestaurantConatiner
      -RestaurantCard
      - Img
      - Name of Res, Star Rating, Cuisines, delivery time
 * Footer
    - Copyright
    - Links
    - Address
    - Contact

# Info about export and imports

* two types of exports and imports
   - default export and import
   - named export and import

* Default import and export
  - Just write export default Component_name;
  - while importing just import it without curly braces
  - It is used when we have to exoprt only one thing from a file. If we want export multiple thing then named export and import must be used

* Export import and export
  - when we have to export multiple things from a file in a component then we can't use default export it will give error. In this case we use Named export.
  - Wriite export keyword before a variable, E.G - export const LOGO_URL = "https//.xyz_abc.com"
  - While importing named exports we have to use curly brackets, E.G - import {Named_exports} from "../xyz/abc"
  

# React Hooks
  - When we want that , when we change data then UI should also be updated, For this react has some super Power called hooks
  - It is a normal Js utility function - written by Facebook Developers
  - Two very important hooks - useState() & useEffect()
  - useState() -> SuprePowerful state variables in react
  - Whenever a state variable updates, react will re-render the component