# Namaste React 


# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacemnt
- File Watching Algorithm 
- Caching - Faster Builds
- Bundling
- Compress
- HTTPs
- Tree shaking - remove unused code(minimize)

# Food ordering 

/**
     * Header
     *   - Logo
     *   - Nav Items
     * Body
     *   - Search
     *   - RestaurantContainer
     *      - RestaurantCard
     *         - Img
     *         - Name of restaurant, Star Rating , cuisine, delivery time
     * Footer
     *   - Copyright
     *   - Links
     *   - Address
     *   - Contact
     */

#  There are two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import { Component} from "path";


#  React Hooks
  There are multiple Hooks in react
 (Normal JS utility functions)
 - Two very imp Hooks aur bhi hote h wese
 - useState()   - Superpowerful State variables in react
 - useEffect()


 - when ui change by clicking - Reconciliation algorithm( React Fibre)
 - whenever there is a change in any state variable react find out the difference between virtual DOM it will re-render and update the component.


  #  Why react is fast?
 - React is doing efficient DOM manipulation bez it has virtual DOM(its kind a javascript object representaio  of those html tags )