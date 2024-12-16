import { createContext } from "react";
import { products } from "../assets/assets";

export const Context = createContext();

const ContextProvider =(props) => {

    const ruppeeSign = '₹';
    const delivery_charges = 40;

    const value = {
        products,ruppeeSign,delivery_charges
    }

    return <Context.Provider value={value}>
        {props.children}
            </Context.Provider>

}

export default ContextProvider;