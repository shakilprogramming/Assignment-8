import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const book = useLoaderData();
    const navigate = useNavigate();
    
    // State to track if the book is already in Read/Wishlist
    const [isReadAdded, setIsReadAdded] = useState(false);
    const [isWishlistAdded, setIsWishlistAdded] = useState(false);

    const handleRead = () => {
        // Get existing read books from local storage
        const existingReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        const isAlreadyAdded = existingReadBooks.some(b => b.bookId === book.bookId);

        if (!isAlreadyAdded) {
            // Add to read books and update local storage
            existingReadBooks.push(book);
            localStorage.setItem('readBooks', JSON.stringify(existingReadBooks));
            toast.success("Successfully added to Read list!", {
                position: "top-right",
                autoClose: 2000,
            });
            setIsReadAdded(true); // Set as added
        } else {
            toast.error("Already added to Read list!", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handleWishlist = () => {
        // Get existing wishlist books from local storage
        const existingWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
        const isAlreadyAdded = existingWishlistBooks.some(b => b.bookId === book.bookId);

        if (!isAlreadyAdded) {
            // Add to wishlist and update local storage
            existingWishlistBooks.push(book);
            localStorage.setItem('wishlistBooks', JSON.stringify(existingWishlistBooks));
            toast.success("Successfully added to Wishlist!", {
                position: "top-right",
                autoClose: 2000,
            });
            setIsWishlistAdded(true); // Set as added
        } else {
            toast.error("Already added to Wishlist!", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };
    

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={book.image} alt={book.bookName} className="mt-6 max-w-sm" />
            </figure>
            <div className="card-body">
                <h1 className="text-4xl font-bold">{book.bookName}</h1>
                <p className="text-xl">By: {book.author}</p>
                <hr />
                <p className="text-xl">{book.category}</p>
                <hr />
                <p className="text-2xl font-bold">Review: <span className="font-normal">{book.review}</span></p>
                <hr />
                <p className="text-1xl font-bold">
                    Tag: 
                    <span className="font-normal flex flex-wrap gap-3 mt-2">
                        {book.tags.map((tag, index) => (
                            <span key={index} className="bg-[#23BE0A] text-white px-2 py-1 rounded-xl">#{tag}</span>
                        ))}
                    </span>
                </p>
                <hr />
                <table className="table-auto text-1xl mt-6">
                    <tbody>
                        <tr>
                            <td className="pr-4">Number of Pages:</td>
                            <td className="font-bold">{book.totalPages}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Publisher:</td>
                            <td className="font-bold">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Year of Publishing:</td>
                            <td className="font-bold">{book.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="pr-4">Rating:</td>
                            <td className="font-bold">{book.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex gap-5 mt-4">
                    <button onClick={handleRead} className="px-4 py-2 bg-white text-black border border-gray-400 rounded hover:bg-gray-100">
                        Read
                    </button>
                    <button onClick={handleWishlist} className="px-4 py-2 bg-[#50B1C9] text-white rounded">
                        Wishlist
                    </button>
                    {/* <button onClick={handleApplyJob}> buton</button> */}
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;
