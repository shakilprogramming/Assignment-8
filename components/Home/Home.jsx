import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
             
            <h2>this is home</h2>
        </div>
    );
};

export default Home;