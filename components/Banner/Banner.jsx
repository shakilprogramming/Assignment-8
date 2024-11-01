
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    const handleViewListClick = () => {
        navigate('/listed-books'); 
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
            <div className="card-body">
                <h2 className="card-title text-5xl">Books to freshen up</h2>
                <h2 className="card-title text-5xl text-black">your bookshelf</h2>
                <div className="card-actions justify-start mt-10">
                    <button
                        className="btn btn-primary bg-[#23BE0A] text-white"
                        style={{
                            width: '150px',
                            height: '60px',
                            fontSize: '20px',
                            padding: '5px 5px'
                        }}
                        onClick={handleViewListClick} 
                    >
                        View the list
                    </button>
                </div>
            </div>
            <figure>
                <img
                    src="/public/img/httpsi.ibb.co.comJ5rDb637259813.jpg.jpg"
                    alt="Album"
                    style={{ width: '600px', height: '600px' }}
                />
            </figure>
        </div>
    );
};

export default Banner;
