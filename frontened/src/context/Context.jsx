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

    const removefromCart = async (id,size) => {
        if(!cartItems[id] && !cartItems[id][size]){
            toast.error("This product is not in your cart!");
            return;
        }

        let updatecart = structuredClone(cartItems);

        updatecart[id][size] -=1;
        
        if (updatecart[id][size] <= 0) {
            delete updatecart[id][size];
          }
        
          // If the product no longer has any sizes, deleting the product key
          if (Object.keys(updatecart[id]).length === 0) {
            delete updatecart[id];
          }
        

        setCartItems(updatecart);

        // toast.success("Items has been removed from the cart!😊");
    }

    const totalamount = ()=> {
        let amount = 0;

        for(const items in cartItems){
            let itemsinfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                    try {
                        if(cartItems[items][item]>0){
                            amount += itemsinfo.price*cartItems[items][item];
                        }
                    } catch (error) {
                        
                    }
            }
        }

        return amount;
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
        console.log(cartItems);
    },[cartItems]);

    const value = {
        products,ruppeeSign,delivery_charges,cartItems,addtocart,countCart,removefromCart,totalamount
    }

    return <Context.Provider value={value}>
        {props.children}
            </Context.Provider>

}

export default ContextProvider;