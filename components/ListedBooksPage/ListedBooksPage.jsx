import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ListedBooksPage = () => {
    const [activeTab, setActiveTab] = useState("Read");
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [sortBy, setSortBy] = useState("bookName"); 
    const navigate = useNavigate();

    useEffect(() => {
       
        const storedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        const storedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

        setReadBooks(storedReadBooks);
        setWishlistBooks(storedWishlistBooks);
    }, []);

    
    const handleSort = (books) => {
        return books.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return 1; 
            if (a[sortBy] > b[sortBy]) return -1; 
            return 0;
        });
    };

    const sortedReadBooks = handleSort([...readBooks]); 
    const sortedWishlistBooks = handleSort([...wishlistBooks]);

  
    const goToDetailsPage = (bookId) => {
        navigate(`/book/${bookId}`);
    };

    return (
        <div className="p-4">
            <ToastContainer />
            <h1 className="text-3xl font-bold mb-4">Listed Books</h1>

           
            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 ${activeTab === "Read" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}
                    onClick={() => setActiveTab("Read")}
                >
                    Read
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "Wishlist" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}
                    onClick={() => setActiveTab("Wishlist")}
                >
                    Wishlist
                </button>
            </div>

           
            <div className="mb-4">
                <label htmlFor="sortBy" className="mr-2">Sort By:</label>
                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded p-2"
                >
                    <option value="bookName">Book Name</option>
                    <option value="author">Author</option>
                    <option value="yearOfPublishing">Year of Publishing</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            
            <div className="bg-gray-50 shadow-lg p-4 rounded-lg">
                {activeTab === "Read" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Read Books</h2>
                        {sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book) => (
                                <div key={book.bookId} className="mb-2">
                                    <div className="flex card card-side bg-base-80 shadow-xl">
                                        <figure className="w-full h-2/3 overflow-hidden">
                                            <img className="w-80 h-50 mr-96 object-cover" src={book.image} alt={book.bookName} />
                                        </figure>
                                        <div className="">
                                            <h3 className="text-xl font-semibold mr-96">{book.bookName}</h3>
                                            <p>By: {book.author}</p>
                                            <div className="flex mt-6">
                                                <IoLocationOutline className="mt-3" />
                                                <p className="mt-2">Year: {book.yearOfPublishing}</p>
                                            </div>
                                            <div className="flex gap-5">
                                                <p className="mt-2">
                                                    <span className="bg-[#328EFF] text-white px-2 py-1 rounded-xl ">{book.category}</span>
                                                </p>
                                                <p className="mt-2 gap-5">
                                                    <span className="bg-[#FFAC33] text-white px-2 py-1 rounded-xl gap-2">Rating {book.rating}</span>
                                                </p>
                                                <button
                                                    onClick={() => goToDetailsPage(book.bookId)}
                                                    className="px-4 py-2 bg-[#23BE0A] text-white rounded-xl"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No books in Read list.</p>
                        )}
                    </>
                )}

                {activeTab === "Wishlist" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Wishlist Books</h2>
                        {sortedWishlistBooks.length > 0 ? (
                            sortedWishlistBooks.map((book) => (
                                <div key={book.bookId} className="mb-2">
                                    <h3 className="text-xl font-semibold">{book.bookName}</h3>
                                    <p>By: {book.author}</p>
                                    <p>Year: {book.yearOfPublishing}</p>
                                    <p>Rating: {book.rating}</p>
                                </div>
                            ))
                        ) : (
                            <p>No books in Wishlist.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ListedBooksPage;
