import {  createContext, useState , useEffect } from "react";
import all_products from "../Components/Assets/all_products";

const ShopContext = createContext(null);

//creating an empty cart object and initialising it as empty

const getDefaultCart =() =>{
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {};
}

const ShopContextProvider = ({children}) => {
    const products = {all_products};
    const [cart, setCart] = useState(getDefaultCart());

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProductToCart = (productId) =>{
        setCart((prevcart) =>{    // this will store the info of the previous cart item 
            return {
                ...prevcart,    //this will spred the info of the previous cart item 

                [productId]:(prevcart[productId]  ||  0) + 1
            }
        })
    }

    const removeProductFromCart =(productId) =>{
        setCart((prevcart) =>{
            //if the product is not present in the 
            if(!prevcart[productId]){
                return prevcart;
            }

            if(prevcart[productId] === 1){
                //jisbhi product ki prevcart value 1 hogi vo remove ker diya jayega aur newcart wale object mai remaining products aa jayenge
                const{[productId] : _, ...newcart} = prevcart;
                return newcart;
            }

            //otherwise decrement the product by 1
            return {
                ...prevcart,
                [productId]:prevcart[productId] -1
            };
        });
    };


    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(let item in cart){
            if(cart[item]>0){
                totalItems += cart[item];
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems,all_products , cart , removeProductFromCart , addProductToCart};
    return ( 
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
     );
}
 
export {ShopContextProvider, ShopContext};

