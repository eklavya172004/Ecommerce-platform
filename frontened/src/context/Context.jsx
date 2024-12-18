import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const Context = createContext();

const ContextProvider =(props) => {

    const ruppeeSign = '₹';
    const delivery_charges = 40;
    const [cartItems,setCartItems] = useState({});

    const addtocart = async (id,size) => {
            // let updateproduct = {...product};
            if(!size){
                toast.error("Please select prodcut size!");
                return;
            }

            let updateproduct = structuredClone(cartItems);

            if(updateproduct[id]){

                if(updateproduct[id][size]){ //if product has an size means already added to cart then just increase the size
                    updateproduct[id][size] += 1;
                    }else{
                    updateproduct[id][size] = 1;
                }
            }else{
                updateproduct[id] = {};
                updateproduct[id][size] = 1;
            }

            setCartItems(updateproduct);
    }

    const countCart = () => {
        let count=0;
        try {
            
            Object.values(cartItems).forEach(product => {
                Object.values(product).forEach(quantity => {
                    count += quantity;
                })
            })
            
        } catch (error) {
            
        }

        return count;
    }

    useEffect(() => {
        // console.log(countCar);
    },[cartItems]);

    const value = {
        products,ruppeeSign,delivery_charges,cartItems,addtocart,countCart
    }

    return <Context.Provider value={value}>
        {props.children}
            </Context.Provider>

}

export default ContextProvider;