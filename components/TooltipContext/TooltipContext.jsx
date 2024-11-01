import { createContext, useContext, useState } from "react";

const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    const addReadBook = (book) => {
        setReadBooks((prev) => [...prev, book]);
    };

    const addWishlistBook = (book) => {
        setWishlistBooks((prev) => [...prev, book]);
    };

    return (
        <TooltipContext.Provider value={{ readBooks, wishlistBooks, addReadBook, addWishlistBook }}>
            {children}
        </TooltipContext.Provider>
    );
};

export const useTooltip = () => useContext(TooltipContext);
