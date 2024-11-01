import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Job = ({ job }) => {
    const { bookId, image, tags, bookName, author, category, rating } = job;

    return (
        <Link to={`/book/${bookId}`} className="card-link">
            <div className="card card-compact w-200 h-96 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 bg-base-100 shadow-xl">
                
                <figure className="w-full h-2/3 overflow-hidden">
                    <img className="w-full h-full object-cover" src={image} alt={bookName} />
                </figure>

                <div className="card-body p-4">
                    <h2 className="card-title text-base font-semibold">{tags.join(", ")}</h2>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p className="text-sm">{author}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-sm font-medium">{category}</p>
                        <div className="flex items-center text-sm font-medium">
                            <p>{rating}</p>
                            <CiStar className="h-5 w-5 ml-1 text-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Job;
