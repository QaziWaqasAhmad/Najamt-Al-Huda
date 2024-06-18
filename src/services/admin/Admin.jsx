import Api from "../index";
import { endPoints, requestType } from "../../constants/variables";


// Login
export const loginAdmin = (params) => {
    return Api(`${endPoints.loginAdmin}`, params, requestType.POST,null) 
}