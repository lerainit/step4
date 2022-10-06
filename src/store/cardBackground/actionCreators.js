import { renderBackground,hideBackground} from "./actions";

 export const renderBackgroundAC = (payload) => ({type:renderBackground,payload})

 export const hideBackgroundAC =(payload) =>({type:hideBackground,payload})
